import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  ArrowTrendingUpIcon, 
  SparklesIcon, 
  CodeBracketIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { SectionWrapper } from '@/components/ui/section-wrapper'

const milestones = [
  {
    id: 1,
    date: '02 Septembre',
    title: 'Audit initial de référence',
    event: 'Scan automatique de 30 questions cibles',
    score: 48,
    delta: null,
    status: 'Baseline',
    summary: 'Présence sporadique. Le concurrent historique capte 78% des recommandations.',
  },
  {
    id: 2,
    date: '10 Septembre',
    title: 'Mise à jour détectée : /tarifs & /produit',
    event: 'Reflet détecte la refonte sans déclaration manuelle',
    score: 61,
    delta: '+13 pts',
    status: 'Gain rapide',
    summary: 'Précision accrue : le modèle cite le nouveau pricing transparent dans 14 réponses.',
  },
  {
    id: 3,
    date: '18 Septembre',
    title: 'Publication du comparatif d\'arbitrage',
    event: 'Nouvelle page /alternatives indexée',
    score: 72,
    delta: '+11 pts',
    status: 'Top 2 conquis',
    summary: 'Le modèle intègre les critères discriminants de votre marque face à la concurrence.',
  },
  {
    id: 4,
    date: '28 Septembre',
    title: 'Mesure de consolidation continue',
    event: 'Audit cyclique automatisé',
    score: 78,
    delta: '+6 pts',
    status: '1re position',
    summary: 'Votre marque devient la réponse par défaut sur 19 des 30 requêtes transactionnelles.',
  },
]

export function History() {
  const [selectedMilestone, setSelectedMilestone] = useState(milestones[3])

  return (
    <SectionWrapper className="py-24 border-t border-border-subtle">
      <div className="space-y-16">
        {/* Titre franc */}
        <div className="max-w-3xl">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Votre visibilité n'est pas un chiffre figé.  
            <span className="block text-brand-accent mt-2">
              Elle réagit à chacun de vos déploiements.
            </span>
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Reflet surveille votre site en continu. Dès qu'une modification stratégique est mise en ligne, 
            une nouvelle batterie d'interrogations est lancée pour mesurer l'impact immédiat sur l'IA.
          </motion.p>
        </div>

        {/* Dashboard télémétrique ($bolder) */}
        <div className="rounded-2xl border border-border bg-surface/70 backdrop-blur-sm overflow-hidden shadow-2xl">
          {/* Header des métriques clés */}
          <div className="p-6 sm:p-8 border-b border-border/80 bg-surface-elevated/60 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <span className="text-xs font-mono uppercase text-text-muted block">Score de visibilité</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-bold text-text-primary font-mono">78</span>
                <span className="text-xs font-mono font-semibold text-brand px-1.5 py-0.5 rounded bg-brand/10">
                  +30 pts
                </span>
              </div>
              <span className="text-[11px] text-text-secondary mt-1 block">Sur 30 jours de suivi</span>
            </div>

            <div>
              <span className="text-xs font-mono uppercase text-text-muted block">Mises à jour détectées</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-bold text-text-primary font-mono">4</span>
                <span className="text-xs font-mono text-text-muted">releases</span>
              </div>
              <span className="text-[11px] text-text-secondary mt-1 block">0 saisie manuelle</span>
            </div>

            <div>
              <span className="text-xs font-mono uppercase text-text-muted block">Recommandation #1</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-bold text-brand font-mono">63%</span>
                <span className="text-xs font-mono text-emerald-400">↗ dominant</span>
              </div>
              <span className="text-[11px] text-text-secondary mt-1 block">vs 0% à l'audit initial</span>
            </div>

            <div>
              <span className="text-xs font-mono uppercase text-text-muted block">Rythme d'audit</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-bold text-text-primary font-mono">24/7</span>
                <span className="text-xs font-mono text-brand">actif</span>
              </div>
              <span className="text-[11px] text-text-secondary mt-1 block">Surveillance continue</span>
            </div>
          </div>

          {/* Corps : Progression visuelle & Détail interactif */}
          <div className="p-6 sm:p-8 space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-brand">
                <ClockIcon className="w-4 h-4" />
                <span>CHRONOLOGIE DES CORRÉLATIONS OBSERVÉES</span>
              </div>
              <span className="text-xs text-text-muted font-mono hidden sm:inline">
                Cliquez sur un jalon pour voir le rapport d'impact
              </span>
            </div>

            {/* Stepper horizontal avec jalons de score */}
            <div className="grid sm:grid-cols-4 gap-4">
              {milestones.map((m) => {
                const isSelected = selectedMilestone.id === m.id
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMilestone(m)}
                    className={`
                      text-left p-4 rounded-xl border transition-all duration-200 relative
                      ${isSelected
                        ? 'bg-surface-elevated border-brand shadow-lg shadow-brand/10'
                        : 'bg-surface/40 border-border/80 hover:bg-surface/80 hover:border-border-hover'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between text-xs mb-2 font-mono">
                      <span className="text-text-muted">{m.date}</span>
                      {m.delta && (
                        <span className="text-brand font-bold">{m.delta}</span>
                      )}
                    </div>
                    <div className="text-2xl font-bold font-mono text-text-primary mb-1">
                      Score {m.score}
                    </div>
                    <div className="text-xs font-medium text-text-secondary line-clamp-1">
                      {m.title}
                    </div>
                    {isSelected && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand"
                      />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Fiche d'impact détaillée du jalon sélectionné */}
            <div className="p-6 rounded-xl border border-border bg-surface-elevated/40 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand/10 text-brand border border-brand/20">
                      {selectedMilestone.status}
                    </span>
                    <span className="text-xs text-text-muted font-mono">{selectedMilestone.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-text-primary">
                    {selectedMilestone.title}
                  </h4>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div>
                    <span className="text-xs text-text-muted font-mono block">Score certifié</span>
                    <span className="text-xl font-bold text-brand font-mono">{selectedMilestone.score} / 100</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-2 border-t border-border/60">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-text-muted uppercase">Événement détecté</span>
                  <p className="text-sm text-text-secondary font-mono bg-surface p-2.5 rounded border border-border">
                    {selectedMilestone.event}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-text-muted uppercase">Impact sur les recommandations</span>
                  <p className="text-sm text-text-primary bg-surface p-2.5 rounded border border-border">
                    {selectedMilestone.summary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
