'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Card from './ui/Card'

const benefits = [
  {
    title: '20+ Years Experience',
    description:
      'Two decades of expertise in Costa Rica construction and development.',
    icon: '/images/icons/20-years-experience.svg',
  },
  {
    title: 'English-Speaking Team',
    description:
      'Seamless communication for international clients and investors.',
    icon: '/images/icons/english-speaking-team.svg',
  },
  {
    title: 'Transparent Communication',
    description:
      'Regular updates and clear reporting throughout your project.',
    icon: '/images/icons/transparent-comunication.svg',
  },
  {
    title: 'On-Time, On-Budget Delivery',
    description:
      'Strong organization and cost control to meet your expectations.',
    icon: '/images/icons/on-time-on-budget-delivery.svg',
  },
]

export default function Benefits() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('/images/backgrounds/black-white-luxury/modern-light-shadow-patterns.jpg')",
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
            Why Choose VIP Development
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What sets us apart in the Costa Rica construction industry
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full text-center hover:border-gold hover:border-2 transition-all">
                <div className="mb-4 flex justify-center">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 font-heading">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

