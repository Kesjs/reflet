import { motion } from 'framer-motion'
import { 
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  EyeIcon,
  LinkIcon,
  LightBulbIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { SectionTitle } from '@/components/ui/section-title'

const chain = [
  {
    icon: ChatBubbleLeftRightIcon,
    label: 'Question',
    description: 'La question posée à ChatGPT',
  },
  {
    icon: DocumentTextIcon,
    label: 'Réponse observée',
    description: 'Ce que ChatGPT a généré',
  },
  {
    icon: EyeIcon,
    label: 'Observation',
    description: 'Mentions et positions détectées',
  },
  {
    icon: LinkIcon,
    label: 'Site / Preuves',
    description: 'Contenu de votre site analysé',
  },
  {
    icon: SparklesIcon,
    label: 'Constat',
    description: 'Ce qui explique le résultat',
  },
  {
    icon: LightBulbIcon,
    label: 'Opportunité',
    description: 'Ce que vous pouvez améliorer',
  },
]

export function Evidence() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <SectionWrapper className="py-24">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <SectionTitle variant="h1">Pas de score sans preuves.</SectionTitle>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Chaque insight peut être remonté à sa source : la réponse observée, 
            le contenu de votre site, et les éléments qui ont conduit à la conclusion.
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
            <div className="absolute left-10 top-16 bottom-16 w-px bg-border overflow-hidden">
              <motion.div
                className="w-full h-full bg-brand origin-top"
                variants={line}
              />
            </div>
            
            {/* Chaîne de preuves */}
            <div className="relative space-y-6">
              {chain.map((step, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative"
                >
                  <div className="flex items-start gap-6">
                    <div className="relative z-10 w-20 h-20 rounded-xl bg-surface border border-border flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-8 h-8 text-brand" />
                    </div>
                    <div className="flex-1 pt-3 space-y-1">
                      <h4 className="text-lg font-semibold text-text-primary">
                        {step.label}
                      </h4>
                      <p className="text-text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.p
            className="text-center text-base text-text-secondary mt-16 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Chaque insight important peut être remonté à la réponse observée, 
            au contenu du site et aux éléments qui ont conduit à la conclusion.
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  )
}
