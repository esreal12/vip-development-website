'use client'

import Image from 'next/image'
import Header from './Header'
import LeadForm from './LeadForm'
import { primaryImages } from '@/lib/villasTresHermanas'

export default function TemporaryVillasLanding() {
  return (
    <main id="hero" className="min-h-screen bg-[#181818] text-white">
      <Header minimal contactTarget="villas-contact" />
      <section className="relative overflow-hidden px-4 pb-24 pt-32 md:pt-40" style={{ background: 'radial-gradient(circle at top, #363636 0%, #181818 52%)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-semibold tracking-[0.22em] text-gold">VIP DEVELOPMENT</p>
            <h1 className="font-heading text-balance text-4xl font-bold leading-tight md:text-6xl">Interested in Villas Tres Hermanas?</h1>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            {primaryImages.slice(1).map((image) => (
              <div key={image.src} className="relative h-80 overflow-hidden rounded-lg border border-white/10 md:h-[34rem]">
                <Image src={image.src} alt={image.alt} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 64rem" />
              </div>
            ))}
          </div>

          <div id="villas-contact" className="mx-auto mt-16 max-w-2xl scroll-mt-28">
            <LeadForm idPrefix="villas" source="Featured Project — Villas Tres Hermanas" />
          </div>
        </div>
      </section>
    </main>
  )
}
