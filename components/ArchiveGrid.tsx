'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { Project } from '@/lib/queries'

interface ArchiveGridProps {
  projects: Project[]
}

export default function ArchiveGrid({ projects }: ArchiveGridProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set())

  // Lazy load thumbnails as they come into view
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-project-id')
            if (id) {
              setVisibleItems((prev) => {
                const newSet = new Set(prev)
                newSet.add(id)
                return newSet
              })
            }
          }
        })
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0,
      }
    )

    const items = grid.querySelectorAll('.archive__item')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [projects])

  // Determine which item should be large (first featured item)
  const getLargeItemIndex = () => {
    const featuredIndex = projects.findIndex((p) => p.isFeatured)
    return featuredIndex >= 0 ? featuredIndex : 0
  }

  const largeItemIndex = getLargeItemIndex()

  return (
    <section className="section section--archive archive">
      <div ref={gridRef} className="archive__grid">
        {projects.map((project, index) => {
          const isLarge = index === largeItemIndex
          const isVisible = visibleItems.has(project._id)
          const thumbnailUrl = project.thumbnail
            ? urlFor(project.thumbnail).width(800).height(450).url()
            : null

          return (
            <Link
              key={project._id}
              href={`/project/${project.slug.current}`}
              className={`archive__item ${isLarge ? 'archive__item--large' : ''}`}
              data-project-id={project._id}
            >
              {thumbnailUrl && isVisible && (
                <div className="archive__thumbnail">
                  <Image
                    src={thumbnailUrl}
                    alt={project.title}
                    fill
                    sizes={isLarge ? '66vw' : '33vw'}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              <div className="archive__item-overlay" />
              <div className="archive__item-info">
                <h3 className="archive__item-title">{project.title}</h3>
                <p className="archive__item-client">{project.client}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

