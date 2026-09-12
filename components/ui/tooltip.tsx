import * as React from 'react'
import { cn } from '@/lib/utils'

interface TooltipContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const TooltipContext = React.createContext<TooltipContextType>({
  open: false,
  setOpen: () => {},
})

export function TooltipProvider({
  children,
}: {
  children: React.ReactNode
  delayDuration?: number
}) {
  return <>{children}</>
}

export function Tooltip({
  children,
  open: controlledOpen,
  onOpenChange,
}: {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen

  const setOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen)
      }
      onOpenChange?.(nextOpen)
    },
    [isControlled, onOpenChange]
  )

  return (
    <TooltipContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-flex">{children}</div>
    </TooltipContext.Provider>
  )
}

export function TooltipTrigger({
  children,
  asChild,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement> & { asChild?: boolean }) {
  const { setOpen } = React.useContext(TooltipContext)

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onMouseEnter: (e: React.MouseEvent) => {
        setOpen(true)
        ;(children.props as any).onMouseEnter?.(e)
      },
      onMouseLeave: (e: React.MouseEvent) => {
        setOpen(false)
        ;(children.props as any).onMouseLeave?.(e)
      },
      onFocus: (e: React.FocusEvent) => {
        setOpen(true)
        ;(children.props as any).onFocus?.(e)
      },
      onBlur: (e: React.FocusEvent) => {
        setOpen(false)
        ;(children.props as any).onBlur?.(e)
      },
    })
  }

  return (
    <div
      className={className}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      {...props}
    >
      {children}
    </div>
  )
}

export const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    side?: 'top' | 'right' | 'bottom' | 'left'
    sideOffset?: number
  }
>(({ className, side = 'top', children, ...props }, ref) => {
  const { open } = React.useContext(TooltipContext)

  if (!open) return null

  const sideClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2.5',
  }

  return (
    <div
      ref={ref}
      className={cn(
        'absolute z-50 whitespace-nowrap rounded-[6px] border border-[#313131] bg-[#141414] px-2.5 py-1 text-xs text-[#ffffff] shadow-lg pointer-events-none transition-opacity duration-150',
        sideClasses[side],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
TooltipContent.displayName = 'TooltipContent'
