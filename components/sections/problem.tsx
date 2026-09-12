import { motion } from 'framer-motion'
import { 
  EyeSlashIcon, 
  ArrowTrendingDownIcon, 
  ExclamationTriangleIcon,
  ShieldExclamationIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { SectionWrapper } from '@/components/ui/section-wrapper'

const diagnostics = [
  {
    icon: EyeSlashIcon,
    tag: 'Omission silencieuse',
    stat: '71%',
    statLabel: 'des prospects choisissent les 2 premières recommandations IA',
    title: 'Votre marque est purement absente',
    description: 'Le prospect pose une question sur votre coeur de métier. Le modèle cite trois concurrents sans jamais prononcer votre nom.',
  },
  {
    icon: ArrowTrendingDownIcon,
    tag: 'Éviction concurrente',
    stat: '#1',
    statLabel: 'place trustée par vos rivaux directs',
    title: 'Relégué derrière des solutions tierces',
    description: 'Votre offre est plus complète ou plus avantageuse, mais l\'IA place systématiquement un acteur historique ou mieux documenté en tête.',
  },
  {
    icon: ExclamationTriangleIcon,
    tag: 'Altération de valeur',
    stat: '4/10',
    statLabel: 'des réponses IA contiennent des données périmées',
    title: 'Une promesse déformée par le modèle',
    description: 'Votre site vante une refonte ou de nouveaux tarifs, mais ChatGPT continue de vous décrire selon vos caractéristiques d\'il y a deux ans.',
  },
]

export function Problem() {
  return (
    <SectionWrapper className="py-24 border-t border-border-subtle">
      <div className="space-y-16">
        {/* Titre franc sans kicker superflu */}
        <div className="max-w-3xl">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Votre site sait exactement ce que vous vendez.  
            <span className="block text-brand-accent mt-2">
              ChatGPT, lui, recommande quelqu'un d'autre.
            </span>
          </motion.h2>
          <motion.p
            className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Quand un acheteur potentiel délègue son choix à une IA de réponse, 
            les algorithmes traditionnels ne comptent plus. C'est ici que se joue 
            l'éviction invisible de votre chiffre d'affaires.
          </motion.p>
        </div>

        {/* Grille asymétrique moderne : 3 piliers d'analyse + simulation d'éviction */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Colonne gauche : 3 diagnostics concrets */}
          <div className="lg:col-span-6 space-y-4">
            {diagnostics.map((diag, index) => (
              <motion.div
                key={diag.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-xl border border-border bg-surface/60 hover:bg-surface hover:border-brand/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-brand tracking-wide uppercase">
                        {diag.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      {diag.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed pt-1">
                      {diag.description}
                    </p>
                  </div>

                  {/* Statistique frappante */}
                  <div className="text-right flex-shrink-0 pl-4 border-l border-border/60">
                    <span className="block text-2xl font-bold text-brand font-mono">
                      {diag.stat}
                    </span>
                    <span className="text-[11px] text-text-muted max-w-[90px] block leading-tight mt-0.5">
                      {diag.statLabel}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Colonne droite : Banc d'essai forensique d'une opportunité perdue */}
          <motion.div
            className="lg:col-span-6 rounded-xl border border-border bg-surface-elevated/80 backdrop-blur-md overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Header de la console d'inspection */}
            <div className="px-5 py-3.5 border-b border-border/80 bg-surface flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-text-muted">
                  audit-forensic // simulation-requete-04
                </span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-brand/10 text-brand border border-brand/20">
                Éviction détectée
              </span>
            </div>

            <div className="p-6 space-y-6">
              {/* Question posée par le prospect */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                  Requête réelle d'un prospect
                </span>
                <div className="p-3.5 rounded-lg bg-surface border border-border text-sm text-text-primary font-mono">
                  « Quel outil d'analyse SEO IA choisir pour une équipe B2B en Europe ? »
                </div>
              </div>

              {/* Réponse observée dans le modèle */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                  Réponse formulée par ChatGPT-4o
                </span>
                <div className="p-4 rounded-lg bg-surface/50 border border-border/60 text-sm space-y-3 font-mono">
                  <div className="flex items-start gap-2.5">
                    <span className="text-brand font-bold">1.</span>
                    <p className="text-text-secondary">
                      <strong className="text-text-primary font-semibold">Semrush AI Toolkit</strong> — Plateforme établie, présence documentée sur 42 sources Web.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-brand font-bold">2.</span>
                    <p className="text-text-secondary">
                      <strong className="text-text-primary font-semibold">OtterSEO</strong> — Fréquemment cité dans les comparatifs spécialisés 2025.
                    </p>
                  </div>
                  <div className="p-3 rounded border border-red-500/20 bg-red-500/5 text-xs text-red-300/90 flex items-center gap-2">
                    <ShieldExclamationIcon className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span><strong>Votre marque</strong> : 0 mention. Aucun signal de citation retenu par le modèle.</span>
                  </div>
                </div>
              </div>

              {/* Télémétrie d'impact Reflet */}
              <div className="pt-4 border-t border-border/60 grid grid-cols-3 gap-3 text-center">
                <div className="p-2.5 rounded-lg bg-surface border border-border/60">
                  <span className="text-[11px] text-text-muted block">Position</span>
                  <span className="text-base font-bold text-red-400 font-mono">Non classé</span>
                </div>
                <div className="p-2.5 rounded-lg bg-surface border border-border/60">
                  <span className="text-[11px] text-text-muted block">Recommandation</span>
                  <span className="text-base font-bold text-red-400 font-mono">0 / 30 tests</span>
                </div>
                <div className="p-2.5 rounded-lg bg-surface border border-border/60">
                  <span className="text-[11px] text-text-muted block">Trafic capté</span>
                  <span className="text-base font-bold text-brand font-mono">0% (Rival: 84%)</span>
                </div>
              </div>
            </div>

            {/* Barre de synthèse en bas */}
            <div className="px-6 py-3.5 bg-brand/10 border-t border-brand/20 flex items-center justify-between text-xs text-brand-accent">
              <span className="font-medium">Reflet identifie la source exacte de l'omission.</span>
              <span className="font-mono flex items-center gap-1 font-semibold">
                Mesure continue ➔
              </span>
            </div>
          </motion.div>
        </div>

        {/* Conclusion nette */}
        <motion.div
          className="p-6 rounded-xl border border-brand/20 bg-surface text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-base sm:text-lg text-text-primary font-medium">
            « Ne laissez plus vos concurrents être la réponse par défaut à des questions que vos propres prospects posent chaque jour. »
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
