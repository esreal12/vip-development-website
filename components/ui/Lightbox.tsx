'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface LightboxProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate?: (index: number) => void
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  const [index, setIndex] = useState(currentIndex)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIndex(currentIndex)
  }, [currentIndex])

  useEffect(() => {
    if (!isOpen) {
      setIsZoomed(false)
      setZoomPosition({ x: 0, y: 0 })
    } else {
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          goToPrevious()
          break
        case 'ArrowRight':
          goToNext()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, index, images.length, onClose])

  const goToPrevious = () => {
    const newIndex = (index - 1 + images.length) % images.length
    setIndex(newIndex)
    setIsZoomed(false)
    setZoomPosition({ x: 0, y: 0 })
    onNavigate?.(newIndex)
  }

  const goToNext = () => {
    const newIndex = (index + 1) % images.length
    setIndex(newIndex)
    setIsZoomed(false)
    setZoomPosition({ x: 0, y: 0 })
    onNavigate?.(newIndex)
  }

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isZoomed) {
      setIsZoomed(false)
      setZoomPosition({ x: 0, y: 0 })
    } else {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      setIsZoomed(true)
      setZoomPosition({ x: x * 20, y: y * 20 })
    }
  }

  if (!isOpen || images.length === 0) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[60] bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Close lightbox"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Container */}
        <div
          className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-7xl max-h-full w-full h-full"
            onClick={handleImageClick}
          >
            <div
              className={`relative w-full h-full ${
                isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              style={{
                transform: isZoomed
                  ? `scale(2) translate(${zoomPosition.x}px, ${zoomPosition.y}px)`
                  : 'scale(1)',
                transition: 'transform 0.3s ease-out',
              }}
            >
              <Image
                src={images[index]}
                alt={`Image ${index + 1} of ${images.length}`}
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[60] bg-black/50 hover:bg-black/70 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[60] bg-black/50 hover:bg-black/70 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-[60] bg-black/50 text-white px-4 py-2 rounded-full text-sm md:text-base">
              {index + 1} / {images.length}
            </div>
          )}

          {/* Zoom Hint */}
          {!isZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-[60] bg-black/50 text-white px-4 py-2 rounded-full text-xs md:text-sm"
            >
              Click to zoom • Use arrow keys to navigate
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

