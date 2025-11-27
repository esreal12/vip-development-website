import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-300 rounded-sm'
  
  const variants = {
    primary:
      'bg-gold text-black hover:bg-gold-light hover:shadow-lg hover:scale-105',
    secondary:
      'bg-black text-white hover:bg-charcoal hover:shadow-lg hover:scale-105',
    outline:
      'border-2 border-gold text-gold hover:bg-gold hover:text-black hover:shadow-lg hover:scale-105',
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  )
}

