'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

interface SplashScreenProps {
  onComplete: () => void
  minDuration?: number
}

const LOGO_TEXT = 'Luchi Nóbile'
const TYPING_DURATION = 1200 // 1.2s for typing
const HOLD_DURATION = 1500 // 2.5s hold after typing (increased by 1s)
const LOGO_HEAD_START = 250 // background starts fading 1s after logo starts
const BG_FADE_DURATION = 1200 // background fades in 1.2s

export default function SplashScreen({
  onComplete,
  minDuration = 3500,
}: SplashScreenProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isLogoFading, setIsLogoFading] = useState(false)
  const [isBgFading, setIsBgFading] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const isSkippingRef = useRef(false)

  // Function to trigger the fade-out sequence
  const triggerFadeOut = useCallback(() => {
    if (isSkippingRef.current) return // Prevent multiple triggers
    isSkippingRef.current = true

    // Start logo fade first
    setIsLogoFading(true)

    // Start background fade shortly after
    setTimeout(() => {
      setIsBgFading(true)
    }, LOGO_HEAD_START)

    // Hide and complete after background fade finishes
    setTimeout(() => {
      setIsHidden(true)
      onComplete()
    }, LOGO_HEAD_START + BG_FADE_DURATION)
  }, [onComplete])

  // Click to skip
  const handleClick = useCallback(() => {
    triggerFadeOut()
  }, [triggerFadeOut])

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

  // Main sequence - wait for minimum duration then fade out
  useEffect(() => {
    const runSequence = async () => {
      // Wait for minimum duration (typing + hold)
      const totalAnimationTime = TYPING_DURATION + HOLD_DURATION
      const waitTime = Math.max(minDuration, totalAnimationTime)
      
      await new Promise(resolve => setTimeout(resolve, waitTime))

      // Only trigger if not already skipped
      if (!isSkippingRef.current) {
        triggerFadeOut()
      }
    }

    runSequence()
  }, [minDuration, triggerFadeOut])

  if (isHidden) return null

  return (
    <div 
      className={`splash ${isBgFading ? 'splash--fading' : ''}`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <h1 className={`splash__logo ${isLogoFading ? 'splash__logo--fading' : ''}`}>
        {displayedText}
      </h1>
    </div>
  )
}

