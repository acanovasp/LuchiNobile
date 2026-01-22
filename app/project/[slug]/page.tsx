import { getProjectBySlug, getAllProjects } from '@/lib/queries'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import VideoPlayer from '@/components/VideoPlayer'

// Sample video URL for fallback
const sampleVideoUrl = 'https://videos.pexels.com/video-files/5752729/5752729-hd_1920_1080_30fps.mp4'

// Default projects for when Sanity is not configured
const defaultProjects = [
  {
    _id: '1',
    title: 'The Hands That Make Champions',
    client: 'Estrella Galicia',
    slug: { current: 'hands-that-make-champions' },
    order: 1,
    isFeatured: true,
    previewVideoUrl: sampleVideoUrl,
    archiveSize: 'large' as const,
    fullVimeoId: '824804225',
    thumbnail: null as unknown as { asset: { _ref: string } },
  },
  {
    _id: '2',
    title: 'El Món Ens Mira',
    client: 'FC Barcelona',
    slug: { current: 'el-mon-ens-mira' },
    order: 2,
    isFeatured: true,
    previewVideoUrl: sampleVideoUrl,
    archiveSize: 'small' as const,
    fullVimeoId: '1086761824',
    thumbnail: null as unknown as { asset: { _ref: string } },
  },
  {
    _id: '3',
    title: 'A New Way To Win',
    client: 'Oxdog',
    slug: { current: 'a-new-way-to-win' },
    order: 3,
    isFeatured: true,
    previewVideoUrl: sampleVideoUrl,
    archiveSize: 'small' as const,
    fullVimeoId: '824804225',
    thumbnail: null as unknown as { asset: { _ref: string } },
  },
  {
    _id: '4',
    title: 'I Embrace Who I Am',
    client: 'Rosa Clará',
    slug: { current: 'i-embrace-who-i-am' },
    order: 4,
    isFeatured: true,
    previewVideoUrl: sampleVideoUrl,
    archiveSize: 'large' as const,
    fullVimeoId: '824804225',
    thumbnail: null as unknown as { asset: { _ref: string } },
  },
  {
    _id: '5',
    title: 'Dani Is Calling',
    client: 'OK Mobility',
    slug: { current: 'dani-is-calling' },
    order: 5,
    isFeatured: true,
    previewVideoUrl: sampleVideoUrl,
    archiveSize: 'small' as const,
    fullVimeoId: '824804225',
    thumbnail: null as unknown as { asset: { _ref: string } },
  },
]

interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate dynamic metadata for each project
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  
  let project = null
  
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try {
      project = await getProjectBySlug(slug)
    } catch {
      // Fall through to default projects
    }
  }
  
  if (!project) {
    project = defaultProjects.find((p) => p.slug.current === slug)
  }
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }
  
  const title = `${project.title} - ${project.client}`
  const description = `${project.title} para ${project.client}. Proyecto dirigido por Luchi Nóbile, director y creativo argentino con base en Barcelona.`
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'video.other',
      url: `/project/${slug}`,
      images: [
        {
          url: `https://vumbnail.com/${project.fullVimeoId}.jpg`,
          width: 1280,
          height: 720,
          alt: `${project.title} - ${project.client}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://vumbnail.com/${project.fullVimeoId}.jpg`],
    },
  }
}

export async function generateStaticParams() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return defaultProjects.map((p) => ({ slug: p.slug.current }))
  }

  try {
    const projects = await getAllProjects()
    return projects.map((project) => ({
      slug: project.slug.current,
    }))
  } catch {
    return defaultProjects.map((p) => ({ slug: p.slug.current }))
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params

  let project = null

  // Try to fetch from Sanity if configured
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try {
      project = await getProjectBySlug(slug)
    } catch (error) {
      console.error('Error fetching project:', error)
    }
  }

  // Fallback to default projects
  if (!project) {
    project = defaultProjects.find((p) => p.slug.current === slug) || null
  }

  if (!project) {
    notFound()
  }

  return <VideoPlayer project={project} />
}

