import { motion } from 'framer-motion'
import { EyeSlashIcon, ArrowTrendingDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { SectionTitle } from '@/components/ui/section-title'
import { Card, CardContent } from '@/components/ui/card'
import { Grid } from '@/components/ui/grid'

const problems = [
  {
    icon: EyeSlashIcon,
    title: 'Invisible',
    description: "Votre marque n'apparaît pas dans les recommandations pertinentes",
  },
  {
    icon: ArrowTrendingDownIcon,
    title: 'Mal positionnée',
    description: 'Elle apparaît derrière d\'autres solutions',
  },
  {
    icon: QuestionMarkCircleIcon,
    title: 'Mal comprise',
    description: 'Votre site exprime une offre claire, mais les réponses observées ne la reflètent pas correctement',
  },
]

export function Problem() {
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

  return (
    <SectionWrapper className="py-24">
      <div className="space-y-16">
        <SectionTitle variant="h1" className="text-center max-w-4xl mx-auto">
          Votre site sait ce que vous vendez. ChatGPT, lui, peut en dire autre chose.
        </SectionTitle>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Grid cols={3}>
            {problems.map((problem, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-surface-elevated border border-border flex items-center justify-center">
                      <problem.icon className="w-6 h-6 text-brand" />
                    </div>
                    <h3 className="text-h3 font-semibold text-text-primary">
                      {problem.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
        
        <motion.p
          className="text-center text-lg text-text-primary max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Reflet mesure cet écart au lieu de vous demander de le deviner.
        </motion.p>
      </div>
    </SectionWrapper>
  )
}
