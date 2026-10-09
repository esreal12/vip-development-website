import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import LeadForm from '@/components/LeadForm'

const { sendEmail } = vi.hoisted(() => ({ sendEmail: vi.fn() }))
vi.mock('@/lib/emailjs', () => ({ sendEmail }))

describe('LeadForm', () => {
  it('validates required fields and invalid email', async () => {
    const user = userEvent.setup()
    render(<LeadForm idPrefix="project" source="Featured Project — Villas Tres Hermanas" />)
    await user.click(screen.getByRole('button', { name: 'Request Information' }))
    expect(await screen.findByText('Name is required')).toBeInTheDocument()
    await user.type(screen.getByLabelText('Email *'), 'not-an-email')
    expect(await screen.findByText('Invalid email address')).toBeInTheDocument()
  })
})
