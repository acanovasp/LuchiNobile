'use client'

import { useRef, useEffect } from 'react'

interface LocalVideoBackgroundProps {
  videoUrl: string
  className?: string
}

export default function LocalVideoBackground({
  videoUrl,
  className = '',
}: LocalVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Ensure video plays
    video.play().catch(() => {
      // Autoplay might be blocked, that's okay
    })
  }, [])

  return (
    <div className={`project-section__video-container ${className}`}>
      <div className="project-section__local-video-wrapper">
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="project-section__local-video"
        />
      </div>
      <div className="project-section__overlay" />
    </div>
  )
}
