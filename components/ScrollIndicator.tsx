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
  // Get current project info
  const currentProject = useMemo(() => {
    if (currentSection >= 0 && currentSection < projects.length) {
      return projects[currentSection]
    }
    return null
  }, [currentSection, projects])

  // Calculate which of the 7 positions we're at (0=about, 1-5=projects, 6=archive)
  const activePosition = useMemo(() => {
    if (isAboutVisible) return 0
    if (isArchiveActive) return 6
    return currentSection + 1 // 1-5 for projects
  }, [isAboutVisible, isArchiveActive, currentSection])

  // Show project info only for project sections (not About or Archive)
  const showProjectInfo = !isAboutVisible && !isArchiveActive && currentProject

  return (
    <>
      {/* Left Indicator */}
      <div className={`indicator-left ${isArchiveActive ? 'indicator--dark' : ''}`}>
        <div className="indicator-left__items">
          {/* About */}
          <button
            className={`indicator-left__item ${isAboutVisible ? 'indicator-left__item--active' : ''}`}
            onClick={onAboutClick}
          >
            About
          </button>

          {/* Project Numbers 01-05 */}
          {projects.map((project, index) => (
            <button
              key={project._id}
              className={`indicator-left__item ${
                currentSection === index && !isArchiveActive && !isAboutVisible
                  ? 'indicator-left__item--active'
                  : ''
              }`}
              onClick={() => onProjectClick(index)}
            >
              {String(index + 1).padStart(2, '0')}
            </button>
          ))}

          {/* Archive */}
          <button
            className={`indicator-left__item ${isArchiveActive ? 'indicator-left__item--active' : ''}`}
            onClick={onArchiveClick}
          >
            Archive
          </button>
        </div>

        {/* Floating Project Info - positioned dynamically, same as items */}
        {showProjectInfo && (
          <div 
            className="indicator-left__project-info"
            style={{ '--marker-position': activePosition } as React.CSSProperties}
          >
            <span className="indicator-left__title">
              {currentProject.title}
            </span>
            <span className="indicator-left__client">
              {currentProject.client}
            </span>
          </div>
        )}
      </div>

      {/* Right Indicator */}
      <div className={`indicator-right ${isArchiveActive ? 'indicator--dark' : ''}`}>
        <div className="indicator-right__items">
          {/* All 7 positions: About (0), Projects 1-5, Archive (6) */}
          {[0, 1, 2, 3, 4, 5, 6].map((position) => (
            <button
              key={position}
              className={`indicator-right__item ${
                activePosition === position ? 'indicator-right__item--active' : ''
              }`}
              onClick={() => {
                if (position === 0) onAboutClick()
                else if (position === 6) onArchiveClick()
                else onProjectClick(position - 1)
              }}
            >
              {position >= 1 && position <= 5 && String(position).padStart(2, '0')}
            </button>
          ))}

          {/* Moving square marker */}
          <div
            className="indicator-right__marker"
            style={{ '--marker-position': activePosition } as React.CSSProperties}
          />
        </div>
      </div>

      {/* Header Logo */}
      <header className={`header ${isArchiveActive ? 'indicator--dark' : ''}`}>
        <div className="header__logo">
          <button onClick={() => onProjectClick(0)}>
            Luchi Nóbile
          </button>
        </div>
      </header>
    </>
  )
}
