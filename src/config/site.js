// Single source of truth for shared content (nav, footer, links, assets).
// Components read from here — never hardcode these values elsewhere.

export const ROUTES = {
  home: '/',
  demo: '/demo',
}

// In-page anchors on Home.
export const SECTIONS = [
  { label: 'Features', id: 'features' },
  { label: 'How it works', id: 'how-it-works' },
  { label: 'Contact Us', id: 'contact' },
]

export const CONTACT_EMAIL = 'Faarid@slidingscale.xyz'

export const SITE = {
  title: 'LeaseOps | Revenue Operations for Property Managers',
  description:
    'LeaseOps answers, qualifies, and books tours for every rental inquiry, day or night, so residential property managers never lose a lead to a missed call.',
  url: 'https://leaseops.slidingscale.xyz/',
}
