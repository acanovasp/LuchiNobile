'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)

  // Fade in when page loads (component mounts or pathname changes)
  useEffect(() => {
    // Start visible (black screen), then fade out to reveal content
    setIsVisible(true)
    
    // Small delay to ensure the black screen is rendered first
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 50)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div 
      className={`page-transition ${isVisible ? 'page-transition--visible' : ''}`}
      aria-hidden="true"
    />
  )
}
