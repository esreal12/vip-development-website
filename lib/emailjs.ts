import emailjs from '@emailjs/browser'

export interface ContactFormData {
  name: string
  email: string
  phone: string
  projectType: string
  message: string
}

export const sendEmail = async (data: ContactFormData): Promise<boolean> => {
  try {
    // Initialize EmailJS (you'll need to set these in environment variables)
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration is missing')
      console.error('Service ID:', serviceId ? '✓' : '✗')
      console.error('Template ID:', templateId ? '✓' : '✗')
      console.error('Public Key:', publicKey ? '✓' : '✗')
      return false
    }

    const templateParams = {
      from_name: data.name || '',
      from_email: data.email || '',
      phone: data.phone || '',
      project_type: data.projectType || '',
      message: data.message || '',
    }

    console.log('Sending email with params:', templateParams)

    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    )

    console.log('EmailJS response:', result)
    return result.status === 200
  } catch (error: any) {
    console.error('EmailJS error:', error)
    if (error.text) {
      console.error('Error details:', error.text)
    }
    if (error.status) {
      console.error('Error status:', error.status)
    }
    return false
  }
}

