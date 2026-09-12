import { createFileRoute } from '@tanstack/react-router'
import { MarketingPage } from '@/components/marketing-page'
import { Problem } from '@/components/sections/problem'
import { ValueLoop } from '@/components/sections/value-loop'

export const Route = createFileRoute('/produit/vue-ensemble')({
  component: VueEnsemblePage,
})

function VueEnsemblePage() {
  return (
    <MarketingPage
      eyebrow="Produit"
      title="Un instrument de mesure pour votre visibilité IA."
      description="Reflet observe ce que ChatGPT répond réellement à vos prospects, explique pourquoi votre marque apparaît ou non, et vérifie l'effet de vos actions à la mesure suivante."
    >
      <Problem />
      <ValueLoop />
    </MarketingPage>
  )
}
