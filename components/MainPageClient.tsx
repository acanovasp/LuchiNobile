'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import SplashScreen from './SplashScreen'
import ScrollContainer, { useScrollContext } from './ScrollContainer'
import ProjectSection from './ProjectSection'
import AboutOverlay from './AboutOverlay'
import ScrollIndicator from './ScrollIndicator'
import ArchiveGrid from './ArchiveGrid'
import type { Project, SiteSettings } from '@/lib/queries'

interface MainPageClientProps {
  featuredProjects: Project[]
  allProjects: Project[]
  siteSettings: SiteSettings
}

interface MainPageContentProps extends MainPageClientProps {
  isAboutVisible: boolean
  setIsAboutVisible: React.Dispatch<React.SetStateAction<boolean>>
}

function MainPageContent({
  featuredProjects,
  allProjects,
  siteSettings,
  isAboutVisible,
  setIsAboutVisible,
}: MainPageContentProps) {
  const { currentSection, scrollToSection, containerRef } = useScrollContext()
  const wheelAccumulator = useRef(0)
  const lastWheelTime = useRef(0)
  const touchStartY = useRef(0)
  const touchAccumulator = useRef(0)

  // Handle wheel events for opening/closing About (desktop)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      // Reset accumulator if too much time passed
      const now = Date.now()
      if (now - lastWheelTime.current > 300) {
        wheelAccumulator.current = 0
      }
      lastWheelTime.current = now

      if (isAboutVisible) {
        // Close About by scrolling down (positive deltaY)
        if (e.deltaY > 0) {
          wheelAccumulator.current += Math.abs(e.deltaY)
          
          if (wheelAccumulator.current > 50) {
            setIsAboutVisible(false)
            wheelAccumulator.current = 0
          }
        } else {
          wheelAccumulator.current = 0
        }
      } else {
        // Open About by scrolling up while at project 1
        if (currentSection !== 0 || container.scrollTop > 10) {
          wheelAccumulator.current = 0
          return
        }

        if (e.deltaY < 0) {
          wheelAccumulator.current += Math.abs(e.deltaY)
          
          if (wheelAccumulator.current > 100) {
            setIsAboutVisible(true)
            wheelAccumulator.current = 0
          }
        } else {
          wheelAccumulator.current = 0
        }
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: true })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [containerRef, currentSection, isAboutVisible])

  // Handle touch events for opening/closing About (mobile)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
      touchAccumulator.current = 0
    }

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY
      const deltaY = touchStartY.current - touchY // Positive = swipe up, Negative = swipe down
      
      if (isAboutVisible) {
        // Close About by swiping down (negative deltaY means finger moved down)
        if (deltaY < -30) {
          setIsAboutVisible(false)
          touchAccumulator.current = 0
        }
      } else {
        // Open About by swiping up while at project 1
        if (currentSection !== 0 || container.scrollTop > 10) {
          touchAccumulator.current = 0
          return
        }

        // Swipe up detected (positive deltaY means finger moved up)
        if (deltaY > 50) {
          setIsAboutVisible(true)
          touchAccumulator.current = 0
        }
      }
    }

    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchmove', handleTouchMove, { passive: true })
    
    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
    }
  }, [containerRef, currentSection, isAboutVisible, setIsAboutVisible])

  const handleAboutClick = useCallback(() => {
    setIsAboutVisible((prev) => !prev)
  }, [])

  const handleArchiveClick = useCallback(() => {
    // Scroll to archive section (last section, index = featuredProjects.length)
    scrollToSection(featuredProjects.length)
    setIsAboutVisible(false)
  }, [scrollToSection, featuredProjects.length])

  const handleProjectClick = useCallback(
    (index: number) => {
      scrollToSection(index)
      setIsAboutVisible(false)
    },
    [scrollToSection]
  )

  const isArchiveActive = currentSection >= featuredProjects.length

  return (
    <>
      {/* Featured Project Sections */}
      {featuredProjects.map((project, index) => (
        <ProjectSection
          key={project._id}
          project={project}
          index={index}
        />
      ))}

      {/* Archive Section */}
      <ArchiveGrid projects={allProjects} />

      {/* Scroll Indicators */}
      <ScrollIndicator
        projects={featuredProjects}
        currentSection={currentSection}
        isAboutVisible={isAboutVisible}
        isArchiveActive={isArchiveActive}
        onAboutClick={handleAboutClick}
        onArchiveClick={handleArchiveClick}
        onProjectClick={handleProjectClick}
      />
    </>
  )
}

// Compute initial values outside component to avoid flash
function getInitialState(featuredProjectsLength: number) {
  if (typeof window === 'undefined') {
    return { showSplash: true, initialSection: 0 }
  }
  
  const skipSplash = sessionStorage.getItem('skipSplash')
  const returnSection = sessionStorage.getItem('returnSection')
  
  if (skipSplash) {
    sessionStorage.removeItem('skipSplash')
    sessionStorage.removeItem('returnSection')
    
    let section = 0
    if (returnSection === 'archive') {
      section = featuredProjectsLength
    } else if (returnSection) {
      section = parseInt(returnSection, 10)
    }
    
    return { showSplash: false, initialSection: section }
  }
  
  sessionStorage.removeItem('returnSection')
  return { showSplash: true, initialSection: 0 }
}

export default function MainPageClient({
  featuredProjects,
  allProjects,
  siteSettings,
}: MainPageClientProps) {
  // Compute initial state once on mount
  const [initialState] = useState(() => getInitialState(featuredProjects.length))
  const [showSplash, setShowSplash] = useState(initialState.showSplash)
  const [isAboutVisible, setIsAboutVisible] = useState(false)

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false)
  }, [])

  const handleAboutClose = useCallback(() => {
    setIsAboutVisible(false)
  }, [])

  return (
    <>
      {/* Main content renders immediately so videos start loading */}
      <ScrollContainer initialSection={initialState.initialSection}>
        <MainPageContent
          featuredProjects={featuredProjects}
          allProjects={allProjects}
          siteSettings={siteSettings}
          isAboutVisible={isAboutVisible}
          setIsAboutVisible={setIsAboutVisible}
        />
      </ScrollContainer>

      {/* About Overlay - outside ScrollContainer for better backdrop-filter support */}
      <AboutOverlay
        isVisible={isAboutVisible}
        aboutText={siteSettings.aboutText}
        contactEmail={siteSettings.contactEmail}
        onClose={handleAboutClose}
      />

      {/* Splash screen on top with blur - videos load behind it */}
      {showSplash && (
        <SplashScreen
          onComplete={handleSplashComplete}
          minDuration={3500}
        />
      )}
    </>
  )
}

