'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from './Button'

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  telephone: z.string().min(7, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Please enter a message of at least 10 characters'),
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded bg-[#AFE5E6]/20 border border-[#AFE5E6] p-8 text-center">
        <div className="mb-3 text-4xl">✦</div>
        <h3 className="mb-2 font-serif text-xl font-bold text-[#332727]">
          Thank You!
        </h3>
        <p className="text-gray-600">
          Your message has been sent. Gail will be in touch with you shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm text-[#332727] underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#332727]">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          {...register('name')}
          className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-[#332727] outline-none transition-colors focus:border-[#AFE5E6] focus:ring-1 focus:ring-[#AFE5E6]"
          placeholder="Jane Smith"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#332727]">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register('email')}
          className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-[#332727] outline-none transition-colors focus:border-[#AFE5E6] focus:ring-1 focus:ring-[#AFE5E6]"
          placeholder="jane@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Telephone */}
      <div>
        <label htmlFor="telephone" className="mb-1.5 block text-sm font-medium text-[#332727]">
          Telephone <span className="text-red-500">*</span>
        </label>
        <input
          id="telephone"
          type="tel"
          autoComplete="tel"
          {...register('telephone')}
          className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-[#332727] outline-none transition-colors focus:border-[#AFE5E6] focus:ring-1 focus:ring-[#AFE5E6]"
          placeholder="07700 000000"
        />
        {errors.telephone && (
          <p className="mt-1 text-xs text-red-500">{errors.telephone.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#332727]">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message')}
          className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-[#332727] outline-none transition-colors focus:border-[#AFE5E6] focus:ring-1 focus:ring-[#AFE5E6] resize-none"
          placeholder="Tell us about your event..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {status === 'error' && (
        <p className="rounded border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          Something went wrong. Please try again or email us directly at{' '}
          <a href="mailto:gail@eleanorgail.co.uk" className="underline">
            gail@eleanorgail.co.uk
          </a>
          .
        </p>
      )}

      <Button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
