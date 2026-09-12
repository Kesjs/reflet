import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'

const gridVariants = cva('grid gap-6', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    },
  },
  defaultVariants: {
    cols: 3,
  },
})

interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  children: ReactNode
}

export function Grid({ children, cols, className, ...props }: GridProps) {
  return (
    <div className={cn(gridVariants({ cols }), className)} {...props}>
      {children}
    </div>
  )
}
