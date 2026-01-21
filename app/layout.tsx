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
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
        <link rel="preconnect" href="https://f.vimeocdn.com" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://i.vimeocdn.com" />
      </head>
      <body>
        {children}
        <PageTransition />
      </body>
    </html>
  )
}

