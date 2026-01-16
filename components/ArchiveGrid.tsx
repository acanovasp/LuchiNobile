'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { Project } from '@/lib/queries'

// Define media type for each placeholder
// 'video' = large (2×2), 'image' = small (1×1)
interface PlaceholderItem {
  type: 'video' | 'image'
  src: string
}

// Placeholder data - videos are large, images are small
const placeholderMedia: PlaceholderItem[] = [
  // Row 1-2: Large video on left, 2 small images stacked on right
  { type: 'video', src: 'https://videos.pexels.com/video-files/5752729/5752729-uhd_2560_1440_30fps.mp4' },
  { type: 'image', src: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { type: 'image', src: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800' },
  
  // Row 3-4: 2 small images, then large video
  { type: 'image', src: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { type: 'video', src: 'https://videos.pexels.com/video-files/5752574/5752574-uhd_2560_1440_30fps.mp4' },
  { type: 'image', src: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=800' },
  
  // Row 5-6: Large video, 2 small images
  { type: 'video', src: 'https://videos.pexels.com/video-files/4065924/4065924-uhd_2560_1440_30fps.mp4' },
  { type: 'image', src: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { type: 'image', src: 'https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&w=800' },
  
  // More items
  { type: 'image', src: 'https://images.pexels.com/photos/2531237/pexels-photo-2531237.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { type: 'image', src: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { type: 'video', src: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4' },
]

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
        rootMargin: '200px',
        threshold: 0,
      }
    )

    const items = grid.querySelectorAll('.archive__item')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [projects])

  // Generate items - use projects data with placeholder media
  const items = projects.map((project, index) => {
    const placeholder = placeholderMedia[index % placeholderMedia.length]
    return {
      project,
      media: placeholder,
      isLarge: placeholder.type === 'video',
    }
  })

  return (
    <section className="section section--archive archive">
      <div ref={gridRef} className="archive__grid">
        {items.map(({ project, media, isLarge }, index) => {
          const isVisible = visibleItems.has(project._id)
          
          // Try to get Sanity thumbnail, fall back to placeholder
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
              {isVisible && (
                <div className="archive__thumbnail">
                  {media.type === 'video' ? (
                    <video
                      src={media.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="archive__video"
                    />
                  ) : thumbnailUrl ? (
                    <Image
                      src={thumbnailUrl}
                      alt={project.title}
                      fill
                      sizes={isLarge ? '66vw' : '33vw'}
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <Image
                      src={media.src}
                      alt={project.title}
                      fill
                      sizes="33vw"
                      style={{ objectFit: 'cover' }}
                      unoptimized
                    />
                  )}
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
