import * as React from 'react'
import { cn } from '@/lib/utils'

export function Avatar({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full border border-[#313131]', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function AvatarImage({ src, alt, className }: React.ImgHTMLAttributes<HTMLImageElement>) {
  if (!src || src === '#') return null
  return <img src={src} alt={alt || 'Avatar'} className={cn('aspect-square h-full w-full object-cover', className)} />
}

export function AvatarFallback({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-[#1e1e1e] text-[11px] font-bold text-[#ffffff]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
