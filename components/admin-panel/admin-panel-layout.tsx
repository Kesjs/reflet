import React from 'react'
import { Sidebar } from '@/components/admin-panel/sidebar'
import { useSidebar } from '@/hooks/use-sidebar'
import { cn } from '@/lib/utils'

export function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const { getOpenState } = useSidebar()
  const isExpanded = getOpenState()

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Sidebar />
      <main
        className={cn(
          'min-h-screen bg-[#0a0a0a] text-white transition-[margin-left] ease-in-out duration-300',
          !isExpanded ? 'lg:ml-[90px]' : 'lg:ml-72'
        )}
      >
        {children}
      </main>
    </div>
  )
}
