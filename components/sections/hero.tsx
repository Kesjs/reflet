import { motion } from 'framer-motion'
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionWrapper } from '@/components/ui/section-wrapper'

export function Hero() {
  const titleWords = "Voyez comment votre marque apparaît dans ChatGPT.".split(' ')
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }
  
  const word = {
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
  
  const preview = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <SectionWrapper className="pt-32 pb-24">
      <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
        {/* Texte */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge>Visibilité IA</Badge>
          </motion.div>
          
          <motion.h1
            className="text-display font-semibold text-text-primary leading-tight"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {titleWords.map((w, i) => (
              <motion.span key={i} variants={word} className="inline-block mr-2">
                {w}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p
            className="text-lg text-text-secondary max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Reflet pose les questions que vos prospects pourraient réellement poser, 
            analyse les réponses générées par ChatGPT et vous montre où votre marque apparaît, 
            qui apparaît à sa place et ce qui peut être amélioré.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button size="lg" className="group">
              Analyser mon site
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg">
              Voir le produit
            </Button>
          </motion.div>
          
          <motion.p
            className="text-sm text-text-muted flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <CheckCircleIcon className="w-4 h-4 text-brand" />
            1 site · jusqu'à 30 questions · mesure continue
          </motion.p>
        </div>
        
        {/* Visuel - Composant produit mock */}
        <motion.div
          variants={preview}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-surface border border-border rounded-xl p-6 space-y-6">
            {/* Score */}
            <div className="space-y-2">
              <div className="text-caption text-text-muted">Score de visibilité</div>
              <div className="text-metric font-semibold text-text-primary">72</div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-success">+8</span>
                <span className="text-text-muted">vs mesure précédente</span>
              </div>
            </div>
            
            {/* Mention/Recommandation */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Mentionné</span>
                <span className="text-text-primary font-medium">18/30 réponses</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Recommandé</span>
                <span className="text-text-primary font-medium">12/30 réponses</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Position moyenne</span>
                <span className="text-text-primary font-medium">2.3</span>
              </div>
            </div>
            
            {/* Réponse observée */}
            <div className="border-t border-border pt-4 space-y-3">
              <div className="text-caption text-text-muted">Exemple de réponse observée</div>
              <div className="bg-background rounded-lg p-4 space-y-2 text-sm">
                <p className="text-text-secondary">
                  "Pour un logiciel de facturation adapté aux PME françaises, je recommanderais :
                </p>
                <ol className="list-decimal list-inside space-y-1 text-text-secondary">
                  <li><span className="text-brand font-medium">Reflet</span> - Simple et conforme</li>
                  <li>Pennylane - Comptabilité intégrée</li>
                  <li>Sellsy - CRM inclus</li>
                </ol>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
