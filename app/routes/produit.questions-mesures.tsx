import { createFileRoute } from '@tanstack/react-router'
import { MarketingPage } from '@/components/marketing-page'
import { QuestionEngine } from '@/components/sections/question-engine'

export const Route = createFileRoute('/produit/questions-mesures')({
  component: QuestionsMesuresPage,
})

function QuestionsMesuresPage() {
  return (
    <MarketingPage
      eyebrow="Produit"
      title="Les bonnes questions, avant les bonnes réponses."
      description="Reflet construit jusqu'à 30 questions personnalisées, dans les mots de vos prospects, puis les repose régulièrement pour mesurer votre visibilité dans la durée."
    >
      <QuestionEngine />
    </MarketingPage>
  )
}
