'use client'

import { useMemo } from 'react'
import type { Project } from '@/lib/queries'

interface ScrollIndicatorProps {
  projects: Project[]
  currentSection: number
  isAboutVisible: boolean
  isArchiveActive: boolean
  onAboutClick: () => void
  onArchiveClick: () => void
  onProjectClick: (index: number) => void
}

export default function ScrollIndicator({
  projects,
  currentSection,
  isAboutVisible,
  isArchiveActive,
  onAboutClick,
  onArchiveClick,
  onProjectClick,
}: ScrollIndicatorProps) {
  // Get current project info (0-indexed, projects are sections 0-4)
  const currentProject = useMemo(() => {
    if (currentSection >= 0 && currentSection < projects.length) {
      return projects[currentSection]
    }
    return null
  }, [currentSection, projects])

  // Calculate marker position for right indicator
  const markerStyle = useMemo(() => {
    const baseGap = 48 // var(--space-8) = 3rem = 48px
    const paddingTop = 48 // Same as numbers padding top
    const numberHeight = 16 // Approximate line height

    let topPosition = paddingTop
    
    if (currentSection >= 0 && currentSection < projects.length) {
      topPosition += currentSection * (baseGap + numberHeight)
    }

    return { top: `${topPosition}px` }
  }, [currentSection, projects.length])

  return (
    <>
      {/* Left Indicator */}
      <div className="indicator-left">
        <button
          className={`indicator-left__about ${isAboutVisible ? 'indicator-left__about--active' : ''}`}
          onClick={onAboutClick}
        >
          About
        </button>

        <div className="indicator-left__project">
          {currentProject && !isArchiveActive && !isAboutVisible && (
            <>
              <span className="indicator-left__number">
                {String(currentSection + 1).padStart(2, '0')}
              </span>
              <span className="indicator-left__title">
                {currentProject.title}
              </span>
              <span className="indicator-left__client">
                {currentProject.client}
              </span>
            </>
          )}
        </div>

        <button
          className={`indicator-left__archive ${isArchiveActive ? 'indicator-left__archive--active' : ''}`}
          onClick={onArchiveClick}
        >
          Archive
        </button>
      </div>

      {/* Right Indicator */}
      <div className="indicator-right">
        <div className="indicator-right__numbers">
          {projects.map((project, index) => (
            <button
              key={project._id}
              className={`indicator-right__number ${
                currentSection === index && !isArchiveActive && !isAboutVisible
                  ? 'indicator-right__number--active'
                  : ''
              }`}
              onClick={() => onProjectClick(index)}
            >
              {String(index + 1).padStart(2, '0')}
            </button>
          ))}
          
          {/* Moving square marker */}
          {!isArchiveActive && !isAboutVisible && (
            <div
              className="indicator-right__marker"
              style={markerStyle}
            />
          )}
        </div>
      </div>

      {/* Header Logo */}
      <header className="header">
        <div className="header__logo">
          <button onClick={() => onProjectClick(0)}>
            Luchi Nóbile
          </button>
        </div>
      </header>
    </>
  )
}

