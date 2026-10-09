const base = '/images/projects/villas-tres-hermanas/'
export type ProjectImage = { src: string; alt: string }
export const primaryImages: ProjectImage[] = [
  { src: `${base}casa-a-render-frontal.webp`, alt: 'Villas Tres Hermanas exterior overlooking the Central Pacific' },
  { src: `${base}casa-a-render-lateral-01.webp`, alt: 'Contemporary Villas Tres Hermanas architecture' },
]
export const galleryImages: ProjectImage[] = ['casa-a-render-lateral-02','casa-a-render-lateral-03','casa-a-render-posterior','render-rerraza-piscina-01','render-rerraza-piscina-02','render-cocina-sala-01','render-cocina-sala-02','area-social','render-terraza-01','dormitorio-principal-psd','20260609-dormitorios','act20260427-bano-principal','act20260427-bano-principal-2','bano-secundario-01','20260609-bano-de-visitas','sala-tv-psd'].map((name) => ({ src: `${base}${name}.webp`, alt: `Villas Tres Hermanas ${name.replaceAll('-', ' ')}` }))
export const standardSections = [
  ['Built From the Ground Up', 'A structure designed for generations. Built on rock with deep foundations, solid poured concrete walls and exceptional structural steel, each residence is built for permanence.', 'casa-a-render-lateral-04.webp'],
  ['Engineered for Coastal Costa Rica', 'Salt air, humidity, tropical rain and intense sun demand more from a home. Salt-air protected A/C, Triair outdoor fans, heavy steel roofing and aluminum gutters are selected for long-term performance.', 'render-rerraza-piscina-01.webp'],
  ["What’s Behind the Walls Matters", 'DensGlass systems, independent electrical load centers and surge protection, shielded components, rigid piping, KTF fixtures and a BIONEST treatment system receive the same care as visible finishes.', 'area-social.webp'],
  ['Real Materials. No Shortcuts.', 'Natural teak ceilings, real oak cabinetry, natural stone, genuine wood and elevated wall finishes create luxury that looks authentic, performs and ages well.', 'render-cocina-sala-01.webp'],
  ['Designed for Comfort', 'Quiet master suites, Aluplast PVC windows and doors, high ceilings, blackout bedrooms, a full-speed elevator and efficient climate control support everyday comfort.', 'dormitorio-principal-psd.webp'],
  ['Luxury Without the Maintenance Headache', 'Integral-color stucco, rubberized pool finishes, anti-corrosion treatments, accessible A/C service points and aluminum flashing are designed for easier ownership over time.', 'render-rerraza-piscina-02.webp'],
].map(([title, body, image]) => ({ title, body, image: `${base}${image}` }))
export const standards = [
  ['Foundation', 'Deep foundations built on rock'], ['Structure', 'Solid poured concrete construction'], ['Interior Materials', 'Teak, oak, natural wood & real stone'], ['Cabinetry', 'Real oak — no MDF'], ['Windows & Doors', 'Premium Aluplast PVC'], ['Coastal Protection', 'Salt & corrosion-conscious systems'], ['Electrical', 'Independent load center & surge protection per floor'], ['Climate Control', 'Salt-air protected A/C'], ['Roofing', 'Heavy steel structure + Thermopanel'], ['Plumbing', 'Rigid piping + KTF fixtures'], ['Wastewater', 'BIONEST treatment system'], ['Warranty', '5-Year VIP Development Warranty'],
].map(([title, detail]) => ({ title, detail }))
