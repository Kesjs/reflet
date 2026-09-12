import React, { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { TrendingUp, ArrowUpRight, Filter, ChevronRight } from 'lucide-react'
import { ContentLayout } from '@/components/admin-panel/content-layout'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/dashboard/performance')({
  component: PerformancePage,
})

const PERFORMANCE_QUESTIONS = [
  {
    id: 'p1',
    query: "Meilleur outil d'audit de visibilité pour ChatGPT en 2026",
    mention: true,
    recommendation: true,
    position: 1,
    competitors: 'Otter.ai, Semrush',
  },
  {
    id: 'p2',
    query: 'Comment optimiser son site pour le Generative Engine Optimization',
    mention: true,
    recommendation: true,
    position: 2,
    competitors: 'Search Engine Land',
  },
  {
    id: 'p3',
    query: 'Alternatives françaises aux outils SEO traditionnels pour les moteurs IA',
    mention: true,
    recommendation: true,
    position: 1,
    competitors: 'Aucun',
  },
  {
    id: 'p4',
    query: 'Comment savoir si mon entreprise est citée dans les réponses ChatGPT',
    mention: true,
    recommendation: false,
    position: 3,
    competitors: 'HubSpot',
  },
  {
    id: 'p5',
    query: 'Logiciel de veille et surveillance des prompts prospects',
    mention: false,
    recommendation: false,
    position: null,
    competitors: 'Semrush, Brand24',
  },
]

function PerformancePage() {
  const [metric, setMetric] = useState<'mention' | 'recommandation' | 'position'>('mention')

  return (
    <ContentLayout title="Performance">
      <div className="space-y-6 select-none">
        {/* Rappel du score en haut de page (§5) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-[8px] border border-[#313131] bg-[#141414]">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#a7a7a7]">Rappel d'indicateur</span>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-extrabold font-mono text-[#f2d94e]">68 / 100</span>
              <span className="text-xs font-mono text-[#22c55e] font-semibold">↑ +4 pts cette semaine</span>
            </div>
            <p className="text-xs text-[#a7a7a7]">Basé sur 30 questions suivies dans ChatGPT</p>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-[6px] bg-[#0a0a0a] border border-[#313131] text-xs font-mono">
            {(['mention', 'recommandation', 'position'] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMetric(m)}
                className={cn(
                  'px-3 py-1.5 rounded-[4px] transition-colors capitalize cursor-pointer',
                  metric === m
                    ? 'bg-[#ffffff] text-[#0a0a0a] font-bold'
                    : 'text-[#7c7c7c] hover:text-[#ffffff]'
                )}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Tableau des questions suivies (§5) */}
        <div className="p-5 rounded-[8px] border border-[#313131] bg-[#141414] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#ffffff]">Questions du protocole</h3>
            <span className="text-xs font-mono text-[#7c7c7c]">30 questions calibrées</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#313131] text-[11px] font-mono text-[#7c7c7c] uppercase">
                  <th className="pb-3 pr-4 font-semibold">Question</th>
                  <th className="pb-3 px-3 text-center font-semibold">Mention</th>
                  <th className="pb-3 px-3 text-center font-semibold">Recommandation</th>
                  <th className="pb-3 px-3 text-center font-semibold">Position</th>
                  <th className="pb-3 pl-3 text-right font-semibold">Détail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e1e1e]">
                {PERFORMANCE_QUESTIONS.map((q) => (
                  <tr key={q.id} className="hover:bg-[#1e1e1e]/40 transition-colors">
                    <td className="py-3.5 pr-4 max-w-md font-medium text-[#ffffff]">{q.query}</td>
                    <td className="py-3.5 px-3 text-center font-mono">
                      {q.mention ? (
                        <span className="px-2 py-0.5 rounded bg-[#22c55e]/15 text-[#22c55e] text-[11px] font-semibold">
                          Oui
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-[#313131]/60 text-[#7c7c7c] text-[11px]">
                          Non
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 text-center font-mono">
                      {q.recommendation ? (
                        <span className="px-2 py-0.5 rounded bg-[#f2d94e]/15 text-[#f2d94e] text-[11px] font-semibold border border-[#f2d94e]/30">
                          Oui
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-[#313131]/60 text-[#7c7c7c] text-[11px]">
                          Non
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 text-center font-mono font-bold text-[#ffffff]">
                      {q.position ? `#${q.position}` : '—'}
                    </td>
                    <td className="py-3.5 pl-3 text-right">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-[#f2d94e] hover:underline cursor-pointer"
                      >
                        <span>Ouvrir</span>
                        <ChevronRight className="size-3" />
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
