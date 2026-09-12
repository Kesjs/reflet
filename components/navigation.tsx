import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDownIcon,
  ChartBarIcon,
  EyeIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  ClockIcon,
  BookOpenIcon,
  AcademicCapIcon,
  BookmarkSquareIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const productLinks = [
  {
    label: "Vue d'ensemble",
    href: '/produit/vue-ensemble',
    desc: 'Tableau de bord central et synthèse des indicateurs',
    icon: ChartBarIcon,
  },
  {
    label: 'Visibilité IA',
    href: '/produit/visibilite-ia',
    desc: 'Détection de présence et taux de recommandation',
    icon: EyeIcon,
  },
  {
    label: 'Questions et mesures',
    href: '/produit/questions-mesures',
    desc: 'Surveillance ciblée de 30 requêtes stratégiques',
    icon: QuestionMarkCircleIcon,
  },
  {
    label: 'Preuves et opportunités',
    href: '/produit/preuves-opportunites',
    desc: 'Citations réelles et leviers pour passer premier',
    icon: SparklesIcon,
  },
  {
    label: 'Historique du site',
    href: '/produit/historique',
    desc: "Suivi de l'évolution du score dans le temps",
    icon: ClockIcon,
  },
]

const resourcesLinks = [
  {
    label: 'Blog',
    href: '/ressources/blog',
    desc: 'Analyses et actualités sur la recherche générative',
    icon: DocumentTextIcon,
  },
  {
    label: 'Guides',
    href: '/ressources/guides',
    desc: 'Méthodologies pour optimiser vos citations dans les LLM',
    icon: BookOpenIcon,
  },
  {
    label: 'Études',
    href: '/ressources/etudes',
    desc: "Rapports sectoriels sur l'impact de l'IA sur le trafic",
    icon: AcademicCapIcon,
  },
  {
    label: 'Glossaire',
    href: '/ressources/glossaire',
    desc: 'Tout le vocabulaire du GEO et du marketing IA',
    icon: BookmarkSquareIcon,
  },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
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
          ? 'bg-background/85 backdrop-blur-md border-b border-border/80 shadow-lg shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="text-h3 font-bold text-text-primary hover:text-brand transition-colors tracking-tight flex items-center gap-2"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-brand" />
            REFLET
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Produit Dropdown avec Hover */}
            <DropdownMenu label="Produit" items={productLinks} width="w-80" />

            {/* Ressources Dropdown avec Hover */}
            <DropdownMenu label="Ressources" items={resourcesLinks} width="w-80" />

            {/* Direct Links */}
            <a
              href="#pricing"
              className="text-body text-text-secondary hover:text-text-primary transition-colors"
            >
              Tarifs
            </a>
            <a
              href="/dashboard"
              className="text-body text-text-secondary hover:text-brand-accent transition-colors font-medium"
            >
              Cockpit
            </a>
            <a
              href="/login"
              className="text-body text-text-secondary hover:text-text-primary transition-colors"
            >
              Connexion
            </a>

            {/* CTA Button */}
            <Button href="/login" variant="primary" size="sm" className="shadow-md shadow-brand/15">
              Commencer
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="max-w-[1280px] mx-auto px-6 py-6 space-y-6">
              <div className="space-y-3">
                <p className="text-caption text-brand-accent uppercase tracking-wider font-semibold">
                  Produit
                </p>
                {productLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-3 py-1.5 text-body text-text-secondary hover:text-text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <link.icon className="h-4 w-4 text-brand" />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>

              <div className="space-y-3">
                <p className="text-caption text-brand-accent uppercase tracking-wider font-semibold">
                  Ressources
                </p>
                {resourcesLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-3 py-1.5 text-body text-text-secondary hover:text-text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <link.icon className="h-4 w-4 text-brand" />
                    <span>{link.label}</span>
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
                  href="/dashboard"
                  className="block text-body text-brand-accent font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Cockpit
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

interface DropdownItem {
  label: string
  href: string
  desc: string
  icon: React.ComponentType<{ className?: string }>
}

interface DropdownMenuProps {
  label: string
  items: DropdownItem[]
  width?: string
}

function DropdownMenu({ label, items, width = 'w-80' }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  return (
    <div
      className="relative py-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-body text-text-secondary hover:text-text-primary transition-colors group focus:outline-none"
      >
        <span>{label}</span>
        <ChevronDownIcon
          className={cn(
            'w-3.5 h-3.5 transition-transform duration-200 text-text-muted group-hover:text-text-primary',
            isOpen && 'rotate-180 text-brand-accent'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              'absolute top-full -left-4 z-50 p-2',
              width
            )}
          >
            <div className="rounded-2xl border border-border/80 bg-surface/95 backdrop-blur-2xl p-2.5 shadow-2xl shadow-black/80 space-y-1">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-surface-elevated/90 hover:border-border/50 border border-transparent"
                >
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 bg-surface-elevated text-text-secondary group-hover:border-brand/40 group-hover:text-brand-accent group-hover:bg-brand/10 transition-colors flex-shrink-0">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-text-primary group-hover:text-brand-accent transition-colors flex items-center justify-between">
                      <span>{item.label}</span>
                      <span className="text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </div>
                    <p className="text-xs text-text-muted mt-0.5 line-clamp-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
