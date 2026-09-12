import React, { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  Sparkles,
  Target,
  Users,
  Activity,
  ArrowUpRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Search,
  Filter,
  Eye,
  SlidersHorizontal,
} from 'lucide-react'
import { ContentLayout } from '@/components/admin-panel/content-layout'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/dashboard/')({
  component: DashboardPage,
})

interface QuestionItem {
  id: string
  query: string
  engine: string
  mentionShare: number
  isRecommended: boolean
  rank: number | null
  competitor: string
}

const QUESTIONS_DATA: QuestionItem[] = [
  {
    id: 'q1',
    query: "Meilleur outil d'audit de visibilité pour ChatGPT en 2026",
    engine: 'ChatGPT-4o',
    mentionShare: 88,
    isRecommended: true,
    rank: 1,
    competitor: 'Otter.ai (18%)',
  },
  {
    id: 'q2',
    query: 'Comment optimiser son site pour le Generative Engine Optimization',
    engine: 'ChatGPT-4o',
    mentionShare: 76,
    isRecommended: true,
    rank: 1.8,
    competitor: 'Search Engine Land (32%)',
  },
  {
    id: 'q3',
    query: 'Alternatives françaises aux outils SEO traditionnels pour les moteurs IA',
    engine: 'ChatGPT-4o',
    mentionShare: 92,
    isRecommended: true,
    rank: 1,
    competitor: 'Aucun concurrent direct',
  },
  {
    id: 'q4',
    query: 'Comment savoir si mon entreprise est citée dans les réponses IA',
    engine: 'ChatGPT-4o',
    mentionShare: 64,
    isRecommended: false,
    rank: 2.4,
    competitor: 'HubSpot (29%)',
  },
  {
    id: 'q5',
    query: 'Logiciel de veille et surveillance des prompts prospects',
    engine: 'ChatGPT-4o',
    mentionShare: 54,
    isRecommended: false,
    rank: 2.8,
    competitor: 'Semrush (45%)',
  },
]

function DashboardPage() {
  const [period, setPeriod] = useState<'7j' | '30j' | '3mois'>('30j')
  const [tableFilter, setTableFilter] = useState<'all' | 'recommended' | 'cited'>('all')

  const filteredQuestions = QUESTIONS_DATA.filter((q) => {
    if (tableFilter === 'recommended') return q.isRecommended
    if (tableFilter === 'cited') return !q.isRecommended
    return true
  })

  return (
    <ContentLayout title="Vue Cockpit">
      <div className="space-y-6 select-none">
        {/* ─── 1. BANDEAU DE CONTRÔLE STYLE DEMO-DARK-MIN ─── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-[8px] border border-[#313131] bg-[#141414]">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-[6px] bg-[#6798ff]/10 text-[#6798ff] border border-[#6798ff]/30">
              <Sparkles className="size-4.5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#ffffff]">
                  reflet.dev · Audit GEO Continu
                </span>
                <span className="px-2 py-0.5 rounded-[4px] bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30 font-mono text-[10px] font-semibold">
                  Actif 24/7
                </span>
              </div>
              <p className="text-xs text-[#a7a7a7] mt-0.5">
                30 requêtes cibles simulées quotidiennement sur ChatGPT-4o Search.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center p-1 rounded-[6px] bg-[#0a0a0a] border border-[#313131] text-xs font-mono">
              {(['7j', '30j', '3mois'] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPeriod(p)}
                  className={cn(
                    'px-2.5 py-1 rounded-[4px] transition-colors cursor-pointer',
                    period === p
                      ? 'bg-[#ffffff] text-[#0a0a0a] font-bold'
                      : 'text-[#7c7c7c] hover:text-[#ffffff]'
                  )}
                >
                  {p === '7j' ? '7 jours' : p === '30j' ? '30 jours' : '3 mois'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ─── 2. 4 CARTES KPIS (CRISP 8PX) ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* KPI 1 */}
          <div className="p-4 rounded-[8px] border border-[#313131] bg-[#141414] hover:border-[#6798ff]/40 transition-colors space-y-2">
            <div className="flex items-center justify-between text-xs text-[#a7a7a7]">
              <span className="font-semibold text-[#ffffff]">Score de Visibilité</span>
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-[4px] bg-[#22c55e]/15 text-[#22c55e] font-mono text-[11px] font-bold">
                +4 pts
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 font-mono">
              <span className="text-2xl sm:text-3xl font-bold text-[#ffffff]">68</span>
              <span className="text-xs text-[#7c7c7c]">/100</span>
            </div>
            <p className="text-[11.5px] text-[#7c7c7c] pt-1 border-t border-[#313131]/60">
              Moyenne pondérée sur 30 questions
            </p>
          </div>

          {/* KPI 2 */}
          <div className="p-4 rounded-[8px] border border-[#313131] bg-[#141414] hover:border-[#6798ff]/40 transition-colors space-y-2">
            <div className="flex items-center justify-between text-xs text-[#a7a7a7]">
              <span className="font-semibold text-[#ffffff]">Taux de Recommandation</span>
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-[4px] bg-[#22c55e]/15 text-[#22c55e] font-mono text-[11px] font-bold">
                +7%
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 font-mono">
              <span className="text-2xl sm:text-3xl font-bold text-[#6798ff]">72%</span>
            </div>
            <p className="text-[11.5px] text-[#7c7c7c] pt-1 border-t border-[#313131]/60">
              Cité en 1re ou 2e position (21/30)
            </p>
          </div>

          {/* KPI 3 */}
          <div className="p-4 rounded-[8px] border border-[#313131] bg-[#141414] hover:border-[#6798ff]/40 transition-colors space-y-2">
            <div className="flex items-center justify-between text-xs text-[#a7a7a7]">
              <span className="font-semibold text-[#ffffff]">Part de Voix IA</span>
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-[4px] bg-[#6798ff]/15 text-[#6798ff] font-mono text-[11px] font-bold">
                +3%
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 font-mono">
              <span className="text-2xl sm:text-3xl font-bold text-[#ffffff]">42%</span>
            </div>
            <p className="text-[11.5px] text-[#7c7c7c] pt-1 border-t border-[#313131]/60">
              Sur les requêtes de votre secteur
            </p>
          </div>

          {/* KPI 4 */}
          <div className="p-4 rounded-[8px] border border-[#313131] bg-[#141414] hover:border-[#6798ff]/40 transition-colors space-y-2">
            <div className="flex items-center justify-between text-xs text-[#a7a7a7]">
              <span className="font-semibold text-[#ffffff]">Pression Concurrentielle</span>
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-[4px] bg-[#f59e0b]/15 text-[#f59e0b] font-mono text-[11px] font-bold">
                3 rivaux
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 font-mono">
              <span className="text-2xl sm:text-3xl font-bold text-[#ffffff]">55%</span>
            </div>
            <p className="text-[11.5px] text-[#7c7c7c] pt-1 border-t border-[#313131]/60">
              Semrush, Otter.ai &amp; HubSpot
            </p>
          </div>
        </div>

        {/* ─── 3. GRAPHIQUE TEMPOREL & JAUGE D'ATTRIBUTION ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Graphique de Visibilité SVG sur mesure */}
          <div className="lg:col-span-2 p-5 rounded-[8px] border border-[#313131] bg-[#141414] space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#ffffff]">
                  Évolution du Score de Visibilité
                </h3>
                <p className="text-xs text-[#a7a7a7]">
                  Tendance consolidée sur les simulations quotidiennes de requêtes
                </p>
              </div>
              <span className="text-xs font-mono text-[#6798ff] font-semibold">
                Tendance haussière : +14 pts
              </span>
            </div>

            {/* Courbe vectorielle propre */}
            <div className="h-[200px] w-full pt-4">
              <svg viewBox="0 0 500 160" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6798ff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#6798ff" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Lignes repères horizontales */}
                <line x1="0" y1="30" x2="500" y2="30" stroke="#1e1e1e" strokeDasharray="3 3" />
                <line x1="0" y1="80" x2="500" y2="80" stroke="#1e1e1e" strokeDasharray="3 3" />
                <line x1="0" y1="130" x2="500" y2="130" stroke="#1e1e1e" strokeDasharray="3 3" />

                {/* Surface dégradée */}
                <polygon
                  points="0,150 0,110 70,100 140,88 210,92 280,72 350,65 420,52 500,42 500,150"
                  fill="url(#scoreGrad)"
                />
                {/* Ligne de score principale Soft Indigo */}
                <polyline
                  points="0,110 70,100 140,88 210,92 280,72 350,65 420,52 500,42"
                  fill="none"
                  stroke="#6798ff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Point final en pulsation */}
                <circle cx="500" cy="42" r="4" fill="#ffffff" stroke="#6798ff" strokeWidth="2" />
              </svg>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#7c7c7c] pt-2 border-t border-[#313131]">
              <span>Départ : 54/100</span>
              <span>Médiane : 64/100</span>
              <span className="text-[#ffffff] font-bold">Actuel : 68/100</span>
            </div>
          </div>

          {/* Jauge circulaire d'attribution */}
          <div className="p-5 rounded-[8px] border border-[#313131] bg-[#141414] flex flex-col justify-between items-center text-center">
            <div className="w-full text-left">
              <h3 className="text-sm font-bold text-[#ffffff]">Domination des Réponses</h3>
              <p className="text-xs text-[#a7a7a7]">Taux de recommandation active</p>
            </div>

            <div className="py-4">
              <div className="relative size-32">
                <svg viewBox="0 0 120 120" className="size-full -rotate-90">
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    fill="transparent"
                    stroke="#1e1e1e"
                    strokeWidth="10"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    fill="transparent"
                    stroke="#6798ff"
                    strokeWidth="10"
                    strokeDasharray={2 * Math.PI * 48}
                    strokeDashoffset={2 * Math.PI * 48 * (1 - 0.72)}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
                  <span className="text-3xl font-extrabold text-[#ffffff]">72%</span>
                  <span className="text-[10px] text-[#a7a7a7]">Recommandé</span>
                </div>
              </div>
            </div>

            <div className="w-full pt-3 border-t border-[#313131] text-[11px] font-mono text-[#a7a7a7] flex items-center justify-between">
              <span>Objectif cible : 80%</span>
              <span className="text-[#6798ff] font-bold">+18% ce mois</span>
            </div>
          </div>
        </div>

        {/* ─── 4. ACTIONS & ALERTES PRIORITAIRES ─── */}
        <div className="p-5 rounded-[8px] border border-[#313131] bg-[#141414] space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#ffffff] flex items-center gap-2">
              <span>Alertes &amp; Opportunités Immédiates</span>
              <span className="px-2 py-0.5 rounded-[4px] bg-[#f59e0b]/15 text-[#f59e0b] border border-[#f59e0b]/30 font-mono text-[10px] font-bold">
                2 requêtes à surveiller
              </span>
            </h3>
          </div>

          <div className="space-y-2.5">
            {/* Alerte 1 */}
            <div className="p-3.5 rounded-[6px] border border-[#313131] bg-[#0a0a0a] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-red-500/15 text-red-400 font-mono text-[10px] font-bold">
                    Dépassement
                  </span>
                  <span className="text-xs font-semibold text-[#ffffff]">
                    « Meilleur logiciel d'audit de visibilité IA pour entreprise »
                  </span>
                </div>
                <p className="text-[11.5px] text-[#a7a7a7]">
                  Otter.ai est cité en première position à votre place en raison de benchmarks récents.
                </p>
              </div>
              <button
                type="button"
                className="px-3 py-1.5 rounded-[6px] bg-[#1e1e1e] hover:bg-[#313131] text-[#ffffff] text-xs font-medium transition-colors cursor-pointer shrink-0"
              >
                Inspecter le prompt
              </button>
            </div>

            {/* Alerte 2 */}
            <div className="p-3.5 rounded-[6px] border border-[#313131] bg-[#0a0a0a] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-[#6798ff]/15 text-[#6798ff] font-mono text-[10px] font-bold">
                    Opportunité forte
                  </span>
                  <span className="text-xs font-semibold text-[#ffffff]">
                    « Logiciel français d'audit pour moteurs de réponse IA »
                  </span>
                </div>
                <p className="text-[11.5px] text-[#a7a7a7]">
                  Votre site est actuellement en position #2. Une mise à jour de la documentation suffit pour le Top 1.
                </p>
              </div>
              <button
                type="button"
                className="px-3 py-1.5 rounded-[6px] bg-[#6798ff] hover:bg-[#6798ff]/90 text-[#0a0a0a] text-xs font-bold transition-colors cursor-pointer shrink-0"
              >
                Optimiser la page
              </button>
            </div>
          </div>
        </div>

        {/* ─── 5. TABLE DES 30 QUESTIONS CIBLES (STYLE SHADCN) ─── */}
        <div className="p-5 rounded-[8px] border border-[#313131] bg-[#141414] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-[#ffffff]">
                Surveillance des 30 Questions Cibles
              </h3>
              <p className="text-xs text-[#a7a7a7]">
                Positions et citations générées lors des tests réels sur ChatGPT-4o
              </p>
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-[6px] bg-[#0a0a0a] border border-[#313131] text-xs font-mono">
              <button
                type="button"
                onClick={() => setTableFilter('all')}
                className={cn(
                  'px-2 py-1 rounded-[4px] transition-colors cursor-pointer',
                  tableFilter === 'all'
                    ? 'bg-[#ffffff] text-[#0a0a0a] font-bold'
                    : 'text-[#7c7c7c] hover:text-[#ffffff]'
                )}
              >
                Toutes ({QUESTIONS_DATA.length})
              </button>
              <button
                type="button"
                onClick={() => setTableFilter('recommended')}
                className={cn(
                  'px-2 py-1 rounded-[4px] transition-colors cursor-pointer',
                  tableFilter === 'recommended'
                    ? 'bg-[#ffffff] text-[#0a0a0a] font-bold'
                    : 'text-[#7c7c7c] hover:text-[#ffffff]'
                )}
              >
                Recommandées
              </button>
              <button
                type="button"
                onClick={() => setTableFilter('cited')}
                className={cn(
                  'px-2 py-1 rounded-[4px] transition-colors cursor-pointer',
                  tableFilter === 'cited'
                    ? 'bg-[#ffffff] text-[#0a0a0a] font-bold'
                    : 'text-[#7c7c7c] hover:text-[#ffffff]'
                )}
              >
                Citations simples
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#313131] text-[11px] font-mono text-[#7c7c7c] uppercase tracking-wider">
                  <th className="pb-3 pr-4 font-semibold">Question cible simulée</th>
                  <th className="pb-3 px-3 text-right font-semibold">Taux de citation</th>
                  <th className="pb-3 px-3 text-center font-semibold">Recommandation</th>
                  <th className="pb-3 px-3 text-center font-semibold">Rang médian</th>
                  <th className="pb-3 px-3 font-semibold">Principal rival</th>
                  <th className="pb-3 pl-3 text-right font-semibold">Audit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e1e1e]">
                {filteredQuestions.map((q) => (
                  <tr key={q.id} className="hover:bg-[#1e1e1e]/40 transition-colors">
                    <td className="py-3.5 pr-4 max-w-sm">
                      <div className="font-semibold text-[#ffffff] truncate">{q.query}</div>
                      <div className="text-[10.5px] font-mono text-[#7c7c7c] mt-0.5">
                        {q.engine}
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-right font-mono font-medium text-[#ffffff]">
                      {q.mentionShare}%
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      {q.isRecommended ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] bg-[#6798ff]/15 text-[#6798ff] font-mono text-[10.5px] font-semibold border border-[#6798ff]/30">
                          Recommandé #1
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] bg-[#1e1e1e] text-[#a7a7a7] font-mono text-[10.5px]">
                          Citation simple
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 text-center font-mono font-bold text-[#ffffff]">
                      {q.rank ? `#${q.rank}` : '—'}
                    </td>
                    <td className="py-3.5 px-3 text-[#a7a7a7]">{q.competitor}</td>
                    <td className="py-3.5 pl-3 text-right">
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 text-[11.5px] font-mono text-[#6798ff] hover:text-[#6798ff]/80 transition-colors cursor-pointer"
                      >
                        <span>Détails</span>
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
