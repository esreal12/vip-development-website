'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from './ui/Button'
import ImageSlider from './ui/ImageSlider'
import Lightbox from './ui/Lightbox'

export default function FeaturedProject() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Featured images for the slider
  const featuredImages = [
    '/images/renders/Render_01_Casas.jpg',
    '/images/renders/Render_02_Casas.jpg',
    '/images/renders/04---Piscina-Principal.jpg',
  ]

  // All gallery images (featured + rest)
  const galleryImages = [
    '/images/renders/Render_01_Casas.jpg',
    '/images/renders/Render_02_Casas.jpg',
    '/images/renders/04---Piscina-Principal.jpg',
    '/images/renders/Render_03_Casas.jpg',
    '/images/renders/Render_04_Casas.jpg',
    '/images/renders/Render_05_Casas.jpg',
    '/images/renders/05---Piscina-Posterior.jpg',
    '/images/renders/06---Piscina-Lateral.jpg',
    '/images/renders/07---Piscina-Corte.jpg',
    '/images/renders/Render_01_Casa-Sola.jpg',
    '/images/renders/Render_02_Casa-Sola.jpg',
    '/images/renders/Baño_Principal.01.jpg',
    '/images/renders/Baño_Principal.02.jpg',
    '/images/renders/Baño_Secundario.01.jpg',
    '/images/renders/Baño_Secundario.02.jpg',
    '/images/renders/Baño_Secundario.03.jpg',
    '/images/renders/Baño_Visitasl.01.jpg',
    '/images/renders/R1.jpg',
    '/images/renders/R3.jpg',
    '/images/renders/R4.jpg',
    '/images/renders/R5.jpg',
    '/images/renders/R9.jpg',
  ]

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

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
          <div className="mb-4 flex justify-center">
            <Image
              src="/images/logos/villas-tres-hermanas-logotype.jpg"
              alt="Villas Tres Hermanas Logo"
              width={700}
              height={200}
              className="h-auto"
              style={{
                borderRadius: '50px'
              }}
            />
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
          >
            <ImageSlider images={featuredImages} autoPlay={true} />
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
                className="relative h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openLightbox(index)
                  }
                }}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNavigate={setLightboxIndex}
      />
    </section>
  )
}

