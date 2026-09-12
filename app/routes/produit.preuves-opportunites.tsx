import { createFileRoute } from '@tanstack/react-router'
import { MarketingPage } from '@/components/marketing-page'
import { Evidence } from '@/components/sections/evidence'

export const Route = createFileRoute('/produit/preuves-opportunites')({
  component: PreuvesOpportunitesPage,
})

function PreuvesOpportunitesPage() {
  return (
    <MarketingPage
      eyebrow="Produit"
      title="Chaque résultat, remonté jusqu'à sa preuve."
      description="Reflet relie chaque réponse observée à la question posée, au contenu de votre site et au constat qui explique le résultat — pour que chaque opportunité d'amélioration soit justifiée, jamais devinée."
    >
      <Evidence />
    </MarketingPage>
  )
}
