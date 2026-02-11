'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import SplashScreen from './SplashScreen'
import { ScrollProvider, ScrollContainer, useScrollContext } from './ScrollContainer'
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

interface MainPageContentProps {
  featuredProjects: Project[]
  allProjects: Project[]
  isAboutVisible: boolean
  setIsAboutVisible: React.Dispatch<React.SetStateAction<boolean>>
}

// Content inside the scrollable container (just projects + archive)
function MainPageContent({
  featuredProjects,
  allProjects,
  isAboutVisible,
  setIsAboutVisible,
}: MainPageContentProps) {
  const { currentSection, containerRef } = useScrollContext()
  const wheelAccumulator = useRef(0)
  const lastWheelTime = useRef(0)

  // Handle wheel events for opening/closing About
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
    </>
  )
}

// Indicators component that lives outside ScrollContainer but inside ScrollProvider
interface IndicatorsWrapperProps {
  featuredProjects: Project[]
  isAboutVisible: boolean
  setIsAboutVisible: React.Dispatch<React.SetStateAction<boolean>>
}

function IndicatorsWrapper({
  featuredProjects,
  isAboutVisible,
  setIsAboutVisible,
}: IndicatorsWrapperProps) {
  const { currentSection, scrollToSection } = useScrollContext()

  const handleAboutClick = useCallback(() => {
    setIsAboutVisible((prev) => !prev)
  }, [])

  const handleArchiveClick = useCallback(() => {
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
    <ScrollIndicator
      projects={featuredProjects}
      currentSection={currentSection}
      isAboutVisible={isAboutVisible}
      isArchiveActive={isArchiveActive}
      onAboutClick={handleAboutClick}
      onArchiveClick={handleArchiveClick}
      onProjectClick={handleProjectClick}
    />
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
      {/* ScrollProvider wraps everything that needs scroll context */}
      <ScrollProvider initialSection={initialState.initialSection}>
        {/* ScrollContainer is just the scrollable div */}
        <ScrollContainer>
          <MainPageContent
            featuredProjects={featuredProjects}
            allProjects={allProjects}
            isAboutVisible={isAboutVisible}
            setIsAboutVisible={setIsAboutVisible}
          />
        </ScrollContainer>

        {/* Scroll Indicators - OUTSIDE ScrollContainer but INSIDE ScrollProvider */}
        {/* This ensures proper z-index stacking on mobile */}
        <IndicatorsWrapper
          featuredProjects={featuredProjects}
          isAboutVisible={isAboutVisible}
          setIsAboutVisible={setIsAboutVisible}
        />
      </ScrollProvider>

      {/* About Overlay - outside ScrollProvider for better backdrop-filter support */}
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
          minDuration={1500}
        />
      )}
    </>
  )
}
