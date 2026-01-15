// Vimeo preloading utilities

export interface VimeoPreloadResult {
  loaded: boolean
  error?: string
}

/**
 * Preload Vimeo video thumbnails for faster perceived loading
 */
export function getVimeoThumbnailUrl(vimeoId: string, width = 1920): string {
  return `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}&width=${width}`
}

/**
 * Fetch Vimeo video data including thumbnail
 */
export async function fetchVimeoData(vimeoId: string): Promise<{
  thumbnailUrl: string
  title: string
  width: number
  height: number
} | null> {
  try {
    const response = await fetch(
      `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}`
    )
    if (!response.ok) return null
    
    const data = await response.json()
    return {
      thumbnailUrl: data.thumbnail_url,
      title: data.title,
      width: data.width,
      height: data.height,
    }
  } catch {
    return null
  }
}

/**
 * Build Vimeo player embed URL with optimal settings for background video
 */
export function buildVimeoEmbedUrl(
  vimeoId: string,
  options: {
    background?: boolean
    autoplay?: boolean
    loop?: boolean
    muted?: boolean
    quality?: string
  } = {}
): string {
  const {
    background = true,
    autoplay = true,
    loop = true,
    muted = true,
    quality = '1080p',
  } = options

  const params = new URLSearchParams({
    autopause: '0',
    player_id: `vimeo-${vimeoId}`,
    app_id: '58479',
  })

  if (background) params.set('background', '1')
  if (autoplay) params.set('autoplay', '1')
  if (loop) params.set('loop', '1')
  if (muted) params.set('muted', '1')
  if (quality) params.set('quality', quality)

  return `https://player.vimeo.com/video/${vimeoId}?${params.toString()}`
}

/**
 * Build Vimeo player embed URL for full video playback
 */
export function buildVimeoPlayerUrl(
  vimeoId: string,
  options: {
    autoplay?: boolean
    muted?: boolean
  } = {}
): string {
  const { autoplay = true, muted = false } = options

  const params = new URLSearchParams({
    autopause: '0',
    player_id: `vimeo-player-${vimeoId}`,
    app_id: '58479',
    title: '0',
    byline: '0',
    portrait: '0',
    controls: '0',
  })

  if (autoplay) params.set('autoplay', '1')
  if (muted) params.set('muted', '1')

  return `https://player.vimeo.com/video/${vimeoId}?${params.toString()}`
}

