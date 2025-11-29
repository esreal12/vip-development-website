'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { sendEmail, ContactFormData } from '@/lib/emailjs'
import Button from './ui/Button'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const success = await sendEmail(data)
      if (success) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1b1b1b 0%, #2c2c2c 100%)',
      }}
    >
      {/* Gold accent background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('/images/backgrounds/gold-black-luxury/abstract-gold-lines-luxury-background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a consultation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
            suppressHydrationWarning
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-semibold mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-white font-semibold mb-2"
                >
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold"
                  placeholder="+506 1234 5678"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-white font-semibold mb-2"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  {...register('projectType')}
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold"
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="hospitality">Hospitality / Tourism</option>
                  <option value="remodeling">Remodeling</option>
                  <option value="real-estate">Real Estate Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-white font-semibold mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                rows={5}
                {...register('message', { required: 'Message is required' })}
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded text-green-300" suppressHydrationWarning>
                Thank you! Your message has been sent. We'll get back to you
                soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded text-red-300" suppressHydrationWarning>
                There was an error sending your message. Please try again or
                contact us directly.
              </div>
            )}

            <div className="text-center">
              <Button
                type="submit"
                variant="primary"
                className="w-full md:w-auto"
                onClick={() => {}}
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

