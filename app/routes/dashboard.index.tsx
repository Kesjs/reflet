import React, { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  Sparkles,
  Target,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Globe,
  Clock,
  ArrowUpRight,
  Lightbulb,
  Activity,
} from 'lucide-react'
import { ContentLayout } from '@/components/admin-panel/content-layout'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/dashboard/')({
  component: DashboardPage,
})

interface QuestionItem {
  id: string
  query: string
  mention: boolean
  recommendation: boolean
  position: number | null
}

const QUESTIONS_DATA: QuestionItem[] = [
  {
    id: 'q1',
    query: "Meilleur outil d'audit de visibilité pour ChatGPT en 2026",
    mention: true,
    recommendation: true,
    position: 1,
  },
  {
    id: 'q2',
    query: 'Comment optimiser son site pour le Generative Engine Optimization',
    mention: true,
    recommendation: true,
    position: 2,
  },
  {
    id: 'q3',
    query: 'Alternatives françaises aux outils SEO traditionnels pour les moteurs IA',
    mention: true,
    recommendation: true,
    position: 1,
  },
  {
    id: 'q4',
    query: 'Comment savoir si mon entreprise est citée dans les réponses IA',
    mention: true,
    recommendation: false,
    position: 3,
  },
  {
    id: 'q5',
    query: 'Logiciel de veille et surveillance des prompts prospects',
    mention: false,
    recommendation: false,
    position: null,
  },
]

function DashboardPage() {
  const [period, setPeriod] = useState<'7j' | '30j' | '3mois'>('30j')

  return (
    <ContentLayout title="Accueil">
      <div className="space-y-6 select-none">
        {/* ─── 1. HERO DE L'ACCUEIL (§4 & §36D.2) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 rounded-[8px] border border-[#313131] bg-[#141414]">
          {/* Gauche : Salutation, Grand Score Jaune Soufre, Variation & Date */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-mono text-[#a7a7a7]">Bonjour, Studio Reflet</span>
              <h2 className="text-sm font-semibold text-[#7c7c7c] mt-1">Visibilité IA</h2>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#f2d94e]">
                  68
                </span>
                <span className="text-xl font-mono text-[#7c7c7c]">/ 100</span>
              </div>
              <div className="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 rounded-[4px] bg-[#22c55e]/15 text-[#22c55e] text-xs font-mono font-semibold">
                <span>↑ +4 depuis la dernière mesure</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#313131] text-xs font-mono text-[#7c7c7c]">
              <span>Dernière mesure : </span>
              <span className="text-[#ffffff] font-medium">15 septembre</span>
            </div>
          </div>

          {/* Droite : Graphique principal d'évolution avec sélecteur */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#a7a7a7]">
                Évolution temporelle du score de visibilité
              </span>
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

            {/* Courbe vectorielle sobre */}
            <div className="h-[140px] w-full pt-2">
              <svg viewBox="0 0 500 130" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="scoreGradSulfur" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f2d94e" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#f2d94e" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="20" x2="500" y2="20" stroke="#1e1e1e" strokeDasharray="3 3" />
                <line x1="0" y1="65" x2="500" y2="65" stroke="#1e1e1e" strokeDasharray="3 3" />
                <line x1="0" y1="110" x2="500" y2="110" stroke="#1e1e1e" strokeDasharray="3 3" />

                <polygon
                  points="0,120 0,95 70,88 140,78 210,82 280,62 350,55 420,44 500,34 500,120"
                  fill="url(#scoreGradSulfur)"
                />
                <polyline
                  points="0,95 70,88 140,78 210,82 280,62 350,55 420,44 500,34"
                  fill="none"
                  stroke="#f2d94e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="500" cy="34" r="4" fill="#ffffff" stroke="#f2d94e" strokeWidth="2" />
              </svg>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#7c7c7c] pt-2 border-t border-[#313131]">
              <span>Départ : 54 / 100</span>
              <span>Médiane : 64 / 100</span>
              <span className="text-[#ffffff] font-bold">Actuel : 68 / 100</span>
            </div>
          </div>
        </div>

        {/* ─── 2. MÉTRIQUES SECONDAIRES (4 KPI CARDS — §4) ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-[8px] border border-[#313131] bg-[#141414] space-y-2">
            <div className="flex items-center justify-between text-xs text-[#a7a7a7]">
              <span className="font-semibold text-[#ffffff]">Mentions</span>
              <span className="px-1.5 py-0.5 rounded bg-[#22c55e]/15 text-[#22c55e] font-mono text-[11px] font-bold">
                +6%
              </span>
            </div>
            <div className="text-2xl font-bold font-mono text-[#ffffff]">83%</div>
            <p className="text-[11.5px] text-[#7c7c7c] pt-1 border-t border-[#313131]/60">
              25 / 30 questions suivies
            </p>
          </div>

          <div className="p-4 rounded-[8px] border border-[#313131] bg-[#141414] space-y-2">
            <div className="flex items-center justify-between text-xs text-[#a7a7a7]">
              <span className="font-semibold text-[#ffffff]">Recommandations</span>
              <span className="px-1.5 py-0.5 rounded bg-[#22c55e]/15 text-[#22c55e] font-mono text-[11px] font-bold">
                +4%
              </span>
            </div>
            <div className="text-2xl font-bold font-mono text-[#f2d94e]">63%</div>
            <p className="text-[11.5px] text-[#7c7c7c] pt-1 border-t border-[#313131]/60">
              19 / 30 recommandations directes
            </p>
          </div>

          <div className="p-4 rounded-[8px] border border-[#313131] bg-[#141414] space-y-2">
            <div className="flex items-center justify-between text-xs text-[#a7a7a7]">
              <span className="font-semibold text-[#ffffff]">Position moyenne</span>
              <span className="px-1.5 py-0.5 rounded bg-[#6798ff]/15 text-[#6798ff] font-mono text-[11px] font-bold">
                #1.4
              </span>
            </div>
            <div className="text-2xl font-bold font-mono text-[#ffffff]">#1.4</div>
            <p className="text-[11.5px] text-[#7c7c7c] pt-1 border-t border-[#313131]/60">
              Dans les réponses où la marque est citée
            </p>
          </div>

          <div className="p-4 rounded-[8px] border border-[#313131] bg-[#141414] space-y-2">
            <div className="flex items-center justify-between text-xs text-[#a7a7a7]">
              <span className="font-semibold text-[#ffffff]">Présence concurrente</span>
              <span className="px-1.5 py-0.5 rounded bg-[#f59e0b]/15 text-[#f59e0b] font-mono text-[11px] font-bold">
                3 rivaux
              </span>
            </div>
            <div className="text-2xl font-bold font-mono text-[#ffffff]">3 marques</div>
            <p className="text-[11.5px] text-[#7c7c7c] pt-1 border-t border-[#313131]/60">
              Otter.ai, Semrush &amp; HubSpot
            </p>
          </div>
        </div>

        {/* ─── 3. DEUX COLONNES : BLOC ATTENTION & ACTIVITÉ RÉCENTE (§4) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bloc Attention */}
          <div className="p-5 rounded-[8px] border border-[#313131] bg-[#141414] space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#ffffff] flex items-center gap-2">
                <span>Attention</span>
                <span className="px-2 py-0.5 rounded-[4px] bg-[#f2d94e]/15 text-[#f2d94e] font-mono text-[10px] font-bold">
                  2 points d'action
                </span>
              </h3>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-[6px] bg-[#0a0a0a] border border-[#313131] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#ffffff]">Opportunité prioritaire</span>
                  <span className="font-mono text-[10px] text-red-400 bg-red-500/15 px-1.5 py-0.5 rounded">
                    Impact fort
                  </span>
                </div>
                <p className="text-[#a7a7a7]">
                  Expliciter la tarification sur /tarifs pour la requête "outil d'audit IA PME".
                </p>
              </div>

              <div className="p-3 rounded-[6px] bg-[#0a0a0a] border border-[#313131] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#ffffff]">Changement détecté</span>
                  <span className="font-mono text-[10px] text-[#22c55e] bg-[#22c55e]/15 px-1.5 py-0.5 rounded">
                    Vérifié
                  </span>
                </div>
                <p className="text-[#a7a7a7]">
                  Mise à jour du paragraphe produit sur /produit le 14 septembre (16:45).
                </p>
              </div>
            </div>
          </div>

          {/* Bloc Activité récente */}
          <div className="p-5 rounded-[8px] border border-[#313131] bg-[#141414] space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#ffffff]">Activité récente</h3>
              <span className="text-xs font-mono text-[#7c7c7c]">Flux temps réel</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-[6px] bg-[#0a0a0a] border border-[#313131] flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#ffffff]">Mesure hebdomadaire #18 terminée</div>
                  <div className="text-[11px] text-[#7c7c7c]">30 questions mesurées avec succès dans ChatGPT</div>
                </div>
                <span className="font-mono text-[11px] text-[#a7a7a7]">15 sept.</span>
              </div>

              <div className="p-3 rounded-[6px] bg-[#0a0a0a] border border-[#313131] flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#ffffff]">Contenu analysé sans anomalie</div>
                  <div className="text-[11px] text-[#7c7c7c]">18 pages explorées par le Change Detection Engine</div>
                </div>
                <span className="font-mono text-[11px] text-[#a7a7a7]">14 sept.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 4. PERFORMANCE DES QUESTIONS (§4 & §5) ─── */}
        <div className="p-5 rounded-[8px] border border-[#313131] bg-[#141414] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-[#ffffff]">Performance des questions</h3>
              <p className="text-xs text-[#a7a7a7]">
                Observations directes issues du protocole de mesure ChatGPT
              </p>
            </div>
            <span className="text-xs font-mono text-[#7c7c7c]">30 questions suivies</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#313131] text-[11px] font-mono text-[#7c7c7c] uppercase">
                  <th className="pb-3 pr-4 font-semibold">Question</th>
                  <th className="pb-3 px-3 text-center font-semibold">Mention</th>
                  <th className="pb-3 px-3 text-center font-semibold">Recommandation</th>
                  <th className="pb-3 px-3 text-center font-semibold">Position</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e1e1e]">
                {QUESTIONS_DATA.map((q) => (
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ─── 5. DEUX COLONNES : CONCURRENTS & SURVEILLANCE DU SITE (§4) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bloc Concurrents */}
          <div className="p-5 rounded-[8px] border border-[#313131] bg-[#141414] space-y-3">
            <h3 className="text-sm font-bold text-[#ffffff]">Concurrents observés</h3>
            <p className="text-xs text-[#a7a7a7]">
              Dans les réponses observées sur vos requêtes, les concurrents suivants apparaissent le plus fréquemment :
            </p>
            <div className="space-y-2 pt-2 text-xs font-mono">
              <div className="flex items-center justify-between p-2.5 rounded-[6px] bg-[#0a0a0a] border border-[#313131]">
                <span className="text-[#ffffff] font-medium">Otter.ai</span>
                <span className="text-[#a7a7a7]">42% des mentions</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-[6px] bg-[#0a0a0a] border border-[#313131]">
                <span className="text-[#ffffff] font-medium">Semrush</span>
                <span className="text-[#a7a7a7]">38% des mentions</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-[6px] bg-[#0a0a0a] border border-[#313131]">
                <span className="text-[#ffffff] font-medium">HubSpot</span>
                <span className="text-[#a7a7a7]">25% des mentions</span>
              </div>
            </div>
          </div>

          {/* Bloc Surveillance du site */}
          <div className="p-5 rounded-[8px] border border-[#313131] bg-[#141414] space-y-3">
            <h3 className="text-sm font-bold text-[#ffffff]">Surveillance du site</h3>
            <p className="text-xs text-[#a7a7a7]">
              Monitoring automatique de vos pages et détection de modifications.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
              <div className="p-3 rounded-[6px] bg-[#0a0a0a] border border-[#313131] space-y-1">
                <span className="text-[10px] text-[#7c7c7c] block">STATUT DU SITE</span>
                <span className="text-[#22c55e] font-bold flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-[#22c55e]" />
                  Opérationnel
                </span>
              </div>
              <div className="p-3 rounded-[6px] bg-[#0a0a0a] border border-[#313131] space-y-1">
                <span className="text-[10px] text-[#7c7c7c] block">PAGES SUIVIES</span>
                <span className="text-[#ffffff] font-bold">18 pages</span>
              </div>
              <div className="p-3 rounded-[6px] bg-[#0a0a0a] border border-[#313131] space-y-1">
                <span className="text-[10px] text-[#7c7c7c] block">DERNIÈRE VÉRIFICATION</span>
                <span className="text-[#ffffff]">Aujourd'hui, 06:12</span>
              </div>
              <div className="p-3 rounded-[6px] bg-[#0a0a0a] border border-[#313131] space-y-1">
                <span className="text-[10px] text-[#7c7c7c] block">CHANGEMENTS</span>
                <span className="text-[#f2d94e] font-bold">2 modifications</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 6. DERNIÈRE MESURE / PROCHAINE MESURE (§4) ─── */}
        <div className="p-5 rounded-[8px] border border-[#313131] bg-[#141414] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#ffffff]">
                Dernière mesure : 15 septembre (30/30 questions)
              </span>
              <span className="px-2 py-0.5 rounded-[4px] bg-[#22c55e]/15 text-[#22c55e] font-mono text-[10px] font-semibold">
                Complète
              </span>
            </div>
            <p className="text-xs text-[#a7a7a7]">
              Prochaine mesure hebdomadaire programmée : <strong className="text-[#ffffff]">22 septembre 2026</strong> (dans 2 jours).
            </p>
          </div>

          {/* Seul CTA visible en jaune soufre (§2 & reflet-brand-tokens.md) */}
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-[6px] bg-[#c9ab1e] hover:bg-[#c9ab1e]/90 text-[#0b0b0b] text-xs font-bold transition-colors cursor-pointer shadow-sm shrink-0"
          >
            <Sparkles className="size-3.5 text-[#0b0b0b]" />
            <span>Lancer une mesure manuelle</span>
          </button>
        </div>
      </div>
    </ContentLayout>
  )
}
