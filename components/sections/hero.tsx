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
        {/* Badge d'annonce interactif style SaasCN */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <a
            href="/produit/visibilite-ia"
            className="group inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface/80 px-4 py-1.5 text-xs text-text-secondary backdrop-blur-md transition-colors hover:border-border-hover hover:bg-surface hover:text-text-primary"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse" />
            <span className="font-medium text-text-primary">Visibilité IA 2026</span>
            <span className="text-text-muted">·</span>
            <span>Découvrez comment ChatGPT recommande votre marque</span>
            <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-rotate-12 group-hover:text-brand-accent" />
          </a>
        </motion.div>

        {/* Titre principal centré à fort impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-4xl"
        >
          <h1 className="text-5xl font-semibold tracking-tighter text-text-primary sm:text-6xl md:text-7xl lg:text-7xl leading-[1.08]">
            Voyez comment votre marque apparaît dans{' '}
            <span className="bg-gradient-to-r from-white via-brand-accent to-brand bg-clip-text text-transparent">
              ChatGPT
            </span>
            .
          </h1>
        </motion.div>

        {/* Sous-titre aéré */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-text-secondary md:text-xl leading-relaxed tracking-tight"
        >
          Reflet pose les questions que vos prospects se posent réellement, analyse les
          réponses de ChatGPT et vous montre où vous apparaissez, qui prend votre place et
          comment passer premier.
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

        {/* Vitrine Produit interactive & stylisée (Mockup centré) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-12 w-full max-w-4xl"
        >
          {/* Lueur d'accentuation sous le mockup */}
          <div
            className="pointer-events-none absolute -inset-1 rounded-2xl opacity-40 blur-xl -z-10"
            style={{
              background:
                'radial-gradient(circle at 50% 0%, rgba(201, 171, 30, 0.25) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="overflow-hidden rounded-2xl border border-border bg-surface/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-left">
            {/* Header du Mockup */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-success" />
                  <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                    Rapport de visibilité en direct
                  </span>
                </div>
                <h3 className="mt-1 text-lg font-medium text-text-primary">
                  Positionnement sur ChatGPT 4o / Search
                </h3>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-surface-elevated px-3 py-1.5 text-xs text-text-secondary">
                <SparklesIcon className="h-4 w-4 text-brand" />
                <span>30 requêtes surveillées</span>
              </div>
            </div>

            {/* Statistiques principales en grille */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-border/60 bg-background/60 p-4">
                <div className="text-xs text-text-muted">Score de visibilité</div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight text-text-primary">
                    72
                  </span>
                  <span className="text-xs font-medium text-success">+8 pts</span>
                </div>
                <div className="mt-1 text-[11px] text-text-muted">vs mesure précédente</div>
              </div>

              <div className="rounded-xl border border-border/60 bg-background/60 p-4">
                <div className="text-xs text-text-muted">Taux de recommandation</div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight text-brand-accent">
                    12<span className="text-xl text-text-muted">/30</span>
                  </span>
                  <span className="text-xs font-medium text-text-muted">40%</span>
                </div>
                <div className="mt-1 text-[11px] text-text-muted">en 1ère suggestion</div>
              </div>

              <div className="rounded-xl border border-border/60 bg-background/60 p-4">
                <div className="text-xs text-text-muted">Position moyenne</div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight text-text-primary">
                    #2.3
                  </span>
                  <span className="text-xs font-medium text-success">Top 3</span>
                </div>
                <div className="mt-1 text-[11px] text-text-muted">sur les requêtes clés</div>
              </div>
            </div>

            {/* Aperçu de la réponse observée dans ChatGPT */}
            <div className="mt-6 rounded-xl border border-border/60 bg-background/80 p-4 sm:p-5">
              <div className="flex items-center justify-between text-xs text-text-muted">
                <span className="font-medium text-text-secondary">
                  Prompt prospect : « Quel est le meilleur outil de gestion pour PME en 2026 ? »
                </span>
                <span className="rounded bg-surface-elevated px-2 py-0.5 text-[10px] text-text-muted">
                  Réponse vérifiée
                </span>
              </div>
              <div className="mt-3 space-y-2 text-sm text-text-secondary">
                <p>
                  "Pour une entreprise à la recherche d'une solution moderne et conforme, voici les
                  acteurs recommandés :"
                </p>
                <ol className="list-decimal list-inside space-y-1 pl-1">
                  <li>
                    <span className="font-medium text-brand-accent">Votre Marque</span>
                    <span className="text-text-muted"> — Reconnu pour sa simplicité et sa conformité</span>
                  </li>
                  <li>
                    <span className="text-text-secondary">Concurrent A</span>
                    <span className="text-text-muted"> — Alternative historique</span>
                  </li>
                  <li>
                    <span className="text-text-secondary">Concurrent B</span>
                    <span className="text-text-muted"> — Solution orientée grands comptes</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SonarGrid>
  )
}


