import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import FeaturedProject from '@/components/FeaturedProject'

vi.mock('@/components/VipStandard', () => ({ default: () => <div /> }))

afterEach(() => cleanup())

it('keeps the Villas identity and places the Robles mark below the project description', () => {
  render(<FeaturedProject />)

  const villasLogo = screen.getByAltText('Villas Tres Hermanas Logo')
  const roblesLogo = screen.getByAltText('Robles ARQ Logo')
  const description = screen.getByText(/Villas Tres Hermanas is an exclusive collection/i)

  expect(villasLogo).toHaveAttribute('src', '/images/logos/villas-tres-hermanas-logotype.jpg')
  expect(roblesLogo).toHaveAttribute('src', '/images/logos/0-Logo ROBLESARQ.png')
  expect(description.compareDocumentPosition(roblesLogo) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
})
