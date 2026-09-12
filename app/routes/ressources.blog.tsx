import { createFileRoute } from '@tanstack/react-router'
import { MarketingPage } from '@/components/marketing-page'
import { SectionWrapper } from '@/components/ui/section-wrapper'

export const Route = createFileRoute('/ressources/blog')({
  component: BlogPage,
})

function BlogPage() {
  return (
    <MarketingPage
      eyebrow="Ressources"
      title="Blog"
      description="Analyses, retours d'expérience et méthodologie sur la visibilité des marques dans les réponses IA."
    >
      <SectionWrapper className="pb-8">
        <div className="bg-surface border border-border rounded-xl p-8 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-text-primary font-medium">Premiers articles à venir</p>
          <p className="text-text-secondary text-sm">
            Nous publions ici dès que nous avons des résultats terrain à partager.
          </p>
        </div>
      </SectionWrapper>
    </MarketingPage>
  )
}
