import { client } from './sanity'

export interface Project {
  _id: string
  title: string
  client: string
  slug: { current: string }
  order: number
  isFeatured: boolean
  previewVideoUrl: string
  archiveSize: 'small' | 'large'
  fullVimeoId: string
  thumbnail: {
    asset: {
      _ref: string
    }
  }
}

export interface SiteSettings {
  _id: string
  aboutText: string
  contactEmail: string
}

export async function getFeaturedProjects(): Promise<Project[]> {
  if (!client) return []
  return client.fetch(
    `*[_type == "project" && isFeatured == true] | order(order asc) {
      _id,
      title,
      client,
      slug,
      order,
      isFeatured,
      "previewVideoUrl": previewVideo.asset->url,
      archiveSize,
      fullVimeoId,
      thumbnail
    }`
  )
}

export async function getAllProjects(): Promise<Project[]> {
  if (!client) return []
  return client.fetch(
    `*[_type == "project"] | order(order asc) {
      _id,
      title,
      client,
      slug,
      order,
      isFeatured,
      "previewVideoUrl": previewVideo.asset->url,
      archiveSize,
      fullVimeoId,
      thumbnail
    }`
  )
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!client) return null
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      client,
      slug,
      order,
      isFeatured,
      "previewVideoUrl": previewVideo.asset->url,
      archiveSize,
      fullVimeoId,
      thumbnail
    }`,
    { slug }
  )
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  if (!client) return null
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      _id,
      aboutText,
      contactEmail
    }`
  )
}

