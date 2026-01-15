'use client'

import { useState, useEffect, useCallback } from 'react'

interface SplashScreenProps {
  vimeoIds: string[]
  onComplete: () => void
  minDuration?: number
}

export default function SplashScreen({
  vimeoIds,
  onComplete,
  minDuration = 3500,
}: SplashScreenProps) {
  const [isHidden, setIsHidden] = useState(false)
  const [isFading, setIsFading] = useState(false)

  const preloadVimeoVideos = useCallback(async (ids: string[]) => {
    // Preload Vimeo video iframes by creating them off-screen
    const preloadPromises = ids.slice(0, 3).map((id) => {
      return new Promise<void>((resolve) => {
        const iframe = document.createElement('iframe')
        iframe.style.position = 'absolute'
        iframe.style.top = '-9999px'
        iframe.style.left = '-9999px'
        iframe.style.width = '1px'
        iframe.style.height = '1px'
        iframe.style.opacity = '0'
        iframe.style.pointerEvents = 'none'
        iframe.src = `https://player.vimeo.com/video/${id}?background=1&autoplay=0&loop=1&muted=1&quality=1080p`
        iframe.setAttribute('loading', 'eager')
        
        iframe.onload = () => {
          // Keep iframe loaded but hidden for cache benefit
          resolve()
        }
        
        iframe.onerror = () => {
          resolve() // Resolve anyway to not block
        }

        document.body.appendChild(iframe)
        
        // Timeout fallback
        setTimeout(resolve, 5000)
      })
    })

    await Promise.all(preloadPromises)
  }, [])

  useEffect(() => {
    const startTime = Date.now()
    
    const runPreload = async () => {
      // Start preloading videos
      await preloadVimeoVideos(vimeoIds)
      
      // Ensure minimum duration has passed
      const elapsed = Date.now() - startTime
      const remaining = Math.max(0, minDuration - elapsed)
      
      setTimeout(() => {
        setIsFading(true)
        setTimeout(() => {
          setIsHidden(true)
          onComplete()
        }, 500)
      }, remaining)
    }

    runPreload()
  }, [vimeoIds, minDuration, onComplete, preloadVimeoVideos])

  if (isHidden) return null

  return (
    <div className={`splash ${isHidden ? 'splash--hidden' : ''}`}>
      <h1 className={`splash__logo ${isFading ? 'splash__logo--fading' : ''}`}>
        Luchi Nóbile
      </h1>
    </div>
  )
}

