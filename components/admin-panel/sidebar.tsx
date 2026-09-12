import React from 'react'
import { Link } from '@tanstack/react-router'
import { Menu } from '@/components/admin-panel/menu'
import { SidebarToggle } from '@/components/admin-panel/sidebar-toggle'
import { useSidebar } from '@/hooks/use-sidebar'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const { isOpen, toggleOpen, getOpenState, setIsHover } = useSidebar()
  const isExpanded = getOpenState()

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300 bg-[#0a0a0a] border-r border-[#313131] select-none',
        !isExpanded ? 'w-[90px]' : 'w-72'
      )}
    >
      <SidebarToggle isOpen={isOpen} setIsOpen={toggleOpen} />

      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative h-full flex flex-col px-3 py-4 overflow-y-auto"
      >
        {/* Brand Header */}
        <div
          className={cn(
            'flex items-center transition-all ease-in-out duration-300 pb-2 border-b border-[#313131]/60',
            !isExpanded ? 'justify-center' : 'px-2 gap-3'
          )}
        >
          <Link to="/dashboard" className="flex items-center gap-2.5 cursor-pointer">
            <div className="flex size-8 items-center justify-center rounded-[8px] bg-[#ffffff] text-[#0a0a0a] font-bold text-sm shrink-0 shadow-sm">
              R
            </div>
            {isExpanded && (
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 font-bold text-[14px] text-[#ffffff] tracking-tight">
                  <span>Reflet</span>
                  <span className="size-1.5 rounded-full bg-[#6798ff] animate-pulse" />
                </div>
                <span className="text-[10.5px] font-mono text-[#7c7c7c]">GEO Cockpit</span>
              </div>
            )}
          </Link>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto mt-2">
          <Menu isOpen={isExpanded} />
        </div>
      </div>
    </aside>
  )
}
