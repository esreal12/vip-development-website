'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description:
      'We discuss your vision, requirements, and budget to understand your project goals.',
  },
  {
    number: '02',
    title: 'Design & Planning',
    description:
      'Our team coordinates with architects to create detailed plans and secure all necessary permits.',
  },
  {
    number: '03',
    title: 'Construction & Management',
    description:
      'Daily supervision, quality control, and transparent communication throughout the build process.',
  },
  {
    number: '04',
    title: 'Project Completion',
    description:
      'Final walkthrough, handover, and ongoing support to ensure your complete satisfaction.',
  },
]

export default function Process() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1b1b1b 0%, #2c2c2c 100%)',
      }}
    >
      {/* Gold accent background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('/images/backgrounds/gold-black-luxury/3d-rendered-abstract-yellow-stripped-black-background.jpg')",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A streamlined process from concept to completion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-gold transition-all h-full">
                <div className="text-gold text-5xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="text-gold text-2xl">→</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

