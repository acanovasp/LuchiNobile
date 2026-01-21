'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Player from '@vimeo/player'
import type { Project } from '@/lib/queries'

interface VideoPlayerProps {
  project: Project
}

export default function VideoPlayer({ project }: VideoPlayerProps) {
  const router = useRouter()
  const playerContainerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<Player | null>(null)
  const isMountedRef = useRef(true)
  
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [controlsVisible, setControlsVisible] = useState(true)

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
          width: window.innerWidth,
          height: window.innerHeight,
          autoplay: true,
          muted: false,
          loop: false,
          controls: false,
          responsive: true,
        })

        // Wait for player to be ready
        await player.ready()
        
        if (!isMountedRef.current) {
          player.destroy().catch(() => {})
          return
        }

        playerRef.current = player

        player.on('play', () => {
          if (isMountedRef.current) setIsPlaying(true)
        })
        player.on('pause', () => {
          if (isMountedRef.current) setIsPlaying(false)
        })
        player.on('ended', () => {
          if (isMountedRef.current) setIsPlaying(false)
        })
        player.on('volumechange', (data) => {
          if (isMountedRef.current) setIsMuted(data.volume === 0)
        })

        const dur = await player.getDuration()
        if (isMountedRef.current) setDuration(dur)
        
        const muted = await player.getMuted()
        if (isMountedRef.current) setIsMuted(muted)

        // Smooth progress updates using requestAnimationFrame
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

  // Hide controls after inactivity
  useEffect(() => {
    let timeout: NodeJS.Timeout

    const showControls = () => {
      setControlsVisible(true)
      clearTimeout(timeout)
      timeout = setTimeout(() => setControlsVisible(false), 3000)
    }

    const handleMouseMove = () => showControls()
    const handleClick = () => showControls()

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('click', handleClick)

    showControls()

    return () => {
      clearTimeout(timeout)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('click', handleClick)
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

  return (
    <div className="video-player-page">
      <div
        className={`video-player ${controlsVisible ? 'video-player--controls-visible' : ''}`}
      >
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

