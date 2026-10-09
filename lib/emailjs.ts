import emailjs from '@emailjs/browser'

export type LeadSource =
  | 'General Contact Form'
  | 'Featured Project — Villas Tres Hermanas'

export interface LeadFormData {
  name: string
  email: string
  phone?: string
  projectType?: string
  message: string
  source: LeadSource
}

export const sendEmail = async (data: LeadFormData): Promise<boolean> => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
  if (!serviceId || !templateId || !publicKey) return false

  try {
    const result = await emailjs.send(serviceId, templateId, {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || '',
      project_type: data.projectType || '',
      message: data.message,
      lead_source: data.source,
      subject: data.source === 'Featured Project — Villas Tres Hermanas'
        ? 'New Villas Tres Hermanas enquiry'
        : 'New VIP Development enquiry',
    }, publicKey)
    return result.status === 200
  } catch {
    return false
  }
}
