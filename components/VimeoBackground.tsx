'use client'

import { useEffect, useRef, useState } from 'react'

interface VimeoBackgroundProps {
  vimeoId: string
  className?: string
  posterUrl?: string
  priority?: boolean
}

export default function VimeoBackground({
  vimeoId,
  className = '',
  posterUrl,
  priority = false,
}: VimeoBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const handleLoad = () => {
      // Small delay to ensure video has started
      setTimeout(() => setIsLoaded(true), 500)
    }

    iframe.addEventListener('load', handleLoad)
    return () => iframe.removeEventListener('load', handleLoad)
  }, [])

  const embedUrl = `https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&muted=1&quality=1080p&autopause=0`

  return (
    <div className={`project-section__video-container ${className}`}>
      {posterUrl && (
        <div
          className={`project-section__poster ${isLoaded ? 'project-section__poster--hidden' : ''}`}
          style={{ backgroundImage: `url(${posterUrl})` }}
        />
      )}
      <div className="project-section__iframe-wrapper">
        <iframe
          ref={iframeRef}
          src={embedUrl}
          allow="autoplay; fullscreen; picture-in-picture"
          loading={priority ? 'eager' : 'lazy'}
          title={`Video ${vimeoId}`}
        />
      </div>
      <div className="project-section__overlay" />
    </div>
  )
}

