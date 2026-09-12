import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  XMarkIcon, 
  CheckIcon, 
  SparklesIcon, 
  ArrowPathIcon,
  TagIcon
} from '@heroicons/react/24/outline'
import { SectionWrapper } from '@/components/ui/section-wrapper'

interface IndustryExample {
  id: string
  label: string
  badQuestion: {
    prompt: string
    flaw: string
  }
  goodQuestion: {
    prompt: string
    intent: string
    criteria: string[]
  }
}

const industries: IndustryExample[] = [
  {
    id: 'saas',
    label: 'SaaS & Logiciel B2B',
    badQuestion: {
      prompt: '« Parle-moi des fonctionnalités de notre outil X. »',
      flaw: 'Biais de complaisance : le modèle récite votre page d\'accueil sans aucun contexte d\'achat concurrentiel.',
    },
    goodQuestion: {
      prompt: '« Quel logiciel de gestion de projet choisir pour une équipe tech de 25 personnes avec intégration GitHub native ? »',
      intent: 'Intention d\'arbitrage direct (Prospect chaud en phase de comparatif final)',
      criteria: ['Intégration Git', 'Moins de 30€/utilisateur', 'Support européen'],
    },
  },
  {
    id: 'ecommerce',
    label: 'E-commerce & D2C',
    badQuestion: {
      prompt: '« Est-ce que notre marque de maroquinerie est connue ? »',
      flaw: 'Question passive : produit une réponse vague sur la réputation générale sans mesurer la découvrabilité.',
    },
    goodQuestion: {
      prompt: '« Quelles sont les meilleures marques de sacs en cuir écoresponsables fabriqués en France à moins de 300 € ? »',
      intent: 'Intention de sélection transactionnelle par critères d\'achat stricts',
      criteria: ['Cuir tannage végétal', 'Budget < 300€', 'Fabrication locale'],
    },
  },
  {
    id: 'fintech',
    label: 'FinTech & Assurances',
    badQuestion: {
      prompt: '« Que vaut la néobanque Y ? »',
      flaw: 'Avis générique non comparatif : ne révèle pas qui capte les nouveaux comptes professionnels.',
    },
    goodQuestion: {
      prompt: '« Quelle solution de paiement en ligne choisir pour une marketplace multi-devises conforme DSP2 ? »',
      intent: 'Délégation technique critique à fort panier moyen',
      criteria: ['Conformité DSP2', 'Gestion escrow', 'Frais de transaction'],
    },
  },
  {
    id: 'agency',
    label: 'Conseil & Agences',
    badQuestion: {
      prompt: '« Qui est l\'agence Z ? »',
      flaw: 'Ne teste pas l\'émergence spontanée dans les appels d\'offres informels menés sur ChatGPT.',
    },
    goodQuestion: {
      prompt: '« Quelles agences expertes en refonte Shopify Plus recommander pour une marque qui réalise 5M€ de CA ? »',
      intent: 'Appel d\'offres silencieux : l\'acheteur sélectionne sa short-list de 3 agences en 10 secondes.',
      criteria: ['Partenaire Shopify Plus', 'Track-record 5M€+', 'Audit UX'],
    },
  },
]

export function QuestionEngine() {
  const [activeTab, setActiveTab] = useState<string>('saas')
  const current = industries.find((i) => i.id === activeTab) || industries[0]

  return (
    <SectionWrapper className="py-24 border-t border-border-subtle">
      <div className="space-y-12">
        {/* Titre franc et promesse nette */}
        <div className="max-w-3xl">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Les bonnes questions avant les bonnes réponses.
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Une question nombriliste ne mesure rien. Reflet simule les questions précises, 
            nuancées et contextuelles que vos futurs clients posent réellement aux moteurs d'IA.
          </motion.p>
        </div>

        {/* Sélecteur d'industries ($clarify) */}
        <div className="flex flex-wrap gap-2.5 pb-2">
          {industries.map((tab) => {
            const isActive = tab.id === activeTab
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive
                    ? 'bg-brand text-on-brand shadow-lg shadow-brand/20 font-semibold'
                    : 'bg-surface border border-border text-text-secondary hover:text-text-primary hover:border-border-hover'
                  }
                `}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Comparateur interactif d'intentions */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Mauvaise question : Question passive */}
          <div className="p-6 sm:p-8 rounded-xl border border-red-500/20 bg-surface/50 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase text-red-400 bg-red-500/10 px-2.5 py-1 rounded border border-red-500/20">
                  <XMarkIcon className="w-3.5 h-3.5 stroke-[3]" />
                  Question naïve d'auto-évaluation
                </span>
                <span className="text-xs text-text-muted font-mono">Valeur nulle</span>
              </div>

              <div className="p-4 rounded-lg bg-background/80 border border-border/80 text-sm font-mono text-text-muted leading-relaxed">
                {current.badQuestion.prompt}
              </div>

              <div className="space-y-1.5 pt-2">
                <span className="text-xs font-semibold text-red-400/90 block">
                  Pourquoi cette mesure est trompeuse :
                </span>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {current.badQuestion.flaw}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50 text-[11px] font-mono text-text-muted">
              Résultat : 100% de complaisance artificielle · 0 information concurrentielle
            </div>
          </div>

          {/* Bonne question : Question construite par Reflet */}
          <div className="p-6 sm:p-8 rounded-xl border border-brand/40 bg-surface-elevated space-y-5 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Lueur subtile dorée */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase text-brand bg-brand/10 px-2.5 py-1 rounded border border-brand/20">
                  <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                  Question construite par Reflet
                </span>
                <span className="text-xs text-brand-accent font-mono font-semibold">Haute intention</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-lg bg-surface border border-brand/30 text-sm font-mono text-text-primary leading-relaxed shadow-inner"
                >
                  {current.goodQuestion.prompt}
                </motion.div>
              </AnimatePresence>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-semibold text-brand-accent block">
                  Intention détectée :
                </span>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {current.goodQuestion.intent}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {current.goodQuestion.criteria.map((c) => (
                    <span 
                      key={c}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-text-secondary"
                    >
                      ✓ {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/80 text-[11px] font-mono text-brand flex items-center justify-between">
              <span>Mesure sur 30 variantes d'arbitrage</span>
              <span className="font-semibold">Corrélation d'achat : 94%</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
