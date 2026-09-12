import { createFileRoute } from '@tanstack/react-router'
import { MarketingPage } from '@/components/marketing-page'
import { SectionWrapper } from '@/components/ui/section-wrapper'

export const Route = createFileRoute('/ressources/glossaire')({
  component: GlossairePage,
})

const terms = [
  {
    term: 'Visibilité IA',
    definition:
      "La fréquence et la qualité avec lesquelles une marque apparaît dans les réponses générées par un modèle d'IA conversationnel (ex. ChatGPT), sur des questions pertinentes pour son marché.",
  },
  {
    term: 'GEO (Generative Engine Optimization)',
    definition:
      "L'ensemble des pratiques visant à améliorer la manière dont un site ou une marque est compris, cité et recommandé par les moteurs de réponse IA — l'équivalent du SEO pour les réponses générées plutôt que pour les liens classés.",
  },
  {
    term: 'Score de visibilité',
    definition:
      "Un indicateur composite, calculé par Reflet, qui résume la présence, la recommandation et la position d'une marque sur l'ensemble des questions mesurées.",
  },
  {
    term: 'Mention',
    definition: "Le fait qu'une marque soit citée dans une réponse générée, sans que cela implique une recommandation explicite.",
  },
  {
    term: 'Recommandation',
    definition:
      "Le fait qu'une marque soit proposée comme solution ou conseillée dans une réponse générée, au-delà d'une simple mention.",
  },
  {
    term: 'Position',
    definition: "Le rang auquel une marque apparaît lorsque la réponse générée prend la forme d'une liste ou d'un classement.",
  },
  {
    term: 'Question de mesure',
    definition:
      'Une question formulée dans les mots réels des prospects, utilisée pour interroger le modèle et observer si et comment une marque y apparaît.',
  },
  {
    term: 'Preuve',
    definition:
      "L'élément de contenu du site (page, paragraphe, donnée) qui explique pourquoi un modèle d'IA a mentionné, recommandé ou ignoré une marque dans sa réponse.",
  },
]

function GlossairePage() {
  return (
    <MarketingPage
      eyebrow="Ressources"
      title="Glossaire"
      description="Les termes utilisés par Reflet pour parler de visibilité dans les réponses IA."
    >
      <SectionWrapper className="pb-8">
        <div className="max-w-2xl mx-auto divide-y divide-border">
          {terms.map((t) => (
            <div key={t.term} className="py-6 space-y-2">
              <h3 className="text-h3 font-semibold text-text-primary">{t.term}</h3>
              <p className="text-text-secondary leading-relaxed">{t.definition}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </MarketingPage>
  )
}
