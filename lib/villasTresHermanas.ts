const base = '/images/projects/villas-tres-hermanas/'
export type ProjectImage = { src: string; alt: string }
export const primaryImages: ProjectImage[] = [
  { src: `${base}casa-a-render-frontal.webp`, alt: 'Villas Tres Hermanas exterior overlooking the Central Pacific' },
  { src: `${base}casa-a-render-lateral-01.webp`, alt: 'Contemporary Villas Tres Hermanas architecture' },
]
export const galleryImages: ProjectImage[] = ['casa-a-render-lateral-02','casa-a-render-lateral-03','casa-a-render-posterior','render-rerraza-piscina-01','render-rerraza-piscina-02','render-cocina-sala-01','render-cocina-sala-02','area-social','render-terraza-01','dormitorio-principal-psd','20260609-dormitorios','act20260427-bano-principal','act20260427-bano-principal-2','bano-secundario-01','20260609-bano-de-visitas','sala-tv-psd'].map((name) => ({ src: `${base}${name}.webp`, alt: `Villas Tres Hermanas ${name.replaceAll('-', ' ')}` }))
export type StandardSection = {
  title: string
  body: string
  image: string
  points?: { title: string; detail: string }[]
}

export const standardSections: StandardSection[] = [
  {
    title: 'Built From the Ground Up',
    body: 'A structure designed for generations. Built on rock with deep foundations, solid poured concrete walls and exceptional structural steel, each residence has been designed with strength, stability and longevity at its core. This is all-concrete construction, built for permanence and engineered for Costa Rica’s environment.',
    image: `${base}casa-a-render-lateral-04.webp`,
  },
  {
    title: 'Engineered for Coastal Costa Rica',
    body: 'Because building near the ocean requires a different standard. Costa Rica’s salt air, humidity, tropical rain and intense sun demand more from a home. Materials and systems throughout Villas Tres Hermanas have been carefully selected for long-term performance in a coastal environment.',
    image: `${base}render-rerraza-piscina-01.webp`,
    points: [
      { title: 'Salt-Air Protected A/C', detail: 'Additional protection designed for the coastal environment, with equipment positioned for efficiency and accessible servicing.' },
      { title: 'Triair Outdoor Fans', detail: 'Highly rated for damp and wet conditions, with durable composite blades.' },
      { title: 'Heavy-Duty Roof Construction', detail: 'Heavy steel structure with anti-corrosion protection and Thermopanel roofing.' },
      { title: 'Aluminum Gutters & Flashing', detail: 'Selected for durability and corrosion resistance.' },
    ],
  },
  {
    title: 'What’s Behind the Walls Matters',
    body: 'Some of the most important investments in a home disappear once construction is complete. At Villas Tres Hermanas, what you don’t see receives the same attention as what you do.',
    image: `${base}area-social.webp`,
    points: [
      { title: 'No Standard Drywall', detail: 'DensGlass systems selected for durability and moisture resistance.' },
      { title: 'Independent Electrical Systems', detail: 'A dedicated load center and independent surge protection on every floor.' },
      { title: 'Protected Electrical Components', detail: 'Shielded Romex cable and protected metal electrical boxes.' },
      { title: 'Thoughtful Plumbing Systems', detail: 'Rigid piping rather than PEX, KTF plumbing fixtures and protected hot-water lines designed with movement and durability in mind.' },
      { title: 'BIONEST Treatment System', detail: 'An advanced wastewater treatment solution integrated into each residence.' },
    ],
  },
  {
    title: 'Real Materials. No Shortcuts.',
    body: 'Luxury should feel authentic. Throughout Villas Tres Hermanas, natural materials have been selected not only for how they look, but for how they feel, perform and age.',
    image: `${base}render-cocina-sala-01.webp`,
    points: [
      { title: 'Natural Teak Ceilings', detail: 'Warmth, character and a material exceptionally suited to tropical architecture.' },
      { title: 'Oak Cabinetry', detail: 'Real oak cabinetry with no MDF construction.' },
      { title: 'Real Stone', detail: 'Natural stone features, including statement stone tubs.' },
      { title: 'Natural Wood', detail: 'Real wood is prioritized rather than plastic-composite alternatives.' },
      { title: 'Luxury Wall Finishes', detail: 'Elevated wall finishes throughout the residences complete the architectural experience.' },
    ],
  },
  {
    title: 'Designed for Comfort',
    body: 'Exceptional construction should translate into exceptional everyday living.',
    image: `${base}dormitorio-principal-psd.webp`,
    points: [
      { title: 'Quiet Master Suites', detail: 'Designed to create a peaceful private retreat.' },
      { title: 'Aluplast PVC Windows & Doors', detail: 'Premium window and door systems selected for outstanding A/C efficiency and sound insulation.' },
      { title: 'High Ceilings', detail: 'Generous ceiling heights enhance space, light and airflow.' },
      { title: 'Blackout Bedrooms', detail: 'Blackout curtains throughout the bedrooms create comfortable sleeping environments.' },
      { title: 'Full-Speed Elevator', detail: 'Effortless access between levels.' },
      { title: 'Efficient Climate Control', detail: 'Protected A/C systems designed around the realities of Costa Rica’s coastal environment.' },
    ],
  },
  {
    title: 'Luxury Without the Maintenance Headache',
    body: 'Villas Tres Hermanas has been designed not only to look exceptional on day one, but to remain easier to own and maintain for years to come.',
    image: `${base}render-rerraza-piscina-02.webp`,
    points: [
      { title: 'Built to Stay Beautiful', detail: 'Integral-color stucco for reduced dependence on exterior painting, plus rubberized finishes in pools and built-in planters for added protection.' },
      { title: 'Coastal Durability', detail: 'Anti-corrosion treatments throughout key structural components, with aluminum gutters and flashing.' },
      { title: 'Serviceable by Design', detail: 'A/C access points designed to simplify servicing.' },
      { title: 'VIP Assurance', detail: 'Every residence includes the 5-Year VIP Development Warranty.' },
    ],
  },
]
export const standards = [
  ['Foundation', 'Deep foundations built on rock'], ['Structure', 'Solid poured concrete construction'], ['Interior Materials', 'Teak, oak, natural wood & real stone'], ['Cabinetry', 'Real oak — no MDF'], ['Windows & Doors', 'Premium Aluplast PVC'], ['Coastal Protection', 'Salt & corrosion-conscious systems'], ['Electrical', 'Independent load center & surge protection per floor'], ['Climate Control', 'Salt-air protected A/C'], ['Roofing', 'Heavy steel structure + Thermopanel'], ['Plumbing', 'Rigid piping + KTF fixtures'], ['Wastewater', 'BIONEST treatment system'], ['Warranty', '5-Year VIP Development Warranty'],
].map(([title, detail]) => ({ title, detail }))
