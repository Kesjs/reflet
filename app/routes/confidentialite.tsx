import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/confidentialite')({
  component: ConfidentialitePage,
})

function ConfidentialitePage() {
  return (
    <LegalLayout title="Politique de confidentialité">
      <Section title="Responsable du traitement">
        <p>
          Reflet — [Forme juridique et adresse à compléter].<br />
          Contact DPO / référent RGPD : [email à compléter]
        </p>
        <Note>⚠ Placeholders à compléter et faire valider par un juriste avant mise en production.</Note>
      </Section>

      <Section title="Données collectées">
        <p>Reflet collecte les données suivantes :</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Email (identification et authentification)</li>
          <li>URL du site web analysé</li>
          <li>Données de mesure de visibilité (score, réponses observées, historique)</li>
          <li>Données de navigation (logs techniques, adresse IP)</li>
        </ul>
      </Section>

      <Section title="Finalités du traitement">
        <ul className="list-disc list-inside space-y-1">
          <li>Fourniture du service de mesure de visibilité</li>
          <li>Authentification et gestion du compte</li>
          <li>Amélioration du service</li>
          <li>Communication transactionnelle (codes OTP, notifications de mesure)</li>
        </ul>
      </Section>

      <Section title="Base légale">
        <p>
          Le traitement de vos données est fondé sur l'exécution du contrat (CGU) et, le cas échéant, votre consentement pour les communications optionnelles.
        </p>
      </Section>

      <Section title="Conservation des données">
        <p>
          Les données sont conservées pendant la durée de la relation contractuelle, puis [durée à définir] après la résiliation du compte, sauf obligation légale contraire.
        </p>
      </Section>

      <Section title="Destinataires">
        <p>
          Vos données peuvent être transmises aux sous-traitants suivants dans le cadre du service :<br />
          [Supabase — hébergement BDD et authentification] · [OpenAI — API ChatGPT pour les mesures] · [À compléter]
        </p>
      </Section>

      <Section title="Vos droits (RGPD)">
        <p>
          Vous disposez d'un droit d'accès, de rectification, d'effacement, de portabilité et d'opposition sur vos données.<br />
          Pour exercer ces droits : <a href="mailto:[email]" className="text-[#f2d94e] hover:underline">[email@reflet.fr]</a>.<br />
          Vous pouvez également saisir la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#f2d94e] hover:underline">CNIL</a>.
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
