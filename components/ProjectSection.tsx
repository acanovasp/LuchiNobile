'use client'

import Link from 'next/link'
import LocalVideoBackground from './LocalVideoBackground'
import type { Project } from '@/lib/queries'

interface ProjectSectionProps {
  project: Project
  index: number
}

export default function ProjectSection({
  project,
  index,
}: ProjectSectionProps) {
  const handleClick = () => {
    // Store the section index to return to after closing video player
    sessionStorage.setItem('returnSection', String(index))
  }

  return (
    <section
      className="section project-section"
      data-section-index={index}
      data-project-slug={project.slug.current}
    >
      <Link href={`/project/${project.slug.current}`} onClick={handleClick}>
        <LocalVideoBackground videoUrl={project.previewVideoUrl} />
      </Link>
    </section>
  )
}

