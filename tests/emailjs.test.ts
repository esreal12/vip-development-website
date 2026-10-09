import { beforeEach, describe, expect, it, vi } from 'vitest'

const { send } = vi.hoisted(() => ({ send: vi.fn() }))

vi.mock('@emailjs/browser', () => ({
  default: { send },
}))

import { sendEmail } from '@/lib/emailjs'

describe('sendEmail', () => {
  beforeEach(() => {
    send.mockReset()
    send.mockResolvedValue({ status: 200 })
    vi.stubEnv('NEXT_PUBLIC_EMAILJS_SERVICE_ID', 'service')
    vi.stubEnv('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', 'template')
    vi.stubEnv('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY', 'public-key')
  })

  it('tags a Villas Tres Hermanas enquiry without exposing recipients', async () => {
    await expect(sendEmail({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      phone: '+506 8000 0000',
      message: 'Please send availability.',
      source: 'Featured Project — Villas Tres Hermanas',
    })).resolves.toBe(true)

    expect(send).toHaveBeenCalledWith('service', 'template', {
      from_name: 'Ada Lovelace',
      from_email: 'ada@example.com',
      phone: '+506 8000 0000',
      project_type: '',
      message: 'Please send availability.',
      lead_source: 'Featured Project — Villas Tres Hermanas',
      subject: 'New Villas Tres Hermanas enquiry',
    }, 'public-key')
    expect(Object.keys(send.mock.calls[0][2])).not.toContain('to_email')
  })

  it('does not call EmailJS when configuration is missing', async () => {
    vi.stubEnv('NEXT_PUBLIC_EMAILJS_SERVICE_ID', '')
    await expect(sendEmail({
      name: 'Ada Lovelace', email: 'ada@example.com', message: 'Hello', source: 'General Contact Form',
    })).resolves.toBe(false)
    expect(send).not.toHaveBeenCalled()
  })
})
