import { getFeaturedProjects, getAllProjects, getSiteSettings } from '@/lib/queries'
import MainPageClient from '@/components/MainPageClient'

export default async function HomePage() {
  const [featuredProjects, allProjects, siteSettings] = await Promise.all([
    getFeaturedProjects(),
    getAllProjects(),
    getSiteSettings(),
  ])

  if (!featuredProjects || featuredProjects.length === 0) {
    throw new Error('No featured projects found in Sanity')
  }

  if (!allProjects || allProjects.length === 0) {
    throw new Error('No projects found in Sanity')
  }

  if (!siteSettings) {
    throw new Error('Site settings not found in Sanity')
  }

  return (
    <MainPageClient
      featuredProjects={featuredProjects}
      allProjects={allProjects}
      siteSettings={siteSettings}
    />
  )
}
