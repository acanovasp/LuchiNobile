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

function MainPageContent({
  featuredProjects,
  allProjects,
  siteSettings,
}: MainPageClientProps) {
  const { currentSection, scrollToSection, isAtTop, containerRef } = useScrollContext()
  const [isAboutVisible, setIsAboutVisible] = useState(false)
  const prevScrollTop = useRef(0)

  // Show about when scrolling to top (past first project)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const isScrollingUp = scrollTop < prevScrollTop.current
      
      // Show about if at the very top and scrolling up
      if (scrollTop < 50 && isScrollingUp) {
        setIsAboutVisible(true)
      }
      
      prevScrollTop.current = scrollTop
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [containerRef])

  // Close about when scrolling down from top
  useEffect(() => {
    if (!isAtTop && isAboutVisible) {
      // Allow some scroll before closing
      const container = containerRef.current
      if (container && container.scrollTop > 100) {
        setIsAboutVisible(false)
      }
    }
  }, [isAtTop, isAboutVisible, containerRef])

  const handleAboutClick = useCallback(() => {
    setIsAboutVisible((prev) => !prev)
  }, [])

  const handleAboutClose = useCallback(() => {
    setIsAboutVisible(false)
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

      {/* About Overlay */}
      <AboutOverlay
        isVisible={isAboutVisible}
        aboutText={siteSettings.aboutText}
        contactEmail={siteSettings.contactEmail}
        onClose={handleAboutClose}
      />

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
  const [isReady, setIsReady] = useState(false)

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false)
    setIsReady(true)
  }, [])

  // Get Vimeo IDs for preloading
  const vimeoIds = featuredProjects.map((p) => p.previewVimeoId)

  return (
    <>
      {showSplash && (
        <SplashScreen
          vimeoIds={vimeoIds}
          onComplete={handleSplashComplete}
          minDuration={3500}
        />
      )}

      {isReady && (
        <ScrollContainer initialSection={0}>
          <MainPageContent
            featuredProjects={featuredProjects}
            allProjects={allProjects}
            siteSettings={siteSettings}
          />
        </ScrollContainer>
      )}
    </>
  )
}

