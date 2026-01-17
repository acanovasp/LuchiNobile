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
const LOGO_FADE_DURATION = 800 // logo fades in 0.8s
const LOGO_HEAD_START = 1000 // logo starts fading 1s before background
const BG_FADE_DURATION = 1200 // background fades in 1.2s

export default function SplashScreen({
  vimeoIds,
  onComplete,
  minDuration = 3500,
}: SplashScreenProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isLogoFading, setIsLogoFading] = useState(false)
  const [isBgFading, setIsBgFading] = useState(false)
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

      // Start logo fade first
      setIsLogoFading(true)

      // Start background fade 1 second later
      setTimeout(() => {
        setIsBgFading(true)
      }, LOGO_HEAD_START)

      // Hide and complete after background fade finishes
      setTimeout(() => {
        setIsHidden(true)
        onComplete()
      }, LOGO_HEAD_START + BG_FADE_DURATION)
    }

    runSequence()
  }, [vimeoIds, minDuration, onComplete, preloadVimeoVideos])

  if (isHidden) return null

  return (
    <div className={`splash ${isBgFading ? 'splash--fading' : ''}`}>
      <h1 className={`splash__logo ${isLogoFading ? 'splash__logo--fading' : ''}`}>
        {displayedText}
      </h1>
    </div>
  )
}

