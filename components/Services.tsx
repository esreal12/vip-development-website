'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Card from './ui/Card'

const services = [
  {
    title: 'Complete Build Solutions',
    description:
      'End-to-end construction services from concept to completion, ensuring seamless execution.',
    icon: '/images/icons/complete-build-solutions.svg',
  },
  {
    title: 'Architectural Coordination',
    description:
      'Working closely with trusted architects to bring your vision to life.',
    icon: '/images/icons/architectural-coordintation.svg',
  },
  {
    title: 'Full Project Management',
    description:
      'Daily supervision and comprehensive project management for peace of mind.',
    icon: '/images/icons/full-project-management.svg',
  },
  {
    title: 'Permits & Legal Requirements',
    description:
      'Navigating permits, municipal approvals, and all legal requirements.',
    icon: '/images/icons/permits-and-legal-requirements.svg',
  },
  {
    title: 'Remodeling & Additions',
    description:
      'Transforming existing properties with expert remodeling and additions.',
    icon: '/images/icons/remodeling-and-additions.svg',
  },
  {
    title: 'Real Estate Services',
    description:
      'Property sourcing, sales support, and investment guidance in Costa Rica.',
    icon: '/images/icons/real-estate-services.svg',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-gray-50 overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('/images/backgrounds/black-white-luxury/abstract-city-building-shadows.jpg')",
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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            VIP Development manages every stage of the construction and
            development process — from concept to completion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-gold hover:border-2 transition-all">
                <div className="mb-4 flex justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 font-heading">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

