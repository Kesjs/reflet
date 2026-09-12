import { createFileRoute } from '@tanstack/react-router'
import { MarketingPage } from '@/components/marketing-page'
import { SectionWrapper } from '@/components/ui/section-wrapper'

export const Route = createFileRoute('/ressources/etudes')({
  component: EtudesPage,
})

function EtudesPage() {
  return (
    <MarketingPage
      eyebrow="Ressources"
      title="Études"
      description="Des mesures agrégées et anonymisées sur la façon dont ChatGPT recommande les marques, secteur par secteur."
    >
      <SectionWrapper className="pb-8">
        <div className="bg-surface border border-border rounded-xl p-8 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-text-primary font-medium">Première étude à venir</p>
          <p className="text-text-secondary text-sm">
            Nous publierons nos premières données une fois un volume de mesures suffisant collecté.
          </p>
        </div>
      </SectionWrapper>
    </MarketingPage>
  )
}
