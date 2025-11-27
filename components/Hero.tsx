'use client'

import { motion } from 'framer-motion'
import Button from './ui/Button'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/backgrounds/minimalist-luxury/modern-minimalist-villa-with-infinity-pool-overlooking-ocean.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay with gold accent */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('/images/backgrounds/gold-black-luxury/abstract-gold-lines-luxury-background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Pura Vida Construction
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gold mb-4 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Driven by Experience. Defined by Quality.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            With over 20 years of experience, we design, build, and manage
            high-quality projects with precision, transparency, and personalized
            service.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => scrollToSection('contact')}
              variant="primary"
            >
              Get Started
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

