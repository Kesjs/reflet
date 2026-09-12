import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRightIcon, 
  SparklesIcon, 
  CheckCircleIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { SonarGrid } from '@/components/ui/sonar-grid'

export function FinalCTA() {
  const [domain, setDomain] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const cleanDomain = domain.trim().replace(/^https?:\/\//, '') || 'votre-marque.com'
    // Redirection vers le flux d'analyse
    window.location.href = `/login?domain=${encodeURIComponent(cleanDomain)}`
  }

  return (
    <SectionWrapper className="py-24 border-t border-border-subtle">
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
          {/* Halo lumineux de marque */}
          <div
            className="pointer-events-none absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-[480px] h-[480px] rounded-full blur-[110px] -z-10"
            style={{
              background:
                'radial-gradient(circle, rgba(201, 171, 30, 0.35) 0%, rgba(242, 217, 78, 0.12) 45%, transparent 75%)',
            }}
            aria-hidden="true"
          />

          {/* Wash radial central pour garantir le contraste optimal */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(11,11,11,0.85)_0%,transparent_100%)]"
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-elevated/80 px-4 py-1.5 text-xs text-text-secondary backdrop-blur-md">
              <SparklesIcon className="h-3.5 w-3.5 text-brand-accent" />
              <span>Audit d'éviction générative en direct</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-text-primary leading-[1.1]">
              Découvrez qui prend votre place dans ChatGPT.
            </h2>

            <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
              Entrez votre nom de domaine pour simuler les 30 questions réelles de vos prospects 
              et mesurer votre positionnement face à vos rivaux.
            </p>

            {/* Formulaire interactif de saisie directe ($delight) */}
            <form 
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-2 p-2 rounded-xl bg-surface/95 border border-border shadow-2xl focus-within:border-brand transition-colors"
            >
              <div className="relative flex-1 w-full flex items-center pl-3">
                <GlobeAltIcon className="w-5 h-5 text-text-muted mr-2 flex-shrink-0" />
                <input
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="votre-domaine.com"
                  className="w-full bg-transparent text-text-primary placeholder:text-text-muted text-sm sm:text-base outline-none font-mono py-2"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-brand text-on-brand font-semibold text-sm hover:bg-brand-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/20 flex-shrink-0"
              >
                <span>{isSubmitting ? 'Préparation de l\'audit...' : 'Lancer mon audit IA'}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </form>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-text-muted">
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon className="h-4 w-4 text-brand" />
                Sans engagement
              </span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon className="h-4 w-4 text-brand" />
                30 questions calibrées
              </span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircleIcon className="h-4 w-4 text-brand" />
                Rapport de sources horodaté
              </span>
            </div>
          </div>
        </SonarGrid>
      </motion.div>
    </SectionWrapper>
  )
}
