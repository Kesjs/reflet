
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const productLinks = [
  { label: "Vue d'ensemble", href: '#' },
  { label: 'Visibilité IA', href: '#' },
  { label: 'Questions et mesures', href: '#' },
  { label: 'Preuves et opportunités', href: '#' },
  { label: 'Historique du site', href: '#' },
]

const resourcesLinks = [
  { label: 'Blog', href: '#' },
  { label: 'Guides', href: '#' },
  { label: 'Études', href: '#' },
  { label: 'Glossaire', href: '#' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="text-h3 font-bold text-text-primary hover:text-brand transition-colors"
          >
            REFLET
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Produit Dropdown */}
            <DropdownMenu
              label="Produit"
              links={productLinks}
              isOpen={openDropdown === 'produit'}
              onToggle={() =>
                setOpenDropdown(openDropdown === 'produit' ? null : 'produit')
              }
              onClose={() => setOpenDropdown(null)}
            />

            {/* Ressources Dropdown */}
            <DropdownMenu
              label="Ressources"
              links={resourcesLinks}
              isOpen={openDropdown === 'ressources'}
              onToggle={() =>
                setOpenDropdown(openDropdown === 'ressources' ? null : 'ressources')
              }
              onClose={() => setOpenDropdown(null)}
            />

            {/* Direct Links */}
            <a
              href="#pricing"
              className="text-body text-text-secondary hover:text-text-primary transition-colors"
            >
              Tarifs
            </a>
            <a
              href="/login"
              className="text-body text-text-secondary hover:text-text-primary transition-colors"
            >
              Connexion
            </a>

            {/* CTA Button */}
            <Button variant="primary" size="sm">
              Commencer
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-primary"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

interface DropdownMenuProps {
  label: string
  links: { label: string; href: string }[]
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

function DropdownMenu({
  label,
  links,
  isOpen,
  onToggle,
  onClose,
}: DropdownMenuProps) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-body text-text-secondary hover:text-text-primary transition-colors"
      >
        {label}
        <ChevronDownIcon
          className={cn(
            'w-4 h-4 transition-transform',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={onClose}
              aria-hidden="true"
            />

            {/* Dropdown Content */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 mt-2 w-56 bg-surface-elevated border border-border rounded-lg shadow-lg z-50 overflow-hidden"
            >
              <div className="py-2">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-2 text-body text-text-secondary hover:text-text-primary hover:bg-surface transition-colors"
                    onClick={onClose}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
