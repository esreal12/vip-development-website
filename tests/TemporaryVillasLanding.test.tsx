import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import TemporaryVillasLanding from '@/components/TemporaryVillasLanding'

vi.mock('@/components/LeadForm', () => ({
  default: ({ source }: { source: string }) => <div data-testid="villas-lead-form">{source}</div>,
}))

afterEach(() => cleanup())

it('shows only the Villas Tres Hermanas contact landing content', () => {
  render(<TemporaryVillasLanding />)

  expect(screen.getByAltText('VIP Development Logo')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Send a Message' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Interested in Villas Tres Hermanas?' })).toBeInTheDocument()
  expect(screen.getByAltText('Villas Tres Hermanas exterior overlooking the Central Pacific')).toBeInTheDocument()
  expect(screen.getByAltText('Contemporary Villas Tres Hermanas architecture')).toBeInTheDocument()
  expect(screen.getByTestId('villas-lead-form')).toHaveTextContent('Featured Project — Villas Tres Hermanas')
  expect(screen.queryByText(/Contact us for residence information/i)).not.toBeInTheDocument()
})
