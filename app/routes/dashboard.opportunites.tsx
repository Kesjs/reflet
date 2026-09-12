import React, { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Lightbulb, ArrowRight, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react'
import { ContentLayout } from '@/components/admin-panel/content-layout'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/dashboard/opportunites')({
  component: OpportunitesPage,
})

interface Opportunity {
  id: string
  title: string
  priority: 'high' | 'medium' | 'low'
  status: 'open' | 'resolved' | 'dismissed'
  confidence: string
  observationsCount: number
  targetQuery: string
  reason: string
  currentContent: string
  proposedAction: string
  evidenceChain: string[]
}

const OPPORTUNITIES_DATA: Opportunity[] = [
  {
    id: 'op1',
    title: 'Expliciter la grille tarifaire sur la page /tarifs pour la requête "outil audit IA PME"',
    priority: 'high',
    status: 'open',
    confidence: '94%',
    observationsCount: 8,
    targetQuery: 'Meilleur outil d’audit de visibilité pour ChatGPT à moins de 100€/mois',
    reason: 'ChatGPT cite Otter et Semrush car leurs tarifs sont clairement balisés dans leur structure HTML.',
    currentContent: 'Votre page tarif mentionne "Sur devis" ou nécessite un formulaire de contact.',
    proposedAction: 'Afficher le tarif transparent de 75 €/mois avec tableau des fonctionnalités incluses.',
    evidenceChain: [
      'Question : Outil audit visibilité ChatGPT abordable',
      'Réponse observée : ChatGPT mentionne Semrush et Otter',
      'Observation : Absence de mention Reflet sur le critère prix',
      'Site : /tarifs sans prix public en texte brut',
      'Écart : Manque de données tarifaires indexables',
      'Recommandation : Baliser le tarif 75 €/mois dans la page',
    ],
  },
  {
    id: 'op2',
    title: 'Créer une section comparative technique vis-à-vis des outils SEO traditionnels',
    priority: 'medium',
    status: 'open',
    confidence: '88%',
    observationsCount: 5,
    targetQuery: 'Différence entre SEO Google et visibilité dans les moteurs IA',
    reason: 'ChatGPT synthétise fréquemment des articles comparant le Search classique au Generative Engine Optimization.',
    currentContent: 'Votre site présente uniquement les bénéfices directs sans mise en perspective SEO.',
    proposedAction: 'Publier un guide expliquant le protocole de mesure IA vs crawl Googlebot.',
    evidenceChain: [
      'Question : Comparaison SEO vs GEO',
      'Réponse observée : Définition théorique sans citation de Reflet',
      'Observation : Reflet n’est pas associé aux concepts de mesure IA',
      'Site : Pas de page lexique ou comparaison explicite',
      'Écart : Manque d’autorité sémantique sur la comparaison',
      'Recommandation : Ajouter une page ressource détaillée',
    ],
  },
]

function OpportunitesPage() {
  const [selectedOp, setSelectedOp] = useState<string | null>('op1')

  return (
    <ContentLayout title="Opportunités">
      <div className="space-y-6 select-none">
        <div className="p-4 rounded-[8px] border border-[#313131] bg-[#141414] flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-[#ffffff]">Opportunités d'optimisation étayées</h2>
            <p className="text-xs text-[#a7a7a7] mt-0.5">
              Chaque opportunité est reliée à la chaîne de preuves (Evidence Chain) issue des réponses ChatGPT.
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-[6px] bg-[#f2d94e]/15 text-[#f2d94e] font-mono text-xs font-semibold border border-[#f2d94e]/30">
            2 opportunités actives
          </span>
        </div>

        <div className="space-y-4">
          {OPPORTUNITIES_DATA.map((op) => (
            <div
              key={op.id}
              className="rounded-[8px] border border-[#313131] bg-[#141414] overflow-hidden transition-all"
            >
              <div className="p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        'px-2 py-0.5 rounded-[4px] font-mono text-[10px] font-bold uppercase',
                        op.priority === 'high'
                          ? 'bg-red-500/15 text-red-400 border border-red-500/30'
                          : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                      )}
                    >
                      Priorité {op.priority === 'high' ? 'haute' : 'moyenne'}
                    </span>
                    <span className="text-xs font-mono text-[#7c7c7c]">
                      Confiance : {op.confidence} · {op.observationsCount} observations
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#22c55e] flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-[#22c55e]" />
                    Statut : {op.status}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#ffffff]">{op.title}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded-[6px] bg-[#0a0a0a] border border-[#313131]/60 space-y-1">
                    <span className="font-semibold text-[#a7a7a7] block">Pourquoi l'opportunité existe :</span>
                    <p className="text-[#ffffff] leading-relaxed">{op.reason}</p>
                  </div>
                  <div className="p-3 rounded-[6px] bg-[#0a0a0a] border border-[#313131]/60 space-y-1">
                    <span className="font-semibold text-[#a7a7a7] block">Direction proposée :</span>
                    <p className="text-[#f2d94e] leading-relaxed font-medium">{op.proposedAction}</p>
                  </div>
                </div>

                {/* Bouton d'ouverture de l'Evidence Chain */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedOp(selectedOp === op.id ? null : op.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#f2d94e] hover:underline cursor-pointer"
                  >
                    <span>{selectedOp === op.id ? 'Masquer' : 'Voir'} l\'Evidence Chain</span>
                    <ChevronDown
                      className={cn(
                        'size-3.5 transition-transform duration-200',
                        selectedOp === op.id && 'rotate-180'
                      )}
                    />
                  </button>
                </div>
              </div>

              {/* Evidence Chain (§7) */}
              {selectedOp === op.id && (
                <div className="p-4 bg-[#0b0b0b] border-t border-[#313131] space-y-3">
                  <span className="text-[11px] font-mono text-[#a7a7a7] uppercase tracking-wider block">
                    Chaîne de preuves (Evidence Chain) :
                  </span>
                  <div className="space-y-2">
                    {op.evidenceChain.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#1e1e1e] text-[10px] font-mono text-[#f2d94e] font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-[#ffffff] leading-snug">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </ContentLayout>
  )
}
