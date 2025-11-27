'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('/images/backgrounds/nature-textures/close-up-stone-wall.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
              style={{
                backgroundImage:
                  "url('/images/backgrounds/minimalist-luxury/sprawling-unfurnished-living-room-with-ocean-views-luxurious-home.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-heading">
              Our Story
            </h2>
            <div className="text-gold text-2xl font-semibold mb-4">
              20+ Years of Experience
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              VIP Development specializes in the design, construction, and full
              project management of high-end residential homes. With over 20
              years of experience and a fully English-speaking team, we deliver
              construction solutions that add long-term value and exceed client
              expectations.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our mission is to design, build, and manage high-quality projects
              with precision, transparency, and personalized service.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-gold text-2xl mr-4">✓</div>
                <div>
                  <h3 className="font-semibold text-black mb-1 font-heading">
                    Quality Craftsmanship
                  </h3>
                  <p className="text-gray-600">
                    Uncompromising attention to detail in every project
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-gold text-2xl mr-4">✓</div>
                <div>
                  <h3 className="font-semibold text-black mb-1 font-heading">
                    Transparency
                  </h3>
                  <p className="text-gray-600">
                    Clear communication and honest reporting throughout
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-gold text-2xl mr-4">✓</div>
                <div>
                  <h3 className="font-semibold text-black mb-1 font-heading">Reliability</h3>
                  <p className="text-gray-600">
                    On-time, on-budget delivery you can count on
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

