import React, { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { History, CheckCircle2, FileEdit, Zap } from 'lucide-react'
import { ContentLayout } from '@/components/admin-panel/content-layout'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/dashboard/historique')({
  component: HistoriquePage,
})

interface HistoryEvent {
  id: string
  type: 'mesure' | 'modification' | 'evenement'
  title: string
  pageOrScope: string
  date: string
  method: string
  importance: 'haute' | 'moyenne' | 'faible'
  details: string
}

const EVENTS_DATA: HistoryEvent[] = [
  {
    id: 'h1',
    type: 'mesure',
    title: 'Mesure officielle hebdomadaire #18',
    pageOrScope: 'Protocole ChatGPT (30 questions)',
    date: '15 septembre 2026, 04:00',
    method: 'Interrogation API OpenAI reproductible',
    importance: 'haute',
    details: 'Score de visibilité : 68/100 (+4 pts). 25 mentions et 19 recommandations directes enregistrées.',
  },
  {
    id: 'h2',
    type: 'modification',
    title: 'Mise à jour du paragraphe présentation produit',
    pageOrScope: 'https://reflet.dev/produit',
    date: '14 septembre 2026, 16:45',
    method: 'Change Detection Engine (Crawl automatique)',
    importance: 'moyenne',
    details: 'Ajout de la mention explicite "Search Console pour les réponses IA".',
  },
  {
    id: 'h3',
    type: 'modification',
    title: 'Ajustement typographique dans le footer',
    pageOrScope: 'https://reflet.dev/',
    date: '12 septembre 2026, 09:20',
    method: 'Change Detection Engine',
    importance: 'faible',
    details: 'Modification mineure du texte des mentions légales. Conservé dans l’historique selon la règle §13.',
  },
  {
    id: 'h4',
    type: 'mesure',
    title: 'Mesure officielle hebdomadaire #17',
    pageOrScope: 'Protocole ChatGPT (30 questions)',
    date: '8 septembre 2026, 04:00',
    method: 'Interrogation API OpenAI',
    importance: 'haute',
    details: 'Score de visibilité : 64/100 (+2 pts). 23 mentions et 18 recommandations directes.',
  },
]

function HistoriquePage() {
  const [filter, setFilter] = useState<'all' | 'mesure' | 'modification'>('all')

  const filteredEvents = EVENTS_DATA.filter((e) => {
    if (filter === 'all') return true
    return e.type === filter
  })

  return (
    <ContentLayout title="Historique">
      <div className="space-y-6 select-none">
        {/* En-tête avec filtres (§8) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-[8px] border border-[#313131] bg-[#141414]">
          <div>
            <h2 className="text-sm font-bold text-[#ffffff]">Timeline des mesures et modifications</h2>
            <p className="text-xs text-[#a7a7a7] mt-0.5">
              Historique inaltérable reliant les évolutions du site client aux mesures observées.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-[6px] bg-[#0a0a0a] border border-[#313131] text-xs font-mono">
            {(['all', 'mesure', 'modification'] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  'px-3 py-1.5 rounded-[4px] transition-colors cursor-pointer capitalize',
                  filter === f
                    ? 'bg-[#ffffff] text-[#0a0a0a] font-bold'
                    : 'text-[#7c7c7c] hover:text-[#ffffff]'
                )}
              >
                {f === 'all' ? 'Tout' : f === 'mesure' ? 'Mesures' : 'Modifications'}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline des événements */}
        <div className="p-5 rounded-[8px] border border-[#313131] bg-[#141414] space-y-4">
          <div className="space-y-4">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="p-4 rounded-[6px] border border-[#313131]/60 bg-[#0a0a0a] space-y-2 hover:border-[#313131] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        'px-2 py-0.5 rounded-[4px] font-mono text-[10px] font-bold uppercase',
                        evt.type === 'mesure'
                          ? 'bg-[#f2d94e]/15 text-[#f2d94e] border border-[#f2d94e]/30'
                          : 'bg-[#6798ff]/15 text-[#6798ff] border border-[#6798ff]/30'
                      )}
                    >
                      {evt.type}
                    </span>
                    <span className="text-xs font-semibold text-[#ffffff]">{evt.title}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#7c7c7c]">{evt.date}</span>
                </div>

                <div className="text-xs text-[#a7a7a7] flex items-center gap-2">
                  <span className="font-mono text-[11px] text-[#ffffff]">{evt.pageOrScope}</span>
                  <span>·</span>
                  <span className="text-[11px]">{evt.method}</span>
                </div>

                <p className="text-xs text-[#ffffff] leading-relaxed pt-1 border-t border-[#1e1e1e]">
                  {evt.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentLayout>
  )
}
