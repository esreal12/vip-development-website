'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logos/vip-development-logo.svg"
                alt="VIP Development Logo"
                width={150}
                height={60}
                className="h-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Pura Vida Construction - Driven by Experience. Defined by Quality.
            </p>
            <p className="text-gray-400 text-sm">
              20+ years of excellence in Costa Rica construction and
              development.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="flex flex-wrap gap-4 md:gap-6">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} VIP Development. All rights
            reserved.
          </p>
          <p className="mt-2">
            Central Pacific Region, Costa Rica
          </p>
        </div>
      </div>
    </footer>
  )
}

