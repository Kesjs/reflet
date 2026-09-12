import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

interface SidebarContextType {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  toggleOpen: () => void
  isHover: boolean
  setIsHover: (hover: boolean) => void
  getOpenState: () => boolean
  isMobileOpen: boolean
  setIsMobileOpen: (open: boolean) => void
  toggleMobile: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpenState] = useState<boolean>(true)
  const [isHover, setIsHover] = useState<boolean>(false)
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)

  // Lecture initiale depuis localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sidebar_open')
      if (saved !== null) {
        setIsOpenState(saved === 'true')
      }
    } catch {}
  }, [])

  const setIsOpen = useCallback((open: boolean) => {
    setIsOpenState(open)
    try {
      localStorage.setItem('sidebar_open', String(open))
    } catch {}
  }, [])

  const toggleOpen = useCallback(() => {
    setIsOpenState((prev) => {
      const next = !prev
      try {
        localStorage.setItem('sidebar_open', String(next))
      } catch {}
      return next
    })
  }, [])

  const toggleMobile = useCallback(() => {
    setIsMobileOpen((prev) => !prev)
  }, [])

  const getOpenState = useCallback(() => {
    return isOpen || isHover
  }, [isOpen, isHover])

  // Raccourci clavier Ctrl+B / Cmd+B
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault()
        toggleOpen()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleOpen])

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        toggleOpen,
        isHover,
        setIsHover,
        getOpenState,
        isMobileOpen,
        setIsMobileOpen,
        toggleMobile,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar(): SidebarContextType {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}
