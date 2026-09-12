import { motion } from 'framer-motion'
import {
  ChatBubbleBottomCenterTextIcon,
  DocumentMagnifyingGlassIcon,
  LightBulbIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import { SectionWrapper } from '@/components/ui/section-wrapper'

export function Evidence() {
  return (
    <SectionWrapper className="py-24 relative">
      <div className="space-y-16">
        {/* Header de section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-3 py-1 text-xs font-medium text-brand-accent">
            <SparklesIcon className="h-3.5 w-3.5" />
            <span>Traçabilité & Vérifiabilité</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-text-primary">
            Pas de score sans preuves
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Finies les métriques « boîte noire ». Chaque recommandation ou note attribuée
            par Reflet est adossée à une preuve textuelle brute vérifiable.
          </p>
        </div>

        {/* Pipeline de preuve en 3 colonnes connectées */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          {/* Carte 1 : La Question & le Contexte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-surface/80 p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between hover:border-border-hover transition-colors shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border/70">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
                  <ChatBubbleBottomCenterTextIcon className="h-4 w-4 text-brand" />
                  <span>1. Requête observée</span>
                </div>
                <span className="rounded bg-surface-elevated px-2 py-0.5 text-[10px] text-text-muted">
                  Prompt certifié
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-border/60 bg-background/80 p-3.5 text-xs text-text-secondary">
                  <div className="text-text-muted text-[11px] mb-1">Prompt prospect simulé :</div>
                  « Quel est le meilleur CRM pour une entreprise B2B de 50 salariés en France ? »
                </div>
                <p className="text-sm text-text-secondary leading-relaxed pt-2">
                  La requête exacte posée aux modèles de langage dans des conditions réelles de navigation.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 text-xs text-brand-accent flex items-center gap-1.5 font-medium">
              <span>Transmis au moteur d'analyse</span>
              <ArrowRightIcon className="h-3 w-3" />
            </div>
          </motion.div>

          {/* Carte 2 : La Réponse Brute & le Verbatim */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-brand/40 bg-surface/90 p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between shadow-xl relative"
          >
            <div className="absolute -top-3 right-6 rounded-full bg-brand text-on-brand text-[10px] font-bold px-2.5 py-0.5 shadow-md">
              Preuve textuelle
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border/70">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-accent">
                  <DocumentMagnifyingGlassIcon className="h-4 w-4" />
                  <span>2. Verbatim ChatGPT</span>
                </div>
                <span className="text-[10px] text-success flex items-center gap-1 font-medium">
                  <CheckCircleIcon className="h-3 w-3" /> Citation validée
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-border/80 bg-background/90 p-3.5 text-xs text-text-secondary space-y-1.5">
                  <div className="text-text-muted text-[11px]">Extrait de la réponse IA :</div>
                  <p>
                    « ...<mark className="bg-brand/25 text-brand-accent px-1 rounded font-medium">Votre Marque</mark> s'impose comme une alternative crédible grâce à son intégration native et sa conformité RGPD... »
                  </p>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed pt-2">
                  Nous archivons l'intégralité du texte brut généré pour chaque question afin que vous puissiez auditer chaque mot.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 text-xs text-brand-accent flex items-center gap-1.5 font-medium">
              <span>Conversion en levier stratégique</span>
              <ArrowRightIcon className="h-3 w-3" />
            </div>
          </motion.div>

          {/* Carte 3 : L'Opportunité & le Diagnostic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl border border-border bg-surface/80 p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between hover:border-border-hover transition-colors shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border/70">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
                  <LightBulbIcon className="h-4 w-4 text-brand" />
                  <span>3. Plan d'amélioration</span>
                </div>
                <span className="rounded bg-surface-elevated px-2 py-0.5 text-[10px] text-text-muted">
                  Action concrète
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-border/60 bg-background/80 p-3.5 text-xs text-text-secondary space-y-1">
                  <div className="text-text-muted text-[11px]">Recommandation Reflet :</div>
                  <p className="text-text-primary font-medium">
                    « Publiez un cas client détaillé sur l'API pour passer devant Concurrent A sur les requêtes techniques. »
                  </p>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed pt-2">
                  Chaque preuve débouche sur une recommandation claire sur votre contenu web pour influencer les futures réponses de l'IA.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 text-xs text-text-muted flex items-center gap-1">
              <span>Mesure mise à jour automatiquement</span>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

