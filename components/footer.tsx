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

const companyLinks = [
  { label: 'À propos', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Carrières', href: '#' },
]

const legalLinks = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/confidentialite' },
  { label: "Conditions d'utilisation", href: '/cgu' },
  { label: 'Cookies', href: '#' },
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
      <h3 className="text-body font-semibold text-text-primary mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-body text-text-secondary hover:text-text-primary transition-colors"
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
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <FooterColumn title="Produit" links={productLinks} />
          <FooterColumn title="Ressources" links={resourcesLinks} />
          <FooterColumn title="Entreprise" links={companyLinks} />
          <FooterColumn title="Légal" links={legalLinks} />
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-border">
          <p className="text-body text-text-muted text-center">
            © 2026 Reflet — Mesurer. Comprendre. Améliorer.
          </p>
        </div>
      </div>
    </footer>
  )
}
