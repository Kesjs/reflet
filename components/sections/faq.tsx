import { motion } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { SectionTitle } from '@/components/ui/section-title'

const faqs = [
  {
    question: "Qu'est-ce que Reflet mesure exactement ?",
    answer: "Reflet mesure quatre dimensions de votre visibilité dans les réponses générées par ChatGPT : la présence (votre marque est-elle mentionnée ?), la recommandation (est-elle proposée comme solution ?), la position (où apparaît-elle dans les listes ?), et la concurrence (qui apparaît à sa place ?). Chaque mesure s'appuie sur 30 questions personnalisées correspondant à votre contexte métier.",
  },
  {
    question: 'Est-ce que Reflet utilise ChatGPT directement ?',
    answer: "Oui, Reflet interroge directement l'API de ChatGPT avec les questions construites pour votre marque. Les réponses observées sont ensuite analysées pour détecter les mentions, recommandations et positions de votre marque par rapport à vos concurrents.",
  },
  {
    question: 'Pourquoi les réponses peuvent-elles varier ?',
    answer: "Les modèles d'IA génératifs produisent des réponses non déterministes : pour une même question, ChatGPT peut générer des réponses différentes. C'est pourquoi Reflet mesure sur 30 questions et calcule des statistiques agrégées plutôt que de s'appuyer sur une seule réponse.",
  },
  {
    question: 'Comment Reflet choisit-il les questions ?',
    answer: "Reflet analyse le contenu de votre site pour comprendre votre offre, votre marché et votre positionnement. Puis il construit 30 questions que vos prospects pourraient réellement poser, dans leur contexte et avec leurs mots. Vous validez et affinez ces questions avant la première mesure.",
  },
  {
    question: 'Est-ce que Reflet détecte les modifications de mon site ?',
    answer: "Oui, Reflet surveille automatiquement les modifications de votre site (pages créées, modifiées ou supprimées). Lorsqu'un changement important est détecté, une nouvelle mesure est lancée pour vérifier si votre visibilité a évolué.",
  },
  {
    question: 'Est-ce que je dois déclarer chaque modification ?',
    answer: "Non, vous n'avez rien à déclarer. Reflet surveille votre site en continu et détecte automatiquement les changements pertinents. Vous pouvez aussi lancer une mesure manuellement à tout moment si vous le souhaitez.",
  },
  {
    question: 'Reflet garantit-il une position dans ChatGPT ?',
    answer: "Non, Reflet est un outil de mesure et d'analyse, pas une promesse de résultat. Il vous montre où vous en êtes, pourquoi, et ce que vous pouvez améliorer. L'impact réel dépend de la qualité de votre contenu, de votre positionnement et de la cohérence entre ce que vous dites sur votre site et ce que ChatGPT comprend.",
  },
]

export function FAQ() {
  return (
    <SectionWrapper className="py-24">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <SectionTitle variant="h1">Questions fréquentes</SectionTitle>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur Reflet
          </p>
        </div>
        
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-surface border border-border rounded-lg overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-elevated transition-colors group">
                    <span className="text-text-primary font-semibold pr-4">
                      {faq.question}
                    </span>
                    <ChevronDownIcon className="w-5 h-5 text-text-muted transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>
                
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
