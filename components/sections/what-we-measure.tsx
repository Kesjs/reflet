import { motion } from 'framer-motion'
import { 
  EyeIcon, 
  HandThumbUpIcon, 
  ChartBarIcon, 
  UsersIcon 
} from '@heroicons/react/24/outline'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { SectionTitle } from '@/components/ui/section-title'
import { Card, CardContent } from '@/components/ui/card'
import { Grid } from '@/components/ui/grid'

const metrics = [
  {
    icon: EyeIcon,
    title: 'Présence',
    description: 'Votre marque est-elle mentionnée ?',
  },
  {
    icon: HandThumbUpIcon,
    title: 'Recommandation',
    description: 'Est-elle proposée comme solution ?',
  },
  {
    icon: ChartBarIcon,
    title: 'Position',
    description: "Où apparaît-elle lorsqu'une liste est générée ?",
  },
  {
    icon: UsersIcon,
    title: 'Concurrence',
    description: 'Qui apparaît à sa place ou plus fréquemment ?',
  },
]

export function WhatWeMeasure() {
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
          <SectionTitle variant="h1">Ce que Reflet mesure</SectionTitle>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Quatre dimensions pour comprendre votre visibilité dans les réponses IA
          </p>
        </div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Grid cols={4}>
            {metrics.map((metric, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-surface-elevated border border-border flex items-center justify-center">
                      <metric.icon className="w-6 h-6 text-brand" />
                    </div>
                    <h3 className="text-h3 font-semibold text-text-primary">
                      {metric.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {metric.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
