import React from 'react'
import { Link } from '@tanstack/react-router'
import { Menu as MenuIcon, X } from 'lucide-react'
import { Menu } from '@/components/admin-panel/menu'
import { useSidebar } from '@/hooks/use-sidebar'

export function SheetMenu() {
  const { isMobileOpen, setIsMobileOpen, toggleMobile } = useSidebar()

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={toggleMobile}
        className="h-8 w-8 rounded-[6px] border border-[#313131] bg-[#141414] hover:bg-[#1e1e1e] flex items-center justify-center text-[#ffffff] cursor-pointer"
        aria-label="Ouvrir le menu"
      >
        <MenuIcon className="h-4 w-4" />
      </button>

      {isMobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="relative w-72 h-full bg-[#0a0a0a] border-r border-[#313131] p-4 flex flex-col z-50">
            <div className="flex items-center justify-between pb-3 border-b border-[#313131]">
              <Link
                to="/dashboard"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="flex size-7 items-center justify-center rounded-[6px] bg-[#ffffff] text-[#0a0a0a] font-bold text-xs">
                  R
                </div>
                <span className="font-bold text-sm text-[#ffffff]">Reflet</span>
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                className="p-1 rounded-[6px] text-[#7c7c7c] hover:text-[#ffffff] hover:bg-[#1e1e1e] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto mt-2">
              <Menu isOpen={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
