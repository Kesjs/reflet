import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { SectionTitle } from '@/components/ui/section-title'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const features = [
  '1 site web analysé',
  "Jusqu'à 30 questions personnalisées",
  'Mesure continue automatique',
  'Détection des modifications du site',
  'Historique complet des mesures',
  'Analyse de la concurrence',
  'Preuves et opportunités détaillées',
  'Support par email',
]

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  
  const monthlyPrice = 75
  const annualPrice = 60 // 75 * 0.8 = économie de 20%
  const price = isAnnual ? annualPrice : monthlyPrice

  return (
    <SectionWrapper className="py-24">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <SectionTitle variant="h1">Tarifs</SectionTitle>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Un tarif simple et transparent pour mesurer votre visibilité
          </p>
        </div>
        
        {/* Toggle Mensuel/Annuel */}
        <div className="flex items-center justify-center gap-3">
          <span className={`text-sm ${!isAnnual ? 'text-text-primary font-medium' : 'text-text-muted'}`}>
            Mensuel
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-8 rounded-full bg-surface border border-border transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Changer la période de facturation"
          >
            <motion.div
              className="absolute top-1 w-6 h-6 rounded-full bg-brand"
              animate={{ x: isAnnual ? 28 : 4 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm ${isAnnual ? 'text-text-primary font-medium' : 'text-text-muted'}`}>
            Annuel
            {isAnnual && (
              <span className="ml-2 text-xs text-brand font-semibold">-20%</span>
            )}
          </span>
        </div>
        
        {/* Carte de pricing */}
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                <div className="space-y-2">
                  <h3 className="text-h2 font-semibold text-text-primary">
                    Essentiel
                  </h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <motion.span
                      key={price}
                      className="text-display font-bold text-text-primary"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {price} €
                    </motion.span>
                    <span className="text-text-muted">
                      / {isAnnual ? 'mois' : 'mois'}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-text-muted">
                      Facturé {annualPrice * 12} € par an
                    </p>
                  )}
                </div>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button size="lg" className="w-full">
                Commencer
              </Button>
              
              <p className="text-center text-sm text-text-muted">
                Aucune carte bancaire requise pour l'essai
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
