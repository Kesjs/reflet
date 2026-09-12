import { motion } from 'framer-motion'
import { 
  EyeIcon, 
  LightBulbIcon, 
  RocketLaunchIcon, 
  ArrowPathIcon 
} from '@heroicons/react/24/outline'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { SectionTitle } from '@/components/ui/section-title'
import { Card, CardContent } from '@/components/ui/card'

const steps = [
  {
    icon: EyeIcon,
    title: 'Voir',
    description: 'Ce que ChatGPT dit réellement',
  },
  {
    icon: LightBulbIcon,
    title: 'Comprendre',
    description: 'Pourquoi certaines marques apparaissent davantage',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Agir',
    description: 'Quelles opportunités méritent votre attention',
  },
  {
    icon: ArrowPathIcon,
    title: 'Vérifier',
    description: 'Ce qui a évolué à la mesure suivante',
  },
]

export function ValueLoop() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <SectionWrapper className="py-24">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <SectionTitle variant="h1">La boucle de valeur</SectionTitle>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Un cycle continu pour améliorer votre visibilité
          </p>
        </div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full relative overflow-hidden">
                <CardContent className="space-y-4">
                  {/* Numéro */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-brand">
                      {index + 1}
                    </span>
                  </div>
                  
                  <div className="w-12 h-12 rounded-lg bg-surface-elevated border border-border flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-brand" />
                  </div>
                  
                  <h3 className="text-h3 font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
