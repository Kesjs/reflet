import { motion } from 'framer-motion'
import {
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  ChartBarIcon,
  SparklesIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import { SectionWrapper } from '@/components/ui/section-wrapper'

const workflowSteps = [
  {
    step: '01',
    icon: GlobeAltIcon,
    title: 'Cartographie de votre offre',
    desc: 'Reflet explore votre site pour extraire vos propositions de valeur, expertises et cas d’usage clés.',
    badge: 'Analyse initiale',
  },
  {
    step: '02',
    icon: ChatBubbleLeftRightIcon,
    title: 'Génération de 30 requêtes',
    desc: 'Identification des questions réelles et des comparatifs que vos prospects soumettent quotidiennement à l’IA.',
    badge: 'Prompt engineering',
  },
  {
    step: '03',
    icon: CpuChipIcon,
    title: 'Interrogation continue des IA',
    desc: 'Sondage automatisé et récurrent de ChatGPT 4o et des moteurs génératifs pour capturer les réponses en direct.',
    badge: 'Mesure récurrente',
  },
  {
    step: '04',
    icon: ChartBarIcon,
    title: 'Score, preuves & plan d’action',
    desc: 'Obtenez votre score sur 100, les citations exactes de votre marque et les leviers pour dépasser vos rivaux.',
    badge: 'Résultat actionnable',
  },
]

export function HowItWorks() {
  return (
    <SectionWrapper className="py-24 relative overflow-hidden">
      <div className="space-y-16">
        {/* En-tête de section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-3 py-1 text-xs font-medium text-brand-accent">
            <SparklesIcon className="h-3.5 w-3.5" />
            <span>Processus 100% automatisé</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-text-primary">
            Comment fonctionne Reflet
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            De l'analyse de votre domaine à la feuille de route d'optimisation IA :
            aucun script à installer, aucune configuration technique.
          </p>
        </div>

        {/* Grille horizontale des 4 étapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative flex flex-col justify-between rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur-md hover:border-border-hover transition-all duration-300 group shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {/* Numéro d'étape et icône */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black tracking-tighter text-brand/30 group-hover:text-brand-accent transition-colors">
                    {item.step}
                  </span>
                  <div className="h-10 w-10 rounded-xl border border-border bg-surface-elevated flex items-center justify-center text-brand group-hover:bg-brand/10 group-hover:border-brand/40 transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <span className="inline-block rounded-md bg-surface-elevated border border-border/80 px-2 py-0.5 text-[11px] font-medium text-text-muted">
                    {item.badge}
                  </span>
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-brand-accent transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Connecteur discret en bas de carte */}
              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-text-muted">
                <span>Étape {index + 1} sur 4</span>
                {index < 3 ? (
                  <ArrowRightIcon className="h-3.5 w-3.5 text-text-muted group-hover:text-brand-accent transition-colors group-hover:translate-x-1 duration-200" />
                ) : (
                  <span className="text-brand font-medium">Prêt</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message de conclusion rassurant */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-2xl border border-brand/30 bg-brand/5 p-6 text-center max-w-2xl mx-auto"
        >
          <p className="text-sm sm:text-base font-medium text-text-primary">
            « Vous renseignez simplement votre URL. Reflet génère les questions et pilote les mesures en toute autonomie. »
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

