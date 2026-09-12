import { motion } from 'framer-motion'
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckCircleIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { SonarGrid } from '@/components/ui/sonar-grid'

export function Hero() {
  return (
    <SonarGrid
      color="#c9ab1e"
      baseOpacity={0.16}
      spacing={30}
      speed={220}
      pingEvery={3.5}
      className="relative w-full overflow-hidden bg-dashed px-4 pt-32 pb-20 sm:px-8 sm:pt-36 sm:pb-28"
    >
      {/* Halo de dégradé en bas à droite — Couleur Reflet (Jaune soufre / Ambre) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="pointer-events-none absolute right-0 bottom-0 -z-10 translate-x-1/3 translate-y-1/3 w-[680px] h-[680px] rounded-full blur-[140px] select-none"
        style={{
          background:
            'radial-gradient(circle, rgba(201, 171, 30, 0.32) 0%, rgba(242, 217, 78, 0.16) 40%, rgba(176, 107, 28, 0.08) 65%, transparent 80%)',
        }}
        aria-hidden="true"
      />


      {/* Halo subtil supérieur pour le contraste */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -z-10 -translate-x-1/2 w-[520px] h-[260px] rounded-full blur-[120px] opacity-20"
        style={{
          background: 'radial-gradient(ellipse, rgba(242, 217, 78, 0.25) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl flex flex-col items-center justify-center text-center">
        {/* Badge d'annonce épuré — sans point clignotant */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <a
            href="/produit/visibilite-ia"
            className="group inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface/80 px-4 py-1.5 text-xs text-text-secondary backdrop-blur-md transition-colors hover:border-border-hover hover:bg-surface hover:text-text-primary"
          >
            <span>L'audit de référence pour les moteurs de réponse IA</span>
            <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-rotate-12 group-hover:text-brand-accent" />
          </a>
        </motion.div>

        {/* Titre principal strictement sur 2 lignes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-6xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-text-primary leading-[1.2]">
            <span className="block md:whitespace-nowrap">
              Mesurez la visibilité de votre marque
            </span>
            <span className="block mt-1 sm:mt-2 md:whitespace-nowrap">
              dans les recommandations de{' '}
              <span className="relative inline-flex items-center align-baseline px-2.5 sm:px-3 py-0.5 rounded-lg border border-brand/40 bg-surface-elevated/90 shadow-inner overflow-hidden group/badge">
                {/* Rayures obliques stylisées */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,#c9ab1e,#c9ab1e_2px,transparent_2px,transparent_8px)] group-hover/badge:opacity-40 transition-opacity"
                />
                <span className="relative font-bold text-brand-accent tracking-wide">
                  ChatGPT
                </span>
              </span>
              .
            </span>
          </h1>
        </motion.div>

        {/* Sous-titre harmonisé sans répétition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-text-secondary md:text-xl leading-relaxed tracking-tight"
        >
          Reflet simule les questions réelles de vos prospects, analyse les réponses
          générées et vous révèle qui prend votre place pour vous hisser en première position.
        </motion.p>

        {/* Double boutons d'action (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto justify-center"
        >
          <Button
            href="/login"
            size="lg"
            className="group w-full sm:w-auto gap-2 bg-brand text-on-brand font-medium hover:bg-brand-hover shadow-lg shadow-brand/15"
          >
            <span>Analyser mon site</span>
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            href="/produit/vue-ensemble"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto gap-2 border-border bg-surface/70 hover:bg-surface text-text-primary backdrop-blur-sm"
          >
            <span>Voir le produit</span>
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-rotate-12" />
          </Button>
        </motion.div>

        {/* Éléments de réassurance */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-text-muted"
        >
          <CheckCircleIcon className="h-4 w-4 text-brand" />
          <span>1 site inclus · jusqu'à 30 questions ciblées · mesure continue sans configuration</span>
        </motion.p>

        {/* Mockup ChatGPT immersif — Nouvelle Dimension */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-12 w-full max-w-4xl"
        >
          {/* Lueur dorée d'accentuation sous le mockup */}
          <div
            className="pointer-events-none absolute -inset-1 rounded-2xl opacity-35 blur-2xl -z-10"
            style={{
              background:
                'radial-gradient(circle at 50% 0%, rgba(201, 171, 30, 0.3) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="overflow-hidden rounded-2xl border border-border bg-surface/90 backdrop-blur-2xl shadow-2xl text-left">
            {/* Barre supérieure style ChatGPT Desktop / Web */}
            <div className="flex items-center justify-between border-b border-border/80 px-4 py-3 bg-surface-elevated/70">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ef4444]/60 border border-white/10" />
                  <span className="h-3 w-3 rounded-full bg-[#eab308]/60 border border-white/10" />
                  <span className="h-3 w-3 rounded-full bg-[#22c55e]/60 border border-white/10" />
                </div>
                <div className="h-4 w-px bg-border mx-1" />
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <div className="h-5 w-5 rounded-md bg-[#10a37f]/20 text-[#10a37f] flex items-center justify-center font-bold text-[10px]">
                    GPT
                  </div>
                  <span className="font-medium text-text-primary">ChatGPT 4o</span>
                  <span className="rounded bg-brand/15 px-1.5 py-0.5 text-[10px] font-medium text-brand-accent border border-brand/30">
                    Search IA Connecté
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span className="text-text-muted text-[11px]">Audit en direct</span>
              </div>
            </div>

            {/* Conversation ChatGPT interactive */}
            <div className="p-5 sm:p-7 space-y-6">
              {/* Bulle Utilisateur (Prompt) */}
              <div className="flex items-start gap-3 max-w-xl ml-auto justify-end">
                <div className="rounded-2xl rounded-tr-sm bg-surface-elevated border border-border px-4 py-3 text-sm text-text-primary shadow-sm">
                  « Quel est le meilleur logiciel de facturation et de gestion pour une PME en 2026 ? »
                </div>
                <div className="h-8 w-8 rounded-full bg-brand/20 border border-brand/40 text-brand flex items-center justify-center text-xs font-semibold flex-shrink-0">
                  VP
                </div>
              </div>

              {/* Bulle ChatGPT (Réponse avec citation et classement) */}
              <div className="flex items-start gap-3 max-w-2xl">
                <div className="h-8 w-8 rounded-full bg-[#10a37f] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-md">
                  GPT
                </div>

                <div className="space-y-4 flex-1">
                  <div className="rounded-2xl rounded-tl-sm bg-background/80 border border-border/80 p-5 text-sm text-text-secondary shadow-sm space-y-3">
                    <p className="text-text-primary">
                      Pour une PME recherchant une solution conforme et automatisée, voici les acteurs recommandés :
                    </p>

                    <div className="space-y-2.5">
                      {/* Votre Marque — 1ère recommandation */}
                      <div className="rounded-xl border border-brand/50 bg-brand/10 p-3 flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-brand-accent">1. Votre Marque</span>
                            <span className="rounded bg-brand text-on-brand text-[10px] font-bold px-2 py-0.5">
                              1ère Recommandation
                            </span>
                          </div>
                          <p className="text-xs text-text-secondary mt-1">
                            « Choix n°1 : interface moderne, facturation électronique obligatoire 2026 intégrée et support réactif. »
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="text-xs font-semibold text-success">Score 72/100</span>
                          <div className="text-[10px] text-text-muted">Top 1</div>
                        </div>
                      </div>

                      {/* Concurrent A */}
                      <div className="rounded-xl border border-border/60 bg-surface/50 p-3 flex items-start justify-between gap-3 text-text-muted">
                        <div>
                          <span className="text-sm font-medium text-text-secondary">2. Concurrent Historique A</span>
                          <p className="text-xs text-text-muted mt-0.5">
                            « Solution robuste mais interface plus complexe pour les équipes non-comptables. »
                          </p>
                        </div>
                        <span className="text-xs text-text-muted">Rang #2</span>
                      </div>

                      {/* Concurrent B */}
                      <div className="rounded-xl border border-border/60 bg-surface/50 p-3 flex items-start justify-between gap-3 text-text-muted">
                        <div>
                          <span className="text-sm font-medium text-text-secondary">3. Concurrent B</span>
                          <p className="text-xs text-text-muted mt-0.5">
                            « Orienté grands comptes avec une tarification plus élevée. »
                          </p>
                        </div>
                        <span className="text-xs text-text-muted">Rang #3</span>
                      </div>
                    </div>
                  </div>

                  {/* Badge récapitulatif Reflet */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <div className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1 text-xs text-text-secondary">
                      <SparklesIcon className="h-3.5 w-3.5 text-brand" />
                      <span>Recommandé dans <strong>12 / 30</strong> questions cibles</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1 text-xs text-success">
                      <span>+8 points de visibilité ce mois-ci</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SonarGrid>
  )
}


