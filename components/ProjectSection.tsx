'use client'

import Link from 'next/link'
import VimeoBackground from './VimeoBackground'
import LocalVideoBackground from './LocalVideoBackground'
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
  // Use local video if available (for instant loading), otherwise Vimeo
  const useLocalVideo = !!project.localPreviewVideoUrl

  return (
    <section
      className="section project-section"
      data-section-index={index}
      data-project-slug={project.slug.current}
    >
      <Link href={`/project/${project.slug.current}`}>
        {useLocalVideo ? (
          <LocalVideoBackground videoUrl={project.localPreviewVideoUrl!} />
        ) : (
          <VimeoBackground
            vimeoId={project.previewVimeoId}
            priority={priority}
          />
        )}
      </Link>
    </section>
  )
}

