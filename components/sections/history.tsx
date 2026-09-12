import { motion } from 'framer-motion'
import { ChartBarIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { SectionTitle } from '@/components/ui/section-title'

const timeline = [
  {
    date: '08 sept.',
    type: 'measure',
    label: 'Mesure #11',
    value: 'Score 64',
  },
  {
    date: '10 sept.',
    type: 'change',
    label: 'Modification détectée',
    value: '/pricing',
  },
  {
    date: '12 sept.',
    type: 'change',
    label: 'Modification détectée',
    value: '/',
  },
  {
    date: '15 sept.',
    type: 'measure',
    label: 'Mesure #12',
    value: 'Score 68',
  },
]

export function History() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }
  
  const item = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <SectionWrapper className="py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Texte */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionTitle variant="h1">
            Votre visibilité n'est pas un chiffre isolé.
          </SectionTitle>
          <p className="text-lg text-text-secondary leading-relaxed">
            Reflet surveille automatiquement votre site et mesure l'évolution 
            de votre visibilité au fil du temps. Vous n'avez pas besoin de 
            déclarer chaque modification.
          </p>
        </motion.div>
        
        {/* Timeline */}
        <motion.div
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Ligne verticale */}
          <div className="absolute left-6 top-4 bottom-4 w-px bg-border" />
          
          <div className="space-y-6">
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative flex items-start gap-6"
              >
                {/* Icône */}
                <div className="relative z-10 w-12 h-12 rounded-lg bg-surface border border-border flex items-center justify-center flex-shrink-0">
                  {event.type === 'measure' ? (
                    <ChartBarIcon className="w-5 h-5 text-brand" />
                  ) : (
                    <DocumentTextIcon className="w-5 h-5 text-text-muted" />
                  )}
                </div>
                
                {/* Contenu */}
                <div className="flex-1 pt-2 space-y-1">
                  <div className="flex items-baseline gap-3">
                    <span className="text-caption text-text-muted font-medium">
                      {event.date}
                    </span>
                    <span className="text-sm text-text-secondary">
                      {event.label}
                    </span>
                  </div>
                  <p className={`
                    text-base font-semibold
                    ${event.type === 'measure' ? 'text-brand' : 'text-text-primary'}
                  `}>
                    {event.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
