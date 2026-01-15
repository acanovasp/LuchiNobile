'use client'

import Link from 'next/link'
import VimeoBackground from './VimeoBackground'
import type { Project } from '@/lib/queries'

interface ProjectSectionProps {
  project: Project
  index: number
  priority?: boolean
}

export default function ProjectSection({
  project,
  index,
  priority = false,
}: ProjectSectionProps) {
  return (
    <section
      className="section project-section"
      data-section-index={index}
      data-project-slug={project.slug.current}
    >
      <Link href={`/project/${project.slug.current}`}>
        <VimeoBackground
          vimeoId={project.previewVimeoId}
          priority={priority}
        />
      </Link>
    </section>
  )
}

