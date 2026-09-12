import { SparklesIcon } from '@heroicons/react/24/outline'

const productLinks = [
  { label: "Vue d'ensemble", href: '/produit/vue-ensemble' },
  { label: 'Visibilité IA & GEO', href: '/produit/visibilite-ia' },
  { label: 'Moteur de 30 questions', href: '/produit/questions-mesures' },
  { label: 'Preuves & Captures de citations', href: '/produit/preuves-opportunites' },
  { label: 'Télémétrie d\'évolution', href: '/produit/historique' },
]

const resourcesLinks = [
  { label: 'Guide complet du GEO 2026', href: '/ressources/guides' },
  { label: 'Étude d\'éviction concurrentielle', href: '/ressources/etudes' },
  { label: 'Comment ChatGPT choisit ses sources', href: '/ressources/blog' },
  { label: 'Glossaire Search Génératif', href: '/ressources/glossaire' },
]

const companyLinks = [
  { label: 'Manifeste Reflet', href: '#' },
  { label: 'Méthodologie d\'audit', href: '#' },
  { label: 'Sécurité & Données', href: '#' },
  { label: 'Contact', href: '#' },
]

const legalLinks = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/confidentialite' },
  { label: "Conditions d'utilisation", href: '/cgu' },
  { label: 'Gestion des cookies', href: '#' },
]

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-text-primary tracking-wide mb-4 font-mono uppercase">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-16">
        {/* Ligne d'en-tête du Footer avec statut des moteurs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 mb-12 border-b border-border/80">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand font-mono text-xs font-bold text-on-brand shadow-sm">
                R
              </span>
              <span className="text-lg font-bold tracking-tight text-text-primary">
                Reflet
              </span>
            </div>
            <p className="text-xs text-text-muted max-w-sm">
              L'observatoire indépendant de votre visibilité dans les moteurs de réponse d'intelligence artificielle.
            </p>
          </div>

          {/* Badge télémétrique opérationnel */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-surface-elevated border border-border text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-text-secondary">
              Moteurs audités : <strong className="text-text-primary font-medium">ChatGPT-4o · Perplexity · Claude</strong>
            </span>
          </div>
        </div>

        {/* Grille de liens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <FooterColumn title="Produit" links={productLinks} />
          <FooterColumn title="Ressources" links={resourcesLinks} />
          <FooterColumn title="Plateforme" links={companyLinks} />
          <FooterColumn title="Légal" links={legalLinks} />
        </div>

        {/* Ligne basse de copyright */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© 2026 Reflet Analytics Inc. — Tous droits réservés.</p>
          <p className="font-mono">Mesurer. Comprendre. S'imposer.</p>
        </div>
      </div>
    </footer>
  )
}
