'use client'

import { useEffect } from 'react'

export default function FontLoader() {
  useEffect(() => {
    // Preconnect to Google Fonts
    const preconnect1 = document.createElement('link')
    preconnect1.rel = 'preconnect'
    preconnect1.href = 'https://fonts.googleapis.com'
    document.head.appendChild(preconnect1)

    const preconnect2 = document.createElement('link')
    preconnect2.rel = 'preconnect'
    preconnect2.href = 'https://fonts.gstatic.com'
    preconnect2.crossOrigin = 'anonymous'
    document.head.appendChild(preconnect2)

    // Load Zalando Sans Expanded
    const fontLink = document.createElement('link')
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Zalando+Sans+Expanded:ital,wght@0,200..900;1,200..900&display=swap'
    fontLink.rel = 'stylesheet'
    document.head.appendChild(fontLink)

    return () => {
      // Cleanup (optional)
      document.head.removeChild(preconnect1)
      document.head.removeChild(preconnect2)
      document.head.removeChild(fontLink)
    }
  }, [])

  return null
}

