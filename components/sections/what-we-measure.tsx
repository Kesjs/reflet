import { motion } from 'framer-motion'
import {
  EyeIcon,
  HandThumbUpIcon,
  ChartBarIcon,
  UsersIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { SonarGrid } from '@/components/ui/sonar-grid'

export function WhatWeMeasure() {
  return (
    <SectionWrapper className="py-24 relative">
      <div className="space-y-14">
        {/* Header de section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-3 py-1 text-xs font-medium text-brand-accent">
            <SparklesIcon className="h-3.5 w-3.5" />
            <span>Dimensions d'analyse Reflet</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-text-primary">
            Ce que Reflet mesure en continu
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Une analyse chirurgicale en 4 dimensions pour évaluer et optimiser votre
            présence dans les réponses de l'IA générative.
          </p>
        </div>

        {/* Bento Grid — Style Features 8 */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6">
          {/* Carte 1 : Radar Sonar en direct (Col span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4 rounded-2xl border border-border bg-surface/70 backdrop-blur-md overflow-hidden relative group hover:border-border-hover transition-colors"
          >
            <SonarGrid
              color="#c9ab1e"
              baseOpacity={0.18}
              spacing={24}
              speed={200}
              pingEvery={2.8}
              className="h-72 sm:h-80 w-full relative flex flex-col justify-between p-6 sm:p-8"
            >
              {/* Badge d'écoute */}
              <div className="flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-text-secondary backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-brand animate-ping" />
                  <span>Sonar d'écoute actif</span>
                </div>
                <span className="text-xs text-text-muted">Cliquez pour émettre une onde</span>
              </div>

              {/* Texte explicatif en bas */}
              <div className="z-10 bg-gradient-to-t from-background/90 via-background/60 to-transparent pt-6 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 px-6 sm:px-8 pb-6">
                <div className="flex items-center gap-2 text-brand-accent">
                  <EyeIcon className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Présence & Détection
                  </span>
                </div>
                <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-text-primary tracking-tight">
                  Surveillance continue des requêtes cibles
                </h3>
                <p className="mt-1 text-sm text-text-secondary max-w-xl">
                  Reflet interroge régulièrement ChatGPT sur vos mots-clés d'intention pour
                  détecter instantanément l'apparition ou la disparition de votre marque.
                </p>
              </div>
            </SonarGrid>
          </motion.div>

          {/* Carte 2 : Taux de recommandation (Col span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 rounded-2xl border border-border bg-surface/70 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-border-hover transition-colors"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-surface-elevated border border-border flex items-center justify-center">
                  <HandThumbUpIcon className="h-5 w-5 text-brand" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-success bg-success/10 px-2.5 py-0.5 rounded-full">
                  <ArrowTrendingUpIcon className="h-3 w-3" /> +12%
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-text-primary tracking-tight">
                Taux de recommandation
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                Être mentionné ne suffit pas : nous mesurons si l'IA vous conseille explicitement comme premier choix.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/70">
              <div className="text-4xl font-bold tracking-tight text-brand-accent">12 / 30</div>
              <div className="text-xs text-text-muted mt-0.5">questions converties en recommandation</div>
            </div>
          </motion.div>

          {/* Carte 3 : Position moyenne (Col span 3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 rounded-2xl border border-border bg-surface/70 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-border-hover transition-colors"
          >
            <div>
              <div className="h-10 w-10 rounded-xl bg-surface-elevated border border-border flex items-center justify-center">
                <ChartBarIcon className="h-5 w-5 text-brand" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-text-primary tracking-tight">
                Positionnement ordinal
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                Lorsque l'IA dresse un comparatif ou une liste de solutions, découvrez votre
                rang exact dans les réponses générées.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/70 flex items-baseline justify-between">
              <div>
                <span className="text-3xl font-bold text-text-primary tracking-tight">Top #2.3</span>
                <span className="text-xs text-text-muted ml-2">rang moyen observé</span>
              </div>
              <span className="text-xs text-brand font-medium">85% en top 3</span>
            </div>
          </motion.div>

          {/* Carte 4 : Pression concurrentielle (Col span 3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3 rounded-2xl border border-border bg-surface/70 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-border-hover transition-colors"
          >
            <div>
              <div className="h-10 w-10 rounded-xl bg-surface-elevated border border-border flex items-center justify-center">
                <UsersIcon className="h-5 w-5 text-brand" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-text-primary tracking-tight">
                Pression concurrentielle
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                Identifiez précisément quels concurrents apparaissent à votre place et quelles
                sources l'IA consulte pour les légitimer.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between text-xs text-text-secondary">
              <span>Concurrents identifiés : <strong className="text-text-primary">3 leaders</strong></span>
              <span className="text-brand hover:underline cursor-pointer">Voir l'audit →</span>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

