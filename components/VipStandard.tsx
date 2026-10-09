import Image from 'next/image'
import { standardSections, standards } from '@/lib/villasTresHermanas'

export default function VipStandard() {
  return <section className="py-20 space-y-16">
    <div className="text-center max-w-3xl mx-auto"><p className="text-gold font-semibold tracking-widest">THE VIP STANDARD</p><h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Luxury You Can See. Quality You Can&apos;t Always See.</h2><p className="text-gray-300 mt-5">At Villas Tres Hermanas, every decision reflects structural integrity, coastal durability, comfort and long-term performance.</p></div>
    {standardSections.map((section, index) => <article key={section.title} className="grid md:grid-cols-2 gap-10 items-center"><div className={index % 2 ? 'md:order-2' : ''}><h3 className="text-3xl font-bold text-gold mb-4">{section.title}</h3><p className="text-lg leading-relaxed text-gray-300">{section.body}</p></div><div className={index % 2 ? 'md:order-1' : ''}><Image src={section.image} alt={section.title} width={1600} height={1000} className="rounded-lg object-cover w-full h-80" sizes="(max-width: 768px) 100vw, 50vw" /></div></article>)}
    <div><h3 className="text-3xl text-center font-bold text-white mb-3">Beyond the Finish</h3><p className="text-center text-gold mb-8">Beautiful on the surface. Exceptional underneath.</p><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{standards.map((item) => <div key={item.title} className="border border-gold/30 rounded p-5"><h4 className="text-gold font-semibold">{item.title}</h4><p className="text-gray-300 mt-1">{item.detail}</p></div>)}</div></div>
  </section>
}
