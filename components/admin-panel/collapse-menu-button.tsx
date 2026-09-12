import React, { useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { ChevronDown, Dot, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

type Submenu = {
  href: string
  label: string
  active?: boolean
}

interface CollapseMenuButtonProps {
  icon: LucideIcon
  label: string
  active: boolean
  submenus: Submenu[]
  isOpen: boolean | undefined
}

export function CollapseMenuButton({
  icon: Icon,
  label,
  active,
  submenus,
  isOpen,
}: CollapseMenuButtonProps) {
  const location = useLocation()
  const pathname = location.pathname

  const isSubmenuActive = submenus.some((submenu) =>
    submenu.active === undefined ? submenu.href === pathname : submenu.active
  )
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive || active)

  return isOpen ? (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={cn(
          'w-full flex items-center justify-between h-10 px-3 rounded-[8px] text-[13px] font-medium transition-colors cursor-pointer',
          isSubmenuActive || active
            ? 'bg-[#1e1e1e] text-[#ffffff] font-semibold'
            : 'text-[#a7a7a7] hover:bg-[#141414] hover:text-[#ffffff]'
        )}
      >
        <div className="flex items-center min-w-0">
          <Icon className="size-4 shrink-0 mr-3 text-[#a7a7a7]" />
          <span className="truncate max-w-[160px]">{label}</span>
        </div>
        <ChevronDown
          className={cn(
            'size-3.5 shrink-0 transition-transform duration-200 text-[#7c7c7c]',
            isCollapsed && 'rotate-180'
          )}
        />
      </button>

      {isCollapsed && (
        <div className="ml-4 pl-3 border-l border-[#313131] space-y-1 mt-1">
          {submenus.map(({ href, label, active }, index) => {
            const isItemActive = active === undefined ? pathname === href : active
            return (
              <Link
                key={index}
                to={href}
                className={cn(
                  'flex items-center h-8 px-2 rounded-[6px] text-[12.5px] transition-colors cursor-pointer',
                  isItemActive
                    ? 'bg-[#6798ff]/10 text-[#6798ff] font-semibold'
                    : 'text-[#a7a7a7] hover:bg-[#1e1e1e] hover:text-[#ffffff]'
                )}
              >
                <Dot className="size-4 -ml-1 mr-1.5 text-[#7c7c7c]" />
                <span className="truncate">{label}</span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  ) : (
    <DropdownMenu>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={cn(
                  'w-full flex items-center justify-center h-10 rounded-[8px] transition-colors cursor-pointer',
                  isSubmenuActive || active
                    ? 'bg-[#1e1e1e] text-[#ffffff]'
                    : 'text-[#a7a7a7] hover:bg-[#141414] hover:text-[#ffffff]'
                )}
              >
                <Icon className="size-4" />
              </button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="right" align="start">
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent side="right" sideOffset={14} align="start" className="w-48 bg-[#141414] border-[#313131]">
        <DropdownMenuLabel className="text-xs text-[#a7a7a7] font-semibold">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {submenus.map(({ href, label, active }, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link
              to={href}
              className={cn(
                'cursor-pointer text-xs',
                ((active === undefined && pathname === href) || active) &&
                  'bg-[#1e1e1e] text-[#6798ff] font-semibold'
              )}
            >
              <span>{label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
