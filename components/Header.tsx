'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: 'rgba(17, 17, 17, 0.9)',
      }}
    >
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center"
          >
            <Image
              src="/images/logos/vip-development-logo.svg"
              alt="VIP Development Logo"
              width={150}
              height={60}
              className="h-auto"
              priority
            />
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-gold transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-white hover:text-gold transition-colors font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-white hover:text-gold transition-colors font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-gold transition-colors font-medium"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gold text-black px-6 py-2 rounded-sm font-semibold hover:bg-gold-light transition-colors"
          >
            Get Started
          </button>
        </div>
      </nav>
    </motion.header>
  )
}

