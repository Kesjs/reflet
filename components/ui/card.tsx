import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg bg-surface border border-border p-6 transition-colors',
        'hover:border-border-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

export function CardTitle({ children, className, ...props }: CardTitleProps) {
  return (
    <h3 className={cn('text-h3 font-semibold text-text-primary', className)} {...props}>
      {children}
    </h3>
  )
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function CardContent({ children, className, ...props }: CardContentProps) {
  return (
    <div className={cn('text-body text-text-secondary', className)} {...props}>
      {children}
    </div>
  )
}
