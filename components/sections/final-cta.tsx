import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { SectionWrapper } from '@/components/ui/section-wrapper'

export function FinalCTA() {
  return (
    <SectionWrapper className="py-24">
      <motion.div
        className="bg-surface-elevated border border-border rounded-2xl p-12 md:p-16 text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-h1 font-semibold text-text-primary max-w-3xl mx-auto">
          Découvrez ce que ChatGPT dit de votre marque.
        </h2>
        
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Analysez votre site, sélectionnez vos questions et obtenez votre première mesure.
        </p>
        
        <div className="pt-4">
          <Button size="lg" className="group">
            Analyser mon site
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
