'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LeadFormData, LeadSource, sendEmail } from '@/lib/emailjs'
import Button from './ui/Button'

type Props = { idPrefix: string; source: LeadSource; includeProjectType?: boolean; submitLabel?: string }
type Fields = Omit<LeadFormData, 'source'>

export default function LeadForm({ idPrefix, source, includeProjectType = false, submitLabel = 'Request Information' }: Props) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Fields>()
  const submit = async (data: Fields) => {
    setStatus('idle')
    if (await sendEmail({ ...data, source })) { reset(); setStatus('success') } else setStatus('error')
  }
  const field = (name: string) => `${idPrefix}-${name}`
  return <form onSubmit={handleSubmit(submit)} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
    <div className="grid md:grid-cols-2 gap-6 mb-6">
      <div><label htmlFor={field('name')} className="block text-white font-semibold mb-2">Name *</label><input id={field('name')} {...register('name', { required: 'Name is required' })} className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white" />{errors.name && <p role="alert" className="text-red-400 text-sm mt-1">{errors.name.message}</p>}</div>
      <div><label htmlFor={field('email')} className="block text-white font-semibold mb-2">Email *</label><input id={field('email')} type="email" {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } })} className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white" />{errors.email && <p role="alert" className="text-red-400 text-sm mt-1">{errors.email.message}</p>}</div>
    </div>
    <div className="grid md:grid-cols-2 gap-6 mb-6"><div><label htmlFor={field('phone')} className="block text-white font-semibold mb-2">Phone / WhatsApp</label><input id={field('phone')} {...register('phone')} className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white" /></div>{includeProjectType && <div><label htmlFor={field('projectType')} className="block text-white font-semibold mb-2">Project Type</label><select id={field('projectType')} {...register('projectType')} className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white"><option value="">Select a project type</option><option value="residential">Residential</option><option value="commercial">Commercial</option><option value="hospitality">Hospitality / Tourism</option><option value="remodeling">Remodeling</option><option value="real-estate">Real Estate Services</option><option value="other">Other</option></select></div>}</div>
    <div className="mb-6"><label htmlFor={field('message')} className="block text-white font-semibold mb-2">Message *</label><textarea id={field('message')} rows={5} {...register('message', { required: 'Message is required' })} className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white" />{errors.message && <p role="alert" className="text-red-400 text-sm mt-1">{errors.message.message}</p>}</div>
    {status === 'success' && <p role="status" className="mb-6 text-green-300">Thank you! Your message has been sent.</p>}
    {status === 'error' && <p role="alert" className="mb-6 text-red-300">There was an error sending your message. Please try again.</p>}
    <div className="text-center"><Button type="submit" variant="primary" className="w-full md:w-auto" onClick={() => {}}>{isSubmitting ? 'Sending...' : submitLabel}</Button></div>
  </form>
}
