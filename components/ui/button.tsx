import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

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

interface ButtonAsButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
  href?: undefined
}

interface ButtonAsAnchorProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
  href: string
}

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps

export function Button({
  children,
  variant,
  size,
  className,
  href,
  ...props
}: ButtonProps) {
  // Rendered as a link when `href` is provided, so CTAs actually navigate
  // instead of being inert <button> elements.
  if (href) {
    return (
      <a
        href={href}
        className={cn(buttonVariants({ variant, size }), className)}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
