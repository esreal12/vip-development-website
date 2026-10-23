import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import Home from '@/app/page'

afterEach(() => cleanup())

it('renders only the temporary Villas contact landing', () => {
  const { container } = render(<Home />)

  expect(screen.getByRole('heading', { name: 'Interested in Villas Tres Hermanas?' })).toBeInTheDocument()
  expect(container.querySelector('#about')).not.toBeInTheDocument()
  expect(container.querySelector('#services')).not.toBeInTheDocument()
  expect(container.querySelector('#projects')).not.toBeInTheDocument()
  expect(container.querySelector('#contact')).not.toBeInTheDocument()
})
