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

  return (
    <div
      className={`about-overlay ${isVisible ? 'about-overlay--visible' : ''}`}
      onClick={onClose}
      onWheel={handleWheel}
      role="dialog"
      aria-modal="true"
      aria-label="About"
    >
      <div
        className="about-overlay__content"
        onClick={(e) => e.stopPropagation()}
      >
        {contactEmail && (
          <a
            href={`mailto:${contactEmail}`}
            className="about-overlay__email"
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

