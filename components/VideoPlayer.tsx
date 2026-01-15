'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Player from '@vimeo/player'
import Link from 'next/link'
import type { Project } from '@/lib/queries'

interface VideoPlayerProps {
  project: Project
}

export default function VideoPlayer({ project }: VideoPlayerProps) {
  const router = useRouter()
  const playerContainerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<Player | null>(null)
  
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [controlsVisible, setControlsVisible] = useState(true)

  // Initialize Vimeo player
  useEffect(() => {
    const container = playerContainerRef.current
    if (!container) return

    const player = new Player(container, {
      id: parseInt(project.fullVimeoId, 10),
      width: window.innerWidth,
      height: window.innerHeight,
      autoplay: true,
      muted: false,
      loop: false,
      controls: false,
      responsive: true,
    })

    playerRef.current = player

    player.on('play', () => setIsPlaying(true))
    player.on('pause', () => setIsPlaying(false))
    player.on('ended', () => setIsPlaying(false))
    
    player.on('timeupdate', (data) => {
      setProgress(data.percent * 100)
      setDuration(data.duration)
    })

    player.getDuration().then(setDuration)

    return () => {
      player.destroy()
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

  const handlePlayPause = useCallback(() => {
    const player = playerRef.current
    if (!player) return

    if (isPlaying) {
      player.pause()
    } else {
      player.play()
    }
  }, [isPlaying])

  const handleMuteToggle = useCallback(() => {
    const player = playerRef.current
    if (!player) return

    player.setMuted(!isMuted)
    setIsMuted(!isMuted)
  }, [isMuted])

  const handleProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const player = playerRef.current
      if (!player || !duration) return

      const rect = e.currentTarget.getBoundingClientRect()
      const percent = (e.clientX - rect.left) / rect.width
      const time = percent * duration

      player.setCurrentTime(time)
    },
    [duration]
  )

  const handleClose = useCallback(() => {
    router.push('/')
  }, [router])

  return (
    <div className="video-player-page">
      <div
        className={`video-player ${controlsVisible ? 'video-player--controls-visible' : ''}`}
      >
        {/* Video Container */}
        <div ref={playerContainerRef} className="video-player__container" />

        {/* Header */}
        <div className="video-player__header">
          <Link href="/" className="video-player__logo">
            Luchi Nóbile
          </Link>
        </div>

        {/* Controls */}
        <div className="video-player__controls">
          <div className="video-player__controls-inner">
            {/* Project Info */}
            <div className="video-player__info">
              <span className="video-player__number">
                {String(project.order || 1).padStart(2, '0')}
              </span>
              <span className="video-player__title">{project.title}</span>
              <span className="video-player__client">{project.client}</span>
            </div>

            {/* Buttons */}
            <div className="video-player__buttons">
              <button
                className="video-player__button"
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

        {/* Close Button */}
        <button className="video-player__close" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  )
}

