import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full px-6 md:px-8 py-16 md:py-24',
        className
      )}
    >
      <div className="max-w-[1280px] mx-auto">
        {children}
      </div>
    </section>
  )
}
