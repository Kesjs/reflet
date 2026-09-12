import React from 'react'
import { Navbar } from '@/components/admin-panel/navbar'

interface ContentLayoutProps {
  title: string
  children: React.ReactNode
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <div>
      <Navbar title={title} />
      <div className="pt-6 pb-14 px-4 sm:px-8 max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  )
}
