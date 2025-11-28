'use client'

import { motion } from 'framer-motion'

const areas = [
  'Manuel Antonio',
  'Quepos',
  'Dominical',
  'Uvita',
  'Jaco',
  'Herradura',
]

export default function ServiceAreas() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('/images/backgrounds/minimalist-luxury/scenic-view-palm-trees-against-clear-sky.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-heading">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            We primarily serve the Central Pacific region of Costa Rica
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From the pristine beaches of Manuel Antonio to the vibrant surf
            towns of Dominical and Uvita, VIP Development brings 20+ years of
            expertise to the most sought-after locations in Costa Rica.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-8 hover:bg-gold hover:text-black transition-all cursor-pointer border-2 border-transparent hover:border-gold min-h-[120px] flex items-center justify-center"
            >
              <div className="text-xl font-semibold text-center leading-tight">{area}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

