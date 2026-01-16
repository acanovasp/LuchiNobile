import { getFeaturedProjects, getAllProjects, getSiteSettings } from '@/lib/queries'
import MainPageClient from '@/components/MainPageClient'

// Default data for when Sanity is not configured
const defaultFeaturedProjects = [
  {
    _id: '1',
    title: 'The Hands That Make Champions',
    client: 'Estrella Galicia',
    slug: { current: 'hands-that-make-champions' },
    order: 1,
    isFeatured: true,
    previewVimeoId: '824804225',
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
    previewVimeoId: '824804225',
    fullVimeoId: '824804225',
    thumbnail: null as unknown as { asset: { _ref: string } },
  },
  {
    _id: '3',
    title: 'A New Way To Win',
    client: 'Oxdog',
    slug: { current: 'a-new-way-to-win' },
    order: 3,
    isFeatured: true,
    previewVimeoId: '824804225',
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
    previewVimeoId: '824804225',
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
    previewVimeoId: '824804225',
    fullVimeoId: '824804225',
    thumbnail: null as unknown as { asset: { _ref: string } },
  },
]

// All projects for the archive (featured + additional)
const defaultAllProjects = [
  ...defaultFeaturedProjects,
  {
    _id: '6',
    title: 'Summer Dreams',
    client: 'Mango',
    slug: { current: 'summer-dreams' },
    order: 6,
    isFeatured: false,
    previewVimeoId: '824804225',
    fullVimeoId: '824804225',
    thumbnail: null as unknown as { asset: { _ref: string } },
  },
  {
    _id: '7',
    title: 'The Journey',
    client: 'Nike',
    slug: { current: 'the-journey' },
    order: 7,
    isFeatured: false,
    previewVimeoId: '824804225',
    fullVimeoId: '824804225',
    thumbnail: null as unknown as { asset: { _ref: string } },
  },
  {
    _id: '8',
    title: 'Urban Stories',
    client: 'Adidas',
    slug: { current: 'urban-stories' },
    order: 8,
    isFeatured: false,
    previewVimeoId: '824804225',
    fullVimeoId: '824804225',
    thumbnail: null as unknown as { asset: { _ref: string } },
  },
  {
    _id: '9',
    title: 'Moments',
    client: 'Apple',
    slug: { current: 'moments' },
    order: 9,
    isFeatured: false,
    previewVimeoId: '824804225',
    fullVimeoId: '824804225',
    thumbnail: null as unknown as { asset: { _ref: string } },
  },
  {
    _id: '10',
    title: 'Breaking Limits',
    client: 'Red Bull',
    slug: { current: 'breaking-limits' },
    order: 10,
    isFeatured: false,
    previewVimeoId: '824804225',
    fullVimeoId: '824804225',
    thumbnail: null as unknown as { asset: { _ref: string } },
  },
  {
    _id: '11',
    title: 'Taste of Home',
    client: 'Coca-Cola',
    slug: { current: 'taste-of-home' },
    order: 11,
    isFeatured: false,
    previewVimeoId: '824804225',
    fullVimeoId: '824804225',
    thumbnail: null as unknown as { asset: { _ref: string } },
  },
  {
    _id: '12',
    title: 'New Horizons',
    client: 'Samsung',
    slug: { current: 'new-horizons' },
    order: 12,
    isFeatured: false,
    previewVimeoId: '824804225',
    fullVimeoId: '824804225',
    thumbnail: null as unknown as { asset: { _ref: string } },
  },
]

const defaultSiteSettings = {
  _id: 'settings',
  aboutText: `Director, creativo y guionista argentino con base en Barcelona. Se formó en la Escuelita y Guionarte (Buenos Aires). Su obra ofrece una mirada sensible, cuidada y honesta sobre la experiencia humana, construida a través de composiciones minimalistas, un uso consciente del movimiento y la creación de universos realistas.

Confía profundamente en la práctica como escuela. En las ejecuciones simples pero contundentes. En la magia de los procesos. Entiende que en todo(s) hay algo por decir, y que vivir para descubrirlo es un privilegio.`,
  contactEmail: 'luchinobile@docestudios.com',
}

export default async function HomePage() {
  let featuredProjects = defaultFeaturedProjects
  let allProjects = defaultAllProjects
  let siteSettings = defaultSiteSettings

  // Try to fetch from Sanity if configured
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try {
      const [featured, all, settings] = await Promise.all([
        getFeaturedProjects(),
        getAllProjects(),
        getSiteSettings(),
      ])

      if (featured && featured.length > 0) {
        featuredProjects = featured
      }
      if (all && all.length > 0) {
        allProjects = all
      }
      if (settings) {
        siteSettings = settings
      }
    } catch (error) {
      console.error('Error fetching from Sanity:', error)
    }
  }

  return (
    <MainPageClient
      featuredProjects={featuredProjects}
      allProjects={allProjects}
      siteSettings={siteSettings}
    />
  )
}

