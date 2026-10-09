import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import LeadForm from '@/components/LeadForm'

const { sendEmail } = vi.hoisted(() => ({ sendEmail: vi.fn() }))
vi.mock('@/lib/emailjs', () => ({ sendEmail }))

afterEach(() => cleanup())

describe('LeadForm', () => {
  it('validates required fields and invalid email', async () => {
    const user = userEvent.setup()
    render(<LeadForm idPrefix="project" source="Featured Project — Villas Tres Hermanas" />)
    await user.click(screen.getByRole('button', { name: 'Request Information' }))
    expect(await screen.findByText('Name is required')).toBeInTheDocument()
    await user.type(screen.getByLabelText('Email *'), 'not-an-email')
    expect(await screen.findByText('Invalid email address')).toBeInTheDocument()
  })

  it('submits the dedicated project source and confirms delivery', async () => {
    sendEmail.mockResolvedValueOnce(true)
    const user = userEvent.setup()
    render(<LeadForm idPrefix="villas" source="Featured Project — Villas Tres Hermanas" />)
    await user.type(screen.getByLabelText('Name *'), 'Test Guest')
    await user.type(screen.getByLabelText('Email *'), 'guest@example.com')
    await user.type(screen.getByLabelText('Message *'), 'Please share availability.')
    await user.click(screen.getByRole('button', { name: 'Request Information' }))
    expect(await screen.findByRole('status')).toHaveTextContent('Your message has been sent')
    expect(sendEmail).toHaveBeenCalledWith(expect.objectContaining({ source: 'Featured Project — Villas Tres Hermanas' }))
  })
})
