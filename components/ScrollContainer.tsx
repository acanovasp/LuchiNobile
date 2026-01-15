'use client'

import {
  useRef,
  useEffect,
  useState,
  useCallback,
  createContext,
  useContext,
} from 'react'

interface ScrollContextValue {
  currentSection: number
  totalSections: number
  scrollToSection: (index: number) => void
  isAtTop: boolean
  containerRef: React.RefObject<HTMLDivElement | null>
}

const ScrollContext = createContext<ScrollContextValue | null>(null)

export function useScrollContext() {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScrollContext must be used within ScrollContainer')
  }
  return context
}

interface ScrollContainerProps {
  children: React.ReactNode
  initialSection?: number
  onSectionChange?: (section: number) => void
}

export default function ScrollContainer({
  children,
  initialSection = 0,
  onSectionChange,
}: ScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(initialSection)
  const [isAtTop, setIsAtTop] = useState(false)
  const [totalSections, setTotalSections] = useState(0)

  // Count sections on mount
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const sections = container.querySelectorAll('.section')
    setTotalSections(sections.length)
  }, [children])

  // Scroll to initial section on mount
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const sections = container.querySelectorAll('.section')
    if (sections[initialSection]) {
      setTimeout(() => {
        const section = sections[initialSection] as HTMLElement
        container.scrollTo({
          top: section.offsetTop,
          behavior: 'instant',
        })
      }, 100)
    }
  }, [initialSection])

  // Setup intersection observer for section detection
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const sections = container.querySelectorAll('.section')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = Array.from(sections).indexOf(entry.target)
            if (index !== -1) {
              setCurrentSection(index)
              onSectionChange?.(index)
            }
          }
        })
      },
      {
        root: container,
        threshold: [0.5],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [children, onSectionChange])

  // Track if at top of scroll
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      setIsAtTop(scrollTop < 10)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((index: number) => {
    const container = containerRef.current
    if (!container) return

    const sections = container.querySelectorAll('.section')
    const section = sections[index] as HTMLElement | undefined
    
    if (section) {
      container.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      })
    }
  }, [])

  const contextValue: ScrollContextValue = {
    currentSection,
    totalSections,
    scrollToSection,
    isAtTop,
    containerRef,
  }

  return (
    <ScrollContext.Provider value={contextValue}>
      <div ref={containerRef} className="scroll-container">
        {children}
      </div>
    </ScrollContext.Provider>
  )
}

