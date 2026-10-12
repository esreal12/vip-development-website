import React from 'react'
import Image from 'next/image'
import { standardSections, standards, type StandardIcon as StandardIconName } from '@/lib/villasTresHermanas'

function StandardIcon({ name, className = 'h-6 w-6' }: { name: StandardIconName; className?: string }) {
  const props = { className, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true }
  if (name === 'foundation') return <svg {...props}><path d="M3 21h18M5 21V9h14v12M9 9V5h6v4" /><path d="M8 14h8" /></svg>
  if (name === 'coastal') return <svg {...props}><path d="M3 16c2.2 0 2.2-2 4.5-2s2.2 2 4.5 2 2.2-2 4.5-2 2.2 2 4.5 2" /><path d="M3 20c2.2 0 2.2-2 4.5-2s2.2 2 4.5 2 2.2-2 4.5-2 2.2 2 4.5 2" /><path d="M12 3l4 2v4c0 3-1.6 5.4-4 6.8C9.6 14.4 8 12 8 9V5l4-2Z" /></svg>
  if (name === 'systems') return <svg {...props}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9zM12 4v5M12 15v5M4 12h5M15 12h5" /></svg>
  if (name === 'materials') return <svg {...props}><path d="M20 4C12 4 5 8 5 16c0 2 1 3 3 3 8 0 12-7 12-15Z" /><path d="M5 20c3-5 7-8 12-10" /></svg>
  if (name === 'comfort') return <svg {...props}><path d="m3 11 9-7 9 7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9Z" /><path d="M9 21v-6h6v6M8 10h.01M16 10h.01" /></svg>
  return <svg {...props}><path d="M12 3 5 6v5c0 4.6 3 8.4 7 10 4-1.6 7-5.4 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>
}

function PointIcon() {
  return <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>
}

export default function VipStandard() {
  return <section id="vip-standard" className="py-20 space-y-16">
    <div className="text-center max-w-3xl mx-auto"><p className="text-gold font-semibold tracking-widest">THE VIP STANDARD</p><h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Luxury You Can See. Quality You Can&apos;t Always See.</h2><p className="text-gray-300 mt-5">At Villas Tres Hermanas, every decision reflects structural integrity, coastal durability, comfort and long-term performance.</p></div>
    {standardSections.map((section, index) => <article key={section.title} className="grid md:grid-cols-2 gap-10 items-center"><div className={index % 2 ? 'md:order-2' : ''}><div className="flex items-center gap-3 mb-4"><span data-section-icon className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/10 text-gold"><StandardIcon name={section.icon} /></span><h3 className="text-3xl font-bold text-gold">{section.title}</h3></div><p className="text-lg leading-relaxed text-gray-300">{section.body}</p>{section.points && <dl className="mt-6 space-y-4">{section.points.map((point) => <div key={point.title}><dt className="flex items-center gap-2 font-semibold text-white"><span data-point-icon className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-black"><PointIcon /></span>{point.title}</dt><dd className="pl-7 text-gray-300 leading-relaxed">{point.detail}</dd></div>)}</dl>}</div><div className={index % 2 ? 'md:order-1' : ''}><Image src={section.image} alt={section.title} width={1600} height={1000} className="rounded-lg object-cover w-full h-80" sizes="(max-width: 768px) 100vw, 50vw" /></div></article>)}
    <div><h3 className="text-3xl text-center font-bold text-white mb-3">Beyond the Finish</h3><p className="text-center text-gold mb-8">Beautiful on the surface. Exceptional underneath.</p><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{standards.map((item) => <div data-standard-card key={item.title} className="border border-gold/30 rounded p-5"><div className="flex items-center gap-3"><span className="text-gold"><StandardIcon name={item.icon} className="h-5 w-5" /></span><h4 className="text-gold font-semibold">{item.title}</h4></div><p className="text-gray-300 mt-2">{item.detail}</p></div>)}</div></div>
  </section>
}
