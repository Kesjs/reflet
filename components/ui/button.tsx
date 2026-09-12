import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-body font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-brand text-on-brand hover:bg-brand-hover',
        secondary: 'border border-border text-text-primary hover:bg-surface hover:border-border-hover',
      },
      size: {
        default: 'h-12 px-6',
        sm: 'h-10 px-4 text-small',
        lg: 'h-14 px-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export function Button({
  children,
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
}
