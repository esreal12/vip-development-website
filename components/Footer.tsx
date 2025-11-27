'use client'

import { motion } from 'framer-motion'

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
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">VIP</span>
              <span className="text-gold">DEVELOPMENT</span>
            </h3>
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
            <ul className="space-y-2">
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

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">
              Service Areas
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Manuel Antonio</li>
              <li>Quepos</li>
              <li>Dominical</li>
              <li>Uvita</li>
              <li>Jaco</li>
              <li>Herradura</li>
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

