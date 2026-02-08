'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

interface SplashScreenProps {
  onComplete: () => void
  minDuration?: number
}

const LOGO_TEXT = 'Luchi Nóbile'
const REVEAL_DURATION = 1000 // 1.5s for blur-fade reveal
const HOLD_DURATION = 500 // Hold after reveal
const LOGO_HEAD_START = 600 // background starts fading after logo starts
const BG_FADE_DURATION = 1200 // background fades in 1.2s

export default function SplashScreen({
  onComplete,
  minDuration = 1500,
}: SplashScreenProps) {
  const [isRevealing, setIsRevealing] = useState(false)
  const [isLogoFading, setIsLogoFading] = useState(false)
  const [isBgFading, setIsBgFading] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const isSkippingRef = useRef(false)

  // Start reveal animation on mount
  useEffect(() => {
    // Small delay to ensure CSS is ready
    const timer = setTimeout(() => {
      setIsRevealing(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

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

  // Main sequence - wait for minimum duration then fade out
  useEffect(() => {
    const runSequence = async () => {
      // Wait for minimum duration (reveal + hold)
      const totalAnimationTime = REVEAL_DURATION + HOLD_DURATION
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

  // Split text into individual characters for staggered animation
  const characters = LOGO_TEXT.split('')
  const totalChars = characters.length
  const animationDuration = 1.5 // 1.5 seconds total

  return (
    <div 
      className={`splash ${isBgFading ? 'splash--fading' : ''}`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <h1 className={`splash__logo ${isLogoFading ? 'splash__logo--fading' : ''}`}>
        {characters.map((char, index) => {
          // Calculate delay for each character (staggered from left to right)
          const delay = (index / totalChars) * (animationDuration * 0.7) // 70% of duration for stagger
          
          return (
            <span
              key={index}
              className={`splash__char ${isRevealing ? 'splash__char--revealing' : ''}`}
              style={{ 
                animationDelay: `${delay}s`,
                // Preserve spaces
                ...(char === ' ' ? { width: '0.3em', display: 'inline-block' } : {})
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          )
        })}
      </h1>
    </div>
  )
}
