import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import About from '@/components/About'
import Hero from '@/components/Hero'

afterEach(() => cleanup())

it('uses VIP Development renders instead of the third-party hero and story photography', () => {
  const { container: hero } = render(<Hero />)
  const { container: about } = render(<About />)

  expect(hero.querySelector('#hero')).toHaveStyle({
    backgroundImage: "url('/images/projects/villas-tres-hermanas/casa-a-render-frontal.webp')",
  })
  expect(
    about.querySelector('[style*="render-rerraza-piscina-01"]'),
  ).toBeInTheDocument()
})
