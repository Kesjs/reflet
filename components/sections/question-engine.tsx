import { motion } from 'framer-motion'
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { SectionTitle } from '@/components/ui/section-title'

const questions = [
  {
    good: false,
    text: 'Parlez-moi de SIKKA',
    icon: XMarkIcon,
  },
  {
    good: true,
    text: 'Quel logiciel de facturation recommander à un artisan au Bénin ?',
    icon: CheckIcon,
  },
]

export function QuestionEngine() {
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
            Les bonnes questions avant les bonnes réponses.
          </SectionTitle>
          <p className="text-lg text-text-secondary leading-relaxed">
            Une question générique ne mesure rien. Reflet construit des questions 
            que vos prospects poseraient réellement, dans leur contexte, avec leurs mots.
          </p>
        </motion.div>
        
        {/* Liste de questions */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {questions.map((question, index) => (
            <div
              key={index}
              className={`
                p-6 rounded-lg border-2 flex items-start gap-4
                ${question.good 
                  ? 'bg-surface border-brand/20' 
                  : 'bg-background border-border/50 opacity-60'
                }
              `}
            >
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                ${question.good 
                  ? 'bg-brand/10 text-brand' 
                  : 'bg-surface text-text-muted'
                }
              `}>
                <question.icon className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <p className={`
                text-base font-medium pt-0.5
                ${question.good ? 'text-text-primary' : 'text-text-muted'}
              `}>
                {question.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
