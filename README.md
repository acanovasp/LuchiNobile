# Luchi Nóbile - Videographer Portfolio

A high-performance portfolio website for videographer Luchi Nóbile, built with Next.js, Sanity CMS, and Vimeo.

## Features

- **Fullscreen Scroll-Snap Navigation**: Smooth vertical scrolling through 5 featured projects + archive
- **Video Preloading**: Splash screen preloads videos for instant playback
- **Vimeo Integration**: Background video loops and full video player with custom controls
- **About Overlay**: Blurred glass-effect overlay triggered by scroll or click
- **Scroll Indicators**: Left/right indicators showing current position
- **Archive Grid**: Lazy-loaded thumbnail grid for all projects
- **Sanity CMS**: Full content management for projects and site settings
- **Responsive Design**: Optimized for all device sizes

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Sanity account (optional, works with demo data)
- Vimeo account for video hosting

### Installation

```bash
npm install
```

### Environment Variables

Copy `env.example` to `.env.local` and fill in your Sanity credentials:

```bash
cp env.example .env.local
```

Edit `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Sanity Studio

Access the CMS at [http://localhost:3000/studio](http://localhost:3000/studio)

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /layout.tsx              # Root layout with fonts & meta
  /page.tsx                # Main scrollable page
  /project/[slug]/page.tsx # Video player page
  /studio/[[...index]]/    # Sanity Studio

/components
  /SplashScreen.tsx        # Loading screen with preload
  /ScrollContainer.tsx     # Snap scroll wrapper
  /AboutOverlay.tsx        # Blurred overlay section
  /ProjectSection.tsx      # Fullscreen video section
  /ArchiveGrid.tsx         # Scrollable archive grid
  /ScrollIndicator.tsx     # Navigation indicators
  /VideoPlayer.tsx         # Full video player
  /VimeoBackground.tsx     # Background video embed

/lib
  /sanity.ts               # Sanity client
  /queries.ts              # GROQ queries
  /vimeo.ts                # Vimeo utilities

/sanity
  /schema.ts               # Schema exports
  /schemas/                # Document schemas

/styles
  /globals.css             # Variables & base styles
  /splash.css
  /scroll-container.css
  /about.css
  /project-section.css
  /archive.css
  /video-player.css
  /indicators.css
```

## CMS Schema

### Project

| Field | Type | Description |
|-------|------|-------------|
| title | string | Project title |
| client | string | Client name |
| slug | slug | URL slug |
| order | number | Display order (1-5 for featured) |
| isFeatured | boolean | Show in main carousel |
| previewVimeoId | string | Vimeo ID for preview loop |
| fullVimeoId | string | Vimeo ID for full video |
| thumbnail | image | Archive grid thumbnail |

### Site Settings

| Field | Type | Description |
|-------|------|-------------|
| aboutText | text | About section content |
| contactEmail | string | Contact email |

## Video Optimization

- **Preloading**: First 3 videos preload during splash screen
- **Background Mode**: Muted, looping Vimeo embeds
- **Lazy Loading**: Archive thumbnails load on scroll
- **DNS Prefetch**: Vimeo domains prefetched in layout

## License

Private - All rights reserved

