import React, { useState } from 'react'
import { Sparkles, Globe } from 'lucide-react'
import { UserNav } from '@/components/admin-panel/user-nav'
import { SheetMenu } from '@/components/admin-panel/sheet-menu'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface NavbarProps {
  title?: string
}

export function Navbar({ title = 'Vue Cockpit' }: NavbarProps) {
  const [isMeasuring, setIsMeasuring] = useState(false)

  const handleMeasure = () => {
    setIsMeasuring(true)
    setTimeout(() => setIsMeasuring(false), 1500)
  }

  return (
    <header className="sticky top-0 z-10 w-full border-b border-[#313131] bg-[#0a0a0a]/90 backdrop-blur-md select-none">
      <div className="mx-4 sm:mx-6 flex h-14 items-center justify-between">
        {/* Côté gauche : SheetMenu mobile + Breadcrumb */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <SheetMenu />
          <Breadcrumb className="hidden sm:block">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Tableau de bord</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Côté droit : Domaine sous surveillance, Action d'audit, UserNav */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Badge Domaine sous surveillance */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-[#141414] border border-[#313131] text-xs font-mono">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6798ff] opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-[#6798ff]" />
            </span>
            <span className="font-semibold text-[#ffffff]">reflet.dev</span>
            <span className="text-[10px] text-[#7c7c7c] hidden md:inline">
              (30 requêtes actives)
            </span>
          </div>

          {/* Action : Lancer un audit (neutre pour préserver le CTA unique en jaune soufre) */}
          <button
            type="button"
            onClick={handleMeasure}
            disabled={isMeasuring}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] bg-[#141414] hover:bg-[#1e1e1e] border border-[#313131] text-[#ffffff] text-xs font-semibold transition-all shadow-2xs cursor-pointer disabled:opacity-75"
          >
            <Sparkles className="size-3.5 text-[#f2d94e]" />
            <span className="hidden sm:inline">
              {isMeasuring ? 'Mesure en cours...' : 'Nouvel audit'}
            </span>
          </button>

          {/* Profil Avatar Dropdown */}
          <UserNav />
        </div>
      </div>
    </header>
  )
}
