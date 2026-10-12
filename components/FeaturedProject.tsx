'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Button from './ui/Button'
import LeadForm from './LeadForm'
import Lightbox from './ui/Lightbox'
import VipStandard from './VipStandard'
import { galleryImages, primaryImages } from '@/lib/villasTresHermanas'

export default function FeaturedProject() {
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const requestInfo = () => {
    document.getElementById('villas-enquiry')?.scrollIntoView({ behavior: 'smooth' })
    window.setTimeout(() => document.getElementById('villas-name')?.focus({ preventScroll: true }), 350)
  }
  return <section id="projects" className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1b1b1b 0%, #2c2c2c 100%)' }}>
    <div className="container mx-auto px-4 relative z-10">
      <header className="text-center max-w-4xl mx-auto mb-16"><p className="text-gold font-semibold tracking-widest">FEATURED PROJECT</p><Image src="/images/logos/villas-tres-hermanas-logotype.jpg" alt="Villas Tres Hermanas Logo" width={700} height={200} className="h-auto rounded-[50px] mx-auto my-5" priority /><h2 className="text-4xl md:text-6xl font-bold text-white">Exceptional Homes. Extraordinary Setting. Built Without Compromise.</h2><p className="text-lg text-gray-300 mt-6">Villas Tres Hermanas is an exclusive collection of three residences where contemporary design, breathtaking surroundings and uncompromising construction come together.</p><Image src="/images/logos/0-Logo ROBLESARQ.png" alt="Robles ARQ Logo" width={180} height={80} className="h-auto w-36 mx-auto mt-5" /></header>
      <div className="grid md:grid-cols-2 gap-10 mb-16">{primaryImages.map((image) => <Image key={image.src} src={image.src} alt={image.alt} width={1600} height={1000} className="rounded-lg h-96 w-full object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />)}</div>
      <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed mb-10"><p>Set along Costa Rica&apos;s spectacular Central Pacific coast, each home embraces panoramic ocean views and effortless indoor-outdoor living, with expansive spaces, high ceilings, infinity pools and carefully selected natural materials.</p><p className="mt-4">True luxury isn&apos;t only about how a home looks—it&apos;s about how well it&apos;s built.</p><button type="button" onClick={() => document.getElementById('vip-standard')?.scrollIntoView({ behavior: 'smooth' })} className="mt-7 text-gold font-semibold tracking-widest hover:text-white transition-colors">EXPLORE THE VIP STANDARD ↓</button></div>
      <div id="villas-enquiry" className="max-w-2xl mx-auto mb-20"><h3 className="text-3xl text-white font-bold text-center mb-3">Interested in Villas Tres Hermanas?</h3><p className="text-gray-300 text-center mb-8">Contact us for residence information, availability and additional project details.</p><LeadForm idPrefix="villas" source="Featured Project — Villas Tres Hermanas" /></div>
      <VipStandard />
      <div className="text-center mb-16"><Button onClick={requestInfo} variant="primary">Request Information</Button></div>
      <h3 className="text-3xl font-bold text-white text-center mb-8">Project Gallery</h3><div className="grid grid-cols-2 md:grid-cols-4 gap-4">{galleryImages.map((image, index) => <button key={image.src} onClick={() => { setLightboxIndex(index); setLightboxOpen(true) }} className="relative h-48 rounded-lg overflow-hidden"><Image src={image.src} alt={image.alt} fill className="object-cover hover:scale-105 transition-transform" sizes="(max-width: 768px) 50vw, 25vw" /></button>)}</div>
    </div><Lightbox images={galleryImages.map((image) => image.src)} currentIndex={lightboxIndex} isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} onNavigate={setLightboxIndex} />
  </section>
}
