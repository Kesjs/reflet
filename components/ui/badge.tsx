import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'

const badgeVariants = cva(
  'inline-flex items-center rounded-sm px-3 py-1 text-small font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-brand/10 text-brand border border-brand/20',
        outline: 'border border-border text-text-secondary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  children: ReactNode
}

export function Badge({ children, variant, className, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  )
}
