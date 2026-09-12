import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Users, EyeOff, Info } from 'lucide-react'
import { ContentLayout } from '@/components/admin-panel/content-layout'

export const Route = createFileRoute('/dashboard/concurrents')({
  component: ConcurrentsPage,
})

const COMPETITORS_DATA = [
  {
    name: 'Otter.ai',
    mentions: '42%',
    recommendations: '28%',
    avgPosition: '#1.2',
    coverage: '14/30',
    context: 'Cité fréquemment sur les requêtes relatives à la retranscription et synthèse automatique de réunions.',
  },
  {
    name: 'Semrush',
    mentions: '38%',
    recommendations: '20%',
    avgPosition: '#1.8',
    coverage: '12/30',
    context: 'Cité en référence sur les requêtes de visibilité générale et d’analyse des moteurs de recherche.',
  },
  {
    name: 'HubSpot',
    mentions: '25%',
    recommendations: '14%',
    avgPosition: '#2.3',
    coverage: '8/30',
    context: 'Apparaît dans les réponses généralistes sur les logiciels de marketing automation pour PME.',
  },
]

function ConcurrentsPage() {
  return (
    <ContentLayout title="Concurrents">
      <div className="space-y-6 select-none">
        {/* Rappel de formulation canonique (§6) */}
        <div className="flex items-start gap-3 p-4 rounded-[8px] border border-[#313131] bg-[#141414] text-xs">
          <Info className="size-4 text-[#f2d94e] shrink-0 mt-0.5" />
          <p className="text-[#a7a7a7] leading-relaxed">
            <strong className="text-[#ffffff] font-medium">Principe de mesure Reflet :</strong> Dans les réponses observées sur vos 30 requêtes cibles, les concurrents ci-dessous apparaissent aux côtés de votre marque. Reflet mesure le protocole d'observation défini et non l'ensemble du marché.
          </p>
        </div>

        {/* Tableau des concurrents observés */}
        <div className="p-5 rounded-[8px] border border-[#313131] bg-[#141414] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#ffffff]">Marques observées dans les réponses</h3>
            <span className="text-xs font-mono text-[#7c7c7c]">3 concurrents principaux</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#313131] text-[11px] font-mono text-[#7c7c7c] uppercase">
                  <th className="pb-3 pr-4 font-semibold">Concurrent</th>
                  <th className="pb-3 px-3 text-right font-semibold">Taux de mentions</th>
                  <th className="pb-3 px-3 text-right font-semibold">Recommandations</th>
                  <th className="pb-3 px-3 text-center font-semibold">Position moy.</th>
                  <th className="pb-3 px-3 text-center font-semibold">Couverture</th>
                  <th className="pb-3 pl-3 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e1e1e]">
                {COMPETITORS_DATA.map((c) => (
                  <tr key={c.name} className="hover:bg-[#1e1e1e]/40 transition-colors">
                    <td className="py-3.5 pr-4">
                      <div className="font-semibold text-[#ffffff]">{c.name}</div>
                      <div className="text-[11px] text-[#7c7c7c] mt-0.5 max-w-sm leading-snug">
                        {c.context}
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-right font-mono font-medium text-[#ffffff]">
                      {c.mentions}
                    </td>
                    <td className="py-3.5 px-3 text-right font-mono font-medium text-[#ffffff]">
                      {c.recommendations}
                    </td>
                    <td className="py-3.5 px-3 text-center font-mono font-bold text-[#ffffff]">
                      {c.avgPosition}
                    </td>
                    <td className="py-3.5 px-3 text-center font-mono text-[#a7a7a7]">
                      {c.coverage}
                    </td>
                    <td className="py-3.5 pl-3 text-right">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-[4px] bg-[#1e1e1e] hover:bg-[#313131] text-[#a7a7a7] hover:text-[#ffffff] text-[11px] font-mono transition-colors cursor-pointer"
                        title="Masquer ce concurrent"
                      >
                        <EyeOff className="size-3" />
                        <span>Masquer</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ContentLayout>
  )
}
