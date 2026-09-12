import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mentions-legales')({
  component: MentionsLegalesPage,
})

function MentionsLegalesPage() {
  return (
    <LegalLayout title="Mentions légales">
      <Section title="Éditeur du site">
        <p>
          <strong>Reflet</strong> — [Forme juridique à compléter]<br />
          Siège social : [Adresse à compléter]<br />
          SIRET : [À compléter]<br />
          Directeur de la publication : [Nom à compléter]<br />
          Contact : [email à compléter]
        </p>
        <Note>⚠ Ces informations sont des placeholders — à faire compléter et relire par un juriste avant mise en production.</Note>
      </Section>

      <Section title="Hébergement">
        <p>
          Le site est hébergé par :<br />
          [Hébergeur à compléter — nom, adresse, contact]
        </p>
      </Section>

      <Section title="Propriété intellectuelle">
        <p>
          L'ensemble des contenus présents sur ce site (textes, images, graphiques, logotypes, icônes) sont la propriété exclusive de Reflet, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.
        </p>
      </Section>

      <Section title="Responsabilité">
        <p>
          Reflet s'efforce de maintenir les informations publiées à jour et exactes. Reflet ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site ou de son contenu.
        </p>
      </Section>

      <Section title="Données personnelles">
        <p>
          Pour toute information relative au traitement de vos données personnelles, consultez notre <a href="/confidentialite" className="text-[#f2d94e] hover:underline">Politique de confidentialité</a>.
        </p>
      </Section>
    </LegalLayout>
  )
}

// ─── Composants partagés ──────────────────────────────────────────────────────

function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-12">
        <div className="space-y-4">
          <a href="/" className="text-sm text-[#9a9a9a] hover:text-white transition-colors">
            ← Retour à l'accueil
          </a>
          <h1 className="text-3xl font-semibold text-white">{title}</h1>
          <p className="text-sm text-[#636363]">
            Dernière mise à jour : septembre 2026
          </p>
        </div>
        <div className="space-y-10">
          {children}
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-white border-b border-white/10 pb-2">{title}</h2>
      <div className="text-[#9a9a9a] text-sm leading-relaxed space-y-2">
        {children}
      </div>
    </section>
  )
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-xs text-[#636363] bg-white/5 border border-white/10 rounded-lg px-4 py-3">
      {children}
    </p>
  )
}
