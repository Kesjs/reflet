import React from 'react'
import { ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarToggleProps {
  isOpen: boolean | undefined
  setIsOpen?: () => void
}

export function SidebarToggle({ isOpen, setIsOpen }: SidebarToggleProps) {
  return (
    <div className="invisible lg:visible absolute top-[18px] -right-[14px] z-20">
      <button
        type="button"
        onClick={() => setIsOpen?.()}
        className="rounded-full w-7 h-7 bg-[#141414] hover:bg-[#1e1e1e] border border-[#313131] text-[#ffffff] flex items-center justify-center shadow-md transition-colors cursor-pointer"
        title={isOpen ? 'Réduire la barre latérale' : 'Développer la barre latérale'}
      >
        <ChevronLeft
          className={cn(
            'h-3.5 w-3.5 transition-transform ease-in-out duration-300',
            isOpen === false ? 'rotate-180' : 'rotate-0'
          )}
        />
      </button>
    </div>
  )
}
