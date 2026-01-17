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
  setIsAboutVisible: (visible: boolean) => void
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
          priority={index < 3}
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

export default function MainPageClient({
  featuredProjects,
  allProjects,
  siteSettings,
}: MainPageClientProps) {
  const [showSplash, setShowSplash] = useState(true)
  const [isAboutVisible, setIsAboutVisible] = useState(false)

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false)
  }, [])

  const handleAboutClose = useCallback(() => {
    setIsAboutVisible(false)
  }, [])

  // Get Vimeo IDs for preloading
  const vimeoIds = featuredProjects.map((p) => p.previewVimeoId)

  return (
    <>
      {/* Main content renders immediately so videos start loading */}
      <ScrollContainer initialSection={0}>
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
          vimeoIds={vimeoIds}
          onComplete={handleSplashComplete}
          minDuration={3500}
        />
      )}
    </>
  )
}

