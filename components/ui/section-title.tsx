import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const titleVariants = cva('font-bold text-text-primary', {
  variants: {
    variant: {
      h1: 'text-h1',
      h2: 'text-h2',
      h3: 'text-h3',
      display: 'text-display',
    },
  },
  defaultVariants: {
    variant: 'h2',
  },
})

interface SectionTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionTitle({
  children,
  variant,
  as,
  className,
  ...props
}: SectionTitleProps) {
  const Component = as || 'h2'

  return (
    <Component className={cn(titleVariants({ variant }), className)} {...props}>
      {children}
    </Component>
  )
}
