'use client'

import { useState, useEffect, useCallback } from 'react'

interface SplashScreenProps {
  vimeoIds: string[]
  onComplete: () => void
  minDuration?: number
}

const LOGO_TEXT = 'Luchi Nóbile'
const TYPING_DURATION = 1200 // 1.2s for typing (faster)
const HOLD_DURATION = 1500 // 1.5s hold after typing
const FADE_DURATION = 600 // 0.6s fade out

export default function SplashScreen({
  vimeoIds,
  onComplete,
  minDuration = 3500,
}: SplashScreenProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isFading, setIsFading] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  const preloadVimeoVideos = useCallback(async (ids: string[]) => {
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
        
        iframe.onload = () => resolve()
        iframe.onerror = () => resolve()

        document.body.appendChild(iframe)
        setTimeout(resolve, 5000)
      })
    })

    await Promise.all(preloadPromises)
  }, [])

  // Typing animation
  useEffect(() => {
    let currentIndex = 0
    const charDelay = TYPING_DURATION / LOGO_TEXT.length

    const typeInterval = setInterval(() => {
      currentIndex++
      setDisplayedText(LOGO_TEXT.slice(0, currentIndex))
      
      if (currentIndex >= LOGO_TEXT.length) {
        clearInterval(typeInterval)
      }
    }, charDelay)

    return () => clearInterval(typeInterval)
  }, [])

  // Main sequence
  useEffect(() => {
    const startTime = Date.now()

    const runSequence = async () => {
      // Preload videos in parallel with animation
      await preloadVimeoVideos(vimeoIds)

      // Wait for minimum duration (typing + hold)
      const elapsed = Date.now() - startTime
      const totalAnimationTime = TYPING_DURATION + HOLD_DURATION
      const remaining = Math.max(0, Math.max(minDuration, totalAnimationTime) - elapsed)

      await new Promise(resolve => setTimeout(resolve, remaining))

      // Start fade out
      setIsFading(true)

      // Wait for fade animation to complete
      setTimeout(() => {
        setIsHidden(true)
        onComplete()
      }, FADE_DURATION)
    }

    runSequence()
  }, [vimeoIds, minDuration, onComplete, preloadVimeoVideos])

  if (isHidden) return null

  return (
    <div className={`splash ${isFading ? 'splash--fading' : ''}`}>
      <h1 className="splash__logo">
        {displayedText}
      </h1>
    </div>
  )
}

