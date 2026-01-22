import type { Metadata } from 'next'
import PageTransition from '@/components/PageTransition'
import '@/styles/fonts.css'
import '@/styles/globals.css'
import '@/styles/splash.css'
import '@/styles/scroll-container.css'
import '@/styles/about.css'
import '@/styles/project-section.css'
import '@/styles/indicators.css'
import '@/styles/archive.css'
import '@/styles/video-player.css'

export const metadata: Metadata = {
  title: 'Luchi Nóbile - Director & Creative',
  description: 'Director, creativo y guionista argentino con base en Barcelona.',
  keywords: ['videographer', 'director', 'creative', 'barcelona', 'argentina'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Preload Vimeo Player SDK for faster initialization */}
        <link rel="preload" href="https://player.vimeo.com/api/player.js" as="script" crossOrigin="anonymous" />
        
        {/* Preconnect to Vimeo domains for faster video loading */}
        <link rel="preconnect" href="https://player.vimeo.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i.vimeocdn.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://f.vimeocdn.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://vod-progressive.akamaized.net" crossOrigin="anonymous" />
        
        {/* DNS prefetch as fallback for older browsers */}
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://i.vimeocdn.com" />
        <link rel="dns-prefetch" href="https://vod-progressive.akamaized.net" />
      </head>
      <body>
        {children}
        <PageTransition />
      </body>
    </html>
  )
}

