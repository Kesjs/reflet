import * as React from 'react'
import { ChevronRight, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Breadcrumb({ className, ...props }: React.ComponentPropsWithoutRef<'nav'>) {
  return <nav aria-label="breadcrumb" className={cn(className)} {...props} />
}

export function BreadcrumbList({ className, ...props }: React.ComponentPropsWithoutRef<'ol'>) {
  return (
    <ol
      className={cn(
        'flex flex-wrap items-center gap-1.5 break-words text-xs text-[#a7a7a7] sm:gap-2.5',
        className
      )}
      {...props}
    />
  )
}

export function BreadcrumbItem({ className, ...props }: React.ComponentPropsWithoutRef<'li'>) {
  return <li className={cn('inline-flex items-center gap-1.5', className)} {...props} />
}

export function BreadcrumbLink({
  asChild,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'a'> & { asChild?: boolean }) {
  return (
    <a
      className={cn('transition-colors hover:text-[#ffffff] cursor-pointer', className)}
      {...props}
    >
      {children}
    </a>
  )
}

export function BreadcrumbPage({ className, ...props }: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('font-semibold text-[#ffffff]', className)}
      {...props}
    />
  )
}

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'li'>) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn('[&>svg]:w-3.5 [&>svg]:h-3.5 text-[#7c7c7c]', className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}
