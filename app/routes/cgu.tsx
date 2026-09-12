import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cgu')({
  component: CguPage,
})

function CguPage() {
  return (
    <LegalLayout title="Conditions générales d'utilisation">
      <Section title="Objet">
        <p>
          Les présentes CGU régissent l'accès et l'utilisation de la plateforme Reflet, service de mesure de visibilité de marques dans les réponses générées par des modèles d'IA (notamment ChatGPT), éditée par [Reflet — forme juridique à compléter].
        </p>
        <Note>⚠ Ces CGU sont des placeholders — à faire rédiger et valider par un juriste avant mise en production.</Note>
      </Section>

      <Section title="Accès au service">
        <p>
          L'accès au service est réservé aux personnes majeures agissant à titre professionnel (B2B). L'utilisateur s'engage à fournir des informations exactes lors de son inscription.
        </p>
      </Section>

      <Section title="Description du service">
        <p>Reflet permet notamment de :</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Analyser la visibilité d'un site web dans les réponses générées par ChatGPT</li>
          <li>Construire et valider un set de questions de mesure</li>
          <li>Suivre l'évolution de la visibilité dans le temps</li>
          <li>Identifier des opportunités d'amélioration de contenu</li>
        </ul>
      </Section>

      <Section title="Tarification et facturation">
        <p>
          Le service est proposé au tarif affiché sur la page Tarifs au moment de l'abonnement. La facturation est mensuelle ou annuelle selon l'option choisie. Tout mois commencé est dû.
        </p>
      </Section>

      <Section title="Obligations de l'utilisateur">
        <ul className="list-disc list-inside space-y-1">
          <li>Ne pas utiliser le service à des fins illicites ou contraires à l'ordre public</li>
          <li>Ne pas tenter de contourner les mécanismes de sécurité</li>
          <li>Ne pas revendre ou redistribuer les données produites par le service sans accord préalable</li>
          <li>Conserver la confidentialité de ses identifiants de connexion</li>
        </ul>
      </Section>

      <Section title="Propriété intellectuelle">
        <p>
          L'ensemble des éléments composant le service (algorithmes, interfaces, rapports) sont la propriété exclusive de Reflet. Les données du site de l'utilisateur restent sa propriété.
        </p>
      </Section>

      <Section title="Limitation de responsabilité">
        <p>
          Reflet est un outil de mesure et d'analyse. Il ne garantit aucun résultat de positionnement dans les réponses IA. La responsabilité de Reflet est limitée au montant des sommes effectivement versées par l'utilisateur au cours des 12 derniers mois.
        </p>
      </Section>

      <Section title="Résiliation">
        <p>
          L'utilisateur peut résilier son abonnement à tout moment depuis son espace compte. La résiliation prend effet à la fin de la période en cours.
        </p>
      </Section>

      <Section title="Droit applicable">
        <p>
          Les présentes CGU sont soumises au droit français. Tout litige sera porté devant les tribunaux compétents de [ville à définir].
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Pour toute question : <a href="mailto:[email]" className="text-[#f2d94e] hover:underline">[email@reflet.fr]</a>
        </p>
      </Section>
    </LegalLayout>
  )
}

function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-12">
        <div className="space-y-4">
          <a href="/" className="text-sm text-[#9a9a9a] hover:text-white transition-colors">
            ← Retour à l'accueil
          </a>
          <h1 className="text-3xl font-semibold text-white">{title}</h1>
          <p className="text-sm text-[#636363]">Dernière mise à jour : septembre 2026</p>
        </div>
        <div className="space-y-10">{children}</div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-white border-b border-white/10 pb-2">{title}</h2>
      <div className="text-[#9a9a9a] text-sm leading-relaxed space-y-2">{children}</div>
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
