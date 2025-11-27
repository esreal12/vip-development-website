// Schema.org structured data for SEO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'VIP Development',
  description:
    'VIP Development specializes in the design, construction, and full project management of high-end residential homes in Costa Rica.',
  slogan: 'Pura Vida Construction - Driven by Experience. Defined by Quality.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Central Pacific',
    addressCountry: 'Costa Rica',
    addressLocality: 'Manuel Antonio',
  },
  areaServed: [
    'Manuel Antonio',
    'Quepos',
    'Dominical',
    'Uvita',
    'Jaco',
    'Herradura',
  ],
  priceRange: '$$$',
  telephone: 'Contact via form',
}

