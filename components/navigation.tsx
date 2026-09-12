
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const productLinks = [
  { label: "Vue d'ensemble", href: '/produit/vue-ensemble' },
  { label: 'Visibilité IA', href: '/produit/visibilite-ia' },
  { label: 'Questions et mesures', href: '/produit/questions-mesures' },
  { label: 'Preuves et opportunités', href: '/produit/preuves-opportunites' },
  { label: 'Historique du site', href: '/produit/historique' },
]

const resourcesLinks = [
  { label: 'Blog', href: '/ressources/blog' },
  { label: 'Guides', href: '/ressources/guides' },
  { label: 'Études', href: '/ressources/etudes' },
  { label: 'Glossaire', href: '/ressources/glossaire' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
            <Button href="/login" variant="primary" size="sm">
              Commencer
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-primary"
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="max-w-[1280px] mx-auto px-6 py-6 space-y-6">
              <div className="space-y-3">
                <p className="text-caption text-text-muted uppercase tracking-wide">Produit</p>
                {productLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-body text-text-secondary hover:text-text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="space-y-3">
                <p className="text-caption text-text-muted uppercase tracking-wide">Ressources</p>
                {resourcesLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-body text-text-secondary hover:text-text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="space-y-3 pt-3 border-t border-border">
                <a
                  href="#pricing"
                  className="block text-body text-text-secondary hover:text-text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tarifs
                </a>
                <a
                  href="/login"
                  className="block text-body text-text-secondary hover:text-text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Connexion
                </a>
              </div>

              <Button href="/login" variant="primary" size="sm" className="w-full">
                Commencer
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
