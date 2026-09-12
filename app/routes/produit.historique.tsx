import { createFileRoute } from '@tanstack/react-router'
import { MarketingPage } from '@/components/marketing-page'
import { History } from '@/components/sections/history'

export const Route = createFileRoute('/produit/historique')({
  component: HistoriquePage,
})

function HistoriquePage() {
  return (
    <MarketingPage
      eyebrow="Produit"
      title="Chaque mesure, replacée dans son contexte."
      description="Reflet suit vos mesures de visibilité et les modifications de votre site sur une même chronologie, pour que vous sachiez toujours quelle action a produit quel effet."
    >
      <History />
    </MarketingPage>
  )
}
