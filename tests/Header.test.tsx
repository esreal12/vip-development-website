import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import Header from '@/components/Header'

afterEach(() => cleanup())

it('shows only the contact action in temporary mode', () => {
  render(<Header minimal contactTarget="villas-contact" />)

  expect(screen.getByRole('button', { name: 'Send a Message' })).toBeInTheDocument()
  expect(screen.queryByRole('button', { name: 'About' })).not.toBeInTheDocument()
  expect(screen.queryByRole('button', { name: 'Services' })).not.toBeInTheDocument()
  expect(screen.queryByRole('button', { name: 'Projects' })).not.toBeInTheDocument()
  expect(screen.queryByRole('button', { name: 'Contact' })).not.toBeInTheDocument()
})
