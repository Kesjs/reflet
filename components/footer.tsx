export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Produit */}
          <div>
            <h3 className="text-body font-semibold text-text-primary mb-4">
              Produit
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-body text-text-secondary hover:text-text-primary transition-colors"
                >
                  Vue d'ensemble
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body text-text-secondary hover:text-text-primary transition-colors"
                >
                  Visibilité IA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body text-text-secondary hover:text-text-primary transition-colors"
                >
                  Questions et mesures
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body text-text-secondary hover:text-text-primary transition-colors"
                >
                  Preuves et opportunités
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body text-text-secondary hover:text-text-primary transition-colors"
                >
                  Historique du site
                </a>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-body font-semibold text-text-primary mb-4">
              Ressources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-body text-text-secondary hover:text-text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body text-text-secondary hover:text-text-primary transition-colors"
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body text-text-secondary hover:text-text-primary transition-colors"
                >
                  Études
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body text-text-secondary hover:text-text-primary transition-colors"
                >
                  Glossaire
                </a>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-body font-semibold text-text-primary mb-4">
              Entreprise
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-body text-text-secondary hover:text-text-primary transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body text-text-secondary hover:text-text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body text-text-secondary hover:text-text-primary transition-colors"
                >
                  Carrières
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-body font-semibold text-text-primary mb-4">
              Légal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/mentions-legales"
                  className="text-body text-text-secondary hover:text-text-primary transition-colors"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="/confidentialite"
                  className="text-body text-text-secondary hover:text-text-primary transition-colors"
                >
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a
                  href="/cgu"
                  className="text-body text-text-secondary hover:text-text-primary transition-colors"
                >
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body text-text-secondary hover:text-text-primary transition-colors"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
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
