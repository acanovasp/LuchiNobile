'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Player from '@vimeo/player'
import type { Project } from '@/lib/queries'

interface VideoPlayerProps {
  project: Project
}

// Helper to check if device is mobile
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth <= 768 || 'ontouchstart' in window
}

// Helper to apply cover sizing for desktop
const applyCoverSizing = (
  iframe: HTMLIFrameElement,
  videoAspect: number,
  container: HTMLElement
) => {
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const viewportAspect = viewportWidth / viewportHeight

  if (videoAspect > viewportAspect) {
    // Video is wider than viewport - fit height, overflow width
    iframe.style.height = '100vh'
    iframe.style.width = `${(videoAspect / viewportAspect) * 100}vh`
  } else {
    // Video is taller than viewport - fit width, overflow height
    iframe.style.width = '100vw'
    iframe.style.height = `${(viewportAspect / videoAspect) * 100}vw`
  }

  // Set CSS variable for mobile aspect ratio
  container.style.setProperty('--video-aspect-ratio', String(videoAspect))
}

export default function VideoPlayer({ project }: VideoPlayerProps) {
  const router = useRouter()
  const playerContainerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<Player | null>(null)
  const isMountedRef = useRef(true)
  const videoAspectRef = useRef<number>(16 / 9) // Default to 16:9
  
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [controlsVisible, setControlsVisible] = useState(true)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null)

  // Fetch Vimeo thumbnail immediately on mount
  useEffect(() => {
    if (!project.fullVimeoId) return

    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${project.fullVimeoId}&width=1920`)
      .then(res => res.json())
      .then(data => {
        if (isMountedRef.current && data.thumbnail_url) {
          // Get higher resolution thumbnail by modifying the URL
          const highResThumbnail = data.thumbnail_url
            .replace(/_\d+x\d+/, '_1920x1080')
            .replace(/\?.*$/, '') // Remove query params for cleaner URL
          setThumbnailUrl(highResThumbnail)
        }
      })
      .catch(() => {
        // Failed to fetch thumbnail, video will show when ready
      })
  }, [project.fullVimeoId])

  // Initialize Vimeo player
  useEffect(() => {
    const container = playerContainerRef.current
    if (!container) return

    isMountedRef.current = true
    let rafId: number
    let player: Player | null = null

    const initPlayer = async () => {
      try {
        player = new Player(container, {
          id: parseInt(project.fullVimeoId, 10),
          autoplay: true,
          muted: false,
          loop: false,
          controls: false,
          responsive: false, // Disable to control sizing manually
        })

        // Wait for player to be ready
        await player.ready()
        
        if (!isMountedRef.current) {
          player.destroy().catch(() => {})
          return
        }

        playerRef.current = player

        // Get video dimensions and apply sizing
        const [videoWidth, videoHeight] = await Promise.all([
          player.getVideoWidth(),
          player.getVideoHeight(),
        ])

        if (!isMountedRef.current) return

        const videoAspect = videoWidth / videoHeight
        videoAspectRef.current = videoAspect

        // Apply sizing based on device type
        const iframe = container.querySelector('iframe')
        if (iframe) {
          if (!isMobileDevice()) {
            // Desktop: Apply cover sizing
            applyCoverSizing(iframe, videoAspect, container)
          } else {
            // Mobile: Set aspect ratio CSS variable for contained view
            container.style.setProperty('--video-aspect-ratio', String(videoAspect))
          }
        }

        // Mark video as ready when it starts playing (hide thumbnail)
        player.on('playing', () => {
          if (isMountedRef.current) {
            setIsVideoReady(true)
            setIsPlaying(true)
          }
        })
        player.on('play', () => {
          if (isMountedRef.current) setIsPlaying(true)
        })
        player.on('pause', () => {
          if (isMountedRef.current) setIsPlaying(false)
        })
        player.on('ended', () => {
          if (isMountedRef.current && playerRef.current) {
            setIsPlaying(false)
            // Fallback: seek back to beginning if preemptive check missed
            playerRef.current.setCurrentTime(0).catch(() => {})
          }
        })
        // Listen for volume changes - check actual muted state, not just volume
        player.on('volumechange', async () => {
          if (isMountedRef.current && playerRef.current) {
            try {
              const mutedState = await playerRef.current.getMuted()
              if (isMountedRef.current) setIsMuted(mutedState)
            } catch {
              // Player destroyed
            }
          }
        })

        const dur = await player.getDuration()
        if (isMountedRef.current) setDuration(dur)
        
        // Get initial muted state
        const muted = await player.getMuted()
        if (isMountedRef.current) setIsMuted(muted)
        
        // On mobile, browsers may force mute for autoplay - try to unmute after user interaction
        if (isMobileDevice() && muted) {
          const tryUnmute = async () => {
            if (!isMountedRef.current || !playerRef.current) return
            try {
              await playerRef.current.setMuted(false)
              const stillMuted = await playerRef.current.getMuted()
              if (isMountedRef.current) setIsMuted(stillMuted)
            } catch {
              // Unmute failed
            }
            // Remove listeners after first attempt
            document.removeEventListener('touchstart', tryUnmute)
            document.removeEventListener('click', tryUnmute)
          }
          // Try to unmute on first user interaction
          document.addEventListener('touchstart', tryUnmute, { once: true })
          document.addEventListener('click', tryUnmute, { once: true })
        }

        // Progress updates - use timeupdate event for reliable mobile updates
        let hasReachedEnd = false // Prevent multiple triggers
        
        // Use Vimeo's timeupdate event which fires reliably on mobile
        player.on('timeupdate', (data: { seconds: number; percent: number; duration: number }) => {
          if (!isMountedRef.current) return
          
          // Update progress using the percent provided by Vimeo (more reliable)
          setProgress(data.percent * 100)
          
          // Preemptively jump to beginning when very close to end
          // This prevents Vimeo's end screen from ever appearing
          const timeRemaining = data.duration - data.seconds
          if (timeRemaining < 0.5 && timeRemaining > 0 && !hasReachedEnd && playerRef.current) {
            hasReachedEnd = true
            playerRef.current.pause().then(() => {
              if (playerRef.current) {
                return playerRef.current.setCurrentTime(0)
              }
            }).then(() => {
              if (isMountedRef.current) {
                setIsPlaying(false)
                setProgress(0)
              }
              // Reset flag after a short delay to allow replaying
              setTimeout(() => { hasReachedEnd = false }, 1000)
            }).catch(() => {})
          }
        })
        
        // Also use RAF for smoother desktop updates (timeupdate fires less frequently)
        if (!isMobileDevice()) {
          const updateProgress = async () => {
            if (!isMountedRef.current || !playerRef.current) return
            
            try {
              const currentTime = await playerRef.current.getCurrentTime()
              const currentDur = await playerRef.current.getDuration()
              if (isMountedRef.current && currentDur > 0) {
                setProgress((currentTime / currentDur) * 100)
              }
            } catch {
              // Player was destroyed, stop the loop
              return
            }
            
            if (isMountedRef.current) {
              rafId = requestAnimationFrame(updateProgress)
            }
          }
          
          rafId = requestAnimationFrame(updateProgress)
        }
      } catch {
        // Player initialization failed (component unmounted during init)
      }
    }

    initPlayer()

    return () => {
      isMountedRef.current = false
      cancelAnimationFrame(rafId)
      if (playerRef.current) {
        playerRef.current.destroy().catch(() => {})
        playerRef.current = null
      } else if (player) {
        player.destroy().catch(() => {})
      }
    }
  }, [project.fullVimeoId])

  // Handle resize events to recalculate video dimensions
  useEffect(() => {
    const handleResize = () => {
      const container = playerContainerRef.current
      if (!isMountedRef.current || !container) return

      const iframe = container.querySelector('iframe')
      if (!iframe) return

      if (!isMobileDevice()) {
        // Desktop: Recalculate cover sizing
        applyCoverSizing(iframe, videoAspectRef.current, container)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle orientation change for mobile auto-fullscreen
  useEffect(() => {
    const handleOrientationChange = () => {
      if (!isMountedRef.current) return

      const isLandscape = window.matchMedia('(orientation: landscape)').matches
      const isMobile = isMobileDevice()

      if (isLandscape && isMobile) {
        // Request fullscreen on the iframe when rotating to landscape
        const iframe = playerContainerRef.current?.querySelector('iframe')
        if (iframe) {
          // Try different fullscreen methods for cross-browser support
          const requestFS = iframe.requestFullscreen 
            || (iframe as HTMLIFrameElement & { webkitRequestFullscreen?: () => Promise<void> }).webkitRequestFullscreen
            || (iframe as HTMLIFrameElement & { mozRequestFullScreen?: () => Promise<void> }).mozRequestFullScreen
            || (iframe as HTMLIFrameElement & { msRequestFullscreen?: () => Promise<void> }).msRequestFullscreen

          if (requestFS) {
            requestFS.call(iframe).catch(() => {
              // Fullscreen request failed, possibly user gesture required
            })
          }
        }
      }
    }

    // Listen for orientation changes
    window.addEventListener('orientationchange', handleOrientationChange)
    
    // Also use Screen Orientation API if available
    if (screen.orientation) {
      screen.orientation.addEventListener('change', handleOrientationChange)
    }

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange)
      if (screen.orientation) {
        screen.orientation.removeEventListener('change', handleOrientationChange)
      }
    }
  }, [])

  // Hide controls after 5 seconds on desktop, show when cursor in bottom 15%
  useEffect(() => {
    // On mobile, always show controls
    if (isMobileDevice()) {
      setControlsVisible(true)
      return
    }

    let initialTimeout: NodeJS.Timeout
    let hasHiddenOnce = false

    // Hide controls after 5 seconds from video start
    initialTimeout = setTimeout(() => {
      if (isMountedRef.current) {
        setControlsVisible(false)
        hasHiddenOnce = true
      }
    }, 5000)

    const handleMouseMove = (e: MouseEvent) => {
      if (!hasHiddenOnce) return // Don't interfere with initial 5 second timer
      
      const viewportHeight = window.innerHeight
      const bottomThreshold = viewportHeight * 0.85 // Top 85% = bottom 15% starts here
      
      if (e.clientY >= bottomThreshold) {
        // Cursor is in bottom 15% - show controls
        setControlsVisible(true)
      } else {
        // Cursor is outside bottom 15% - hide controls
        setControlsVisible(false)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearTimeout(initialTimeout)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handlePlayPause = useCallback(async () => {
    const player = playerRef.current
    if (!player || !isMountedRef.current) return

    try {
      const paused = await player.getPaused()
      if (!isMountedRef.current) return
      
      if (paused) {
        await player.play()
        if (isMountedRef.current) setIsPlaying(true)
      } else {
        await player.pause()
        if (isMountedRef.current) setIsPlaying(false)
      }
    } catch {
      // Player was destroyed, ignore
    }
  }, [])

  const handleMuteToggle = useCallback(async () => {
    const player = playerRef.current
    if (!player || !isMountedRef.current) return

    try {
      const muted = await player.getMuted()
      if (!isMountedRef.current) return
      
      await player.setMuted(!muted)
      if (isMountedRef.current) setIsMuted(!muted)
    } catch {
      // Player was destroyed, ignore
    }
  }, [])

  const handleProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const player = playerRef.current
      if (!player || !duration || !isMountedRef.current) return

      const rect = e.currentTarget.getBoundingClientRect()
      const percent = (e.clientX - rect.left) / rect.width
      const time = percent * duration

      player.setCurrentTime(time).catch(() => {})
    },
    [duration]
  )

  const handleClose = useCallback(() => {
    // Set flag to skip splash screen when returning to homepage
    sessionStorage.setItem('skipSplash', 'true')
    
    // Add fade-out class to transition overlay
    const overlay = document.querySelector('.page-transition')
    if (overlay) {
      overlay.classList.add('page-transition--visible')
      
      // Navigate after fade-out completes (800ms)
      setTimeout(() => {
        router.push('/')
      }, 800)
    } else {
      router.push('/')
    }
  }, [router])

  // Handle ESC key to close player
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleClose])

  const handleFullscreen = useCallback(async () => {
    const player = playerRef.current
    
    // On mobile, use Vimeo player's fullscreen method which handles iOS/Android properly
    if (isMobileDevice() && player) {
      try {
        // Vimeo player has a requestFullscreen method that works better on mobile
        await player.requestFullscreen()
        return
      } catch {
        // Fallback to manual fullscreen if Vimeo method fails
      }
    }
    
    // Desktop fallback or if Vimeo method failed
    const container = document.querySelector('.video-player-page')
    if (!container) return

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {})
    } else {
      // Try container first, then iframe
      try {
        await container.requestFullscreen()
      } catch {
        // Try the iframe directly (may work better on some mobile browsers)
        const iframe = playerContainerRef.current?.querySelector('iframe')
        if (iframe) {
          const requestFS = iframe.requestFullscreen 
            || (iframe as HTMLIFrameElement & { webkitRequestFullscreen?: () => Promise<void> }).webkitRequestFullscreen
            || (iframe as HTMLIFrameElement & { webkitEnterFullscreen?: () => Promise<void> }).webkitEnterFullscreen
          if (requestFS) {
            requestFS.call(iframe).catch(() => {})
          }
        }
      }
    }
  }, [])

  return (
    <div className="video-player-page">
      <div
        className={`video-player ${controlsVisible ? 'video-player--controls-visible' : ''}`}
      >
        {/* Thumbnail placeholder - shows while Vimeo loads */}
        {thumbnailUrl && (
          <div 
            className={`video-player__poster ${isVideoReady ? 'video-player__poster--hidden' : ''}`}
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          />
        )}

        {/* Video Container */}
        <div ref={playerContainerRef} className="video-player__container" />
        
        {/* Clickable overlay for play/pause */}
        <div 
          className="video-player__click-area"
          onClick={handlePlayPause}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        />

        {/* Controls */}
        <div className="video-player__controls">
          <div className="video-player__controls-inner">
            <div className="video-player__controls-inner-left">
              {/* Project Info */}
              <div className="video-player__info">
                
                <span className="video-player__number">
                  {String(project.order || 1).padStart(2, '0')}
                </span>
                <div className="video-player__info-project">
                  <span className="video-player__title">{project.title}</span>
                  <span className="video-player__client">{project.client}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="video-player__buttons">
                <button
                  className="video-player__button play"
                  onClick={handlePlayPause}
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button
                  className="video-player__button"
                  onClick={handleMuteToggle}
                >
                  {isMuted ? 'Unmute' : 'Mute'}
                </button>
                <button
                  className="video-player__button video-player__button--fullscreen"
                  onClick={handleFullscreen}
                >
                  FS
                </button>
              </div>
            </div>
            {/* Close Button */}
            <button className="video-player__close" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="video-player__progress">
              <div
                className="video-player__progress-bar"
                onClick={handleProgressClick}
              >
                <div
                  className="video-player__progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
      </div>
    </div>
  )
}

