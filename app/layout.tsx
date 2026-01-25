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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luchinobile.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Luchi Nóbile | Director',
    template: '%s | Luchi Nóbile',
  },
  description:
    'Director argentino con base en Barcelona.',
  keywords: [
    'Luchi Nóbile',
    'director',
    'creativo',
    'guionista',
    'filmmaker',
    'screenwriter',
    'Barcelona',
    'Argentina',
    'videógrafo',
    'director de cine',
    'publicidad',
    'comerciales',
    'branded content',
    'minimalismo',
    'cine documental',
    'storytelling visual',
  ],
  authors: [{ name: 'Luchi Nóbile' }],
  creator: 'Luchi Nóbile',
  publisher: 'Luchi Nóbile',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    url: siteUrl,
    siteName: 'Luchi Nóbile',
    title: 'Luchi Nóbile | Director',
    description:
      'Director argentino con base en Barcelona.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luchi Nóbile - Director',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luchi Nóbile | Director',
    description:
      'Director argentino con base en Barcelona.',
    images: ['/og-image.jpg'],
    creator: '@luchinobile',
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'Film & Video Production',
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
  },
}

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Luchi Nóbile',
  jobTitle: 'Director',
  description:
    'Director argentino con base en Barcelona.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://luchinobile.com',
  image: '/og-image.jpg',
  sameAs: [
    'https://vimeo.com/luchinobile',
    'https://www.instagram.com/luchinobile',
    // Add more social profiles as needed
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barcelona',
    addressCountry: 'ES',
  },
  nationality: {
    '@type': 'Country',
    name: 'Argentina',
  },
  knowsAbout: [
    'Film Direction',
    'Screenwriting',
    'Creative Direction',
    'Video Production',
    'Branded Content',
    'Commercial Films',
    'Documentary',
    'Storytelling',
  ],
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'La Escuelita',
      address: { '@type': 'PostalAddress', addressLocality: 'Buenos Aires' },
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Guionarte',
      address: { '@type': 'PostalAddress', addressLocality: 'Buenos Aires' },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
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

