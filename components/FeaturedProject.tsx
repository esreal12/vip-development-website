'use client'

import { motion } from 'framer-motion'
import Button from './ui/Button'

export default function FeaturedProject() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Gallery images - using renders from 0-Renders folder
  const galleryImages = [
    '/images/renders/Render_01_Casas.jpg',
    '/images/renders/Render_02_Casas.jpg',
    '/images/renders/Render_03_Casas.jpg',
    '/images/renders/Render_04_Casas.jpg',
    '/images/renders/Render_05_Casas.jpg',
  ]

  return (
    <section
      id="projects"
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
            "url('/images/backgrounds/gold-black-luxury/abstract-gold-lines-luxury-background.jpg')",
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
            Featured Project
          </h2>
          <div className="text-gold text-3xl font-bold mb-2">
            Villas Tres Hermanas
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of luxury living in Costa Rica
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "url('/images/renders/Render_01_Casas.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h3 className="text-3xl font-bold mb-6 text-gold font-heading">
              Luxury Living Redefined
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Villas Tres Hermanas represents the pinnacle of luxury residential
              development in Costa Rica. This exceptional project showcases our
              commitment to quality craftsmanship, modern design, and seamless
              integration with the natural beauty of the Central Pacific region.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Each villa is meticulously designed to offer breathtaking ocean
              views, premium finishes, and an unparalleled living experience that
              embodies the essence of Pura Vida.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <div className="text-gold text-3xl font-bold">3</div>
                <div className="text-gray-400">Luxury Villas</div>
              </div>
              <div>
                <div className="text-gold text-3xl font-bold">5+</div>
                <div className="text-gray-400">Bedrooms</div>
              </div>
              <div>
                <div className="text-gold text-3xl font-bold">Infinity</div>
                <div className="text-gray-400">Pool Views</div>
              </div>
              <div>
                <div className="text-gold text-3xl font-bold">Ocean</div>
                <div className="text-gray-400">Front Property</div>
              </div>
            </div>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="primary"
            >
              Inquire for Info
            </Button>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center font-heading">
            Project Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
              >
                <div
                  className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('${image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

