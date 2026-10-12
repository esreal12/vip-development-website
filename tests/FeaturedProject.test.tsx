import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import FeaturedProject from '@/components/FeaturedProject'

vi.mock('@/components/VipStandard', () => ({ default: () => <div /> }))

afterEach(() => cleanup())

it('keeps the Villas identity without showing a Robles mark', () => {
  render(<FeaturedProject />)

  const villasLogo = screen.getByAltText('Villas Tres Hermanas Logo')

  expect(villasLogo).toHaveAttribute('src', '/images/logos/villas-tres-hermanas-logotype.jpg')
  expect(screen.queryByAltText('Robles ARQ Logo')).not.toBeInTheDocument()
})
