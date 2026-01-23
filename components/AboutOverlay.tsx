'use client'

import { useRef, useCallback } from 'react'

interface AboutOverlayProps {
  isVisible: boolean
  aboutText: string
  contactEmail?: string
  onClose: () => void
}

export default function AboutOverlay({
  isVisible,
  aboutText,
  contactEmail,
  onClose,
}: AboutOverlayProps) {
  // Split text into paragraphs
  const paragraphs = aboutText.split('\n\n').filter(Boolean)
  
  // Track wheel events for scroll-down-to-close
  const wheelAccumulator = useRef(0)
  const lastWheelTime = useRef(0)
  const touchStartY = useRef(0)

  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (!isVisible) return
    
    const now = Date.now()
    // Reset accumulator if too much time passed
    if (now - lastWheelTime.current > 300) {
      wheelAccumulator.current = 0
    }
    lastWheelTime.current = now

    // Close on scroll down (positive deltaY)
    if (e.deltaY > 0) {
      wheelAccumulator.current += Math.abs(e.deltaY)
      
      if (wheelAccumulator.current > 50) {
        onClose()
        wheelAccumulator.current = 0
      }
    } else {
      wheelAccumulator.current = 0
    }
  }, [isVisible, onClose])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isVisible) return
    
    const touchY = e.touches[0].clientY
    const deltaY = touchStartY.current - touchY // Positive = swipe up, Negative = swipe down
    
    // Close on swipe down (finger moves down = negative deltaY)
    if (deltaY < -30) {
      onClose()
    }
  }, [isVisible, onClose])

  return (
    <div
      className={`about-overlay ${isVisible ? 'about-overlay--visible' : ''}`}
      onClick={onClose}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      role="dialog"
      aria-modal="true"
      aria-label="About"
    >
      {/* Email positioned relative to overlay (viewport) to match indicator alignment - desktop only */}
      {contactEmail && (
        <a
          href={`mailto:${contactEmail}`}
          className="about-overlay__email about-overlay__email--desktop"
          onClick={(e) => e.stopPropagation()}
        >
          {contactEmail}
        </a>
      )}
      <div className="about-overlay__content">
        {/* Email inside content for mobile - positioned above text */}
        {contactEmail && (
          <a
            href={`mailto:${contactEmail}`}
            className="about-overlay__email about-overlay__email--mobile"
            onClick={(e) => e.stopPropagation()}
          >
            {contactEmail}
          </a>
        )}
        <div className="about-overlay__text">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

