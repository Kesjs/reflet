import { motion } from 'framer-motion'
import { ArrowRightIcon, SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { SonarGrid } from '@/components/ui/sonar-grid'

export function FinalCTA() {
  return (
    <SectionWrapper className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl border border-border bg-surface/90 shadow-2xl"
      >
        <SonarGrid
          color="#c9ab1e"
          baseOpacity={0.16}
          spacing={26}
          speed={220}
          pingEvery={3.0}
          className="relative px-6 py-16 sm:px-12 sm:py-24 text-center overflow-hidden"
        >
          {/* Halo lumineux de marque — bas à droite */}
          <div
            className="pointer-events-none absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-[480px] h-[480px] rounded-full blur-[110px] -z-10"
            style={{
              background:
                'radial-gradient(circle, rgba(201, 171, 30, 0.35) 0%, rgba(242, 217, 78, 0.12) 45%, transparent 75%)',
            }}
            aria-hidden="true"
          />

          {/* Wash radial central pour garantir la lisibilité du texte */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(11,11,11,0.85)_0%,transparent_100%)]"
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-elevated/80 px-4 py-1.5 text-xs text-text-secondary backdrop-blur-md">
              <SparklesIcon className="h-3.5 w-3.5 text-brand-accent" />
              <span>Prêt pour l'ère de la recherche générative</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-text-primary leading-[1.1]">
              Découvrez ce que ChatGPT dit de votre marque.
            </h2>

            <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
              Analysez votre site en 2 minutes, configurez vos questions clés et obtenez
              votre premier score de visibilité IA.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/login" size="lg" className="group w-full sm:w-auto gap-2 bg-brand text-on-brand font-medium hover:bg-brand-hover shadow-lg shadow-brand/20">
                <span>Analyser mon site gratuitement</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs text-text-muted">
              <CheckCircleIcon className="h-4 w-4 text-brand" />
              <span>Sans carte bancaire · Mesure immédiate · Rapport complet exportable</span>
            </div>
          </div>
        </SonarGrid>
      </motion.div>
    </SectionWrapper>
  )
}

