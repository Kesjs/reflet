import { createFileRoute } from '@tanstack/react-router'
import { MarketingPage } from '@/components/marketing-page'
import { WhatWeMeasure } from '@/components/sections/what-we-measure'

export const Route = createFileRoute('/produit/visibilite-ia')({
  component: VisibiliteIaPage,
})

function VisibiliteIaPage() {
  return (
    <MarketingPage
      eyebrow="Produit"
      title="La visibilité IA, mesurée précisément."
      description="Être visible dans ChatGPT ne se résume pas à être cité une fois. Reflet suit quatre dimensions pour donner une image fidèle de votre position."
    >
      <WhatWeMeasure />
    </MarketingPage>
  )
}
