import { motion } from 'framer-motion'
import { 
  GlobeAltIcon, 
  CpuChipIcon, 
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  ClockIcon 
} from '@heroicons/react/24/outline'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { SectionTitle } from '@/components/ui/section-title'

const steps = [
  {
    icon: GlobeAltIcon,
    label: 'Votre site',
  },
  {
    icon: CpuChipIcon,
    label: 'Reflet comprend votre marque',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    label: 'Reflet construit vos questions',
  },
  {
    icon: MagnifyingGlassIcon,
    label: 'ChatGPT est interrogé',
  },
  {
    icon: ChartBarIcon,
    label: 'Les réponses sont analysées',
  },
  {
    icon: ChartBarIcon,
    label: 'Score + preuves + opportunités',
  },
  {
    icon: ClockIcon,
    label: 'Évolution dans le temps',
  },
]

export function HowItWorks() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }
  
  const line = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <SectionWrapper className="py-24">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <SectionTitle variant="h1">Comment ça fonctionne</SectionTitle>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Un processus automatisé pour mesurer votre visibilité dans les réponses IA
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="relative"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Ligne connectrice */}
            <div className="absolute left-6 top-12 bottom-12 w-px bg-border overflow-hidden">
              <motion.div
                className="w-full h-full bg-brand origin-top"
                variants={line}
              />
            </div>
            
            {/* Étapes */}
            <div className="relative space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-start gap-6"
                >
                  <div className="relative z-10 w-12 h-12 rounded-lg bg-surface border border-border flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-brand" />
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-text-primary font-medium">{step.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.p
            className="text-center text-lg text-text-primary mt-16 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Vous choisissez les questions. Reflet s'occupe du reste.
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  )
}
