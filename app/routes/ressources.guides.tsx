import { createFileRoute } from '@tanstack/react-router'
import { MarketingPage } from '@/components/marketing-page'
import { SectionWrapper } from '@/components/ui/section-wrapper'

export const Route = createFileRoute('/ressources/guides')({
  component: GuidesPage,
})

function GuidesPage() {
  return (
    <MarketingPage
      eyebrow="Ressources"
      title="Guides"
      description="Des guides pratiques pour comprendre et améliorer votre visibilité dans les réponses générées par ChatGPT."
    >
      <SectionWrapper className="pb-8">
        <div className="bg-surface border border-border rounded-xl p-8 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-text-primary font-medium">Premiers guides à venir</p>
          <p className="text-text-secondary text-sm">
            En attendant, la section « Comment ça marche » de la page d'accueil couvre les bases.
          </p>
        </div>
      </SectionWrapper>
    </MarketingPage>
  )
}
