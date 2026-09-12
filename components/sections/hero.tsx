import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Terminal,
  Activity,
  Cpu,
} from 'lucide-react'
import { BlueprintGrid } from '@/components/ui/blueprint-grid'

export function Hero() {
  return (
    <BlueprintGrid className="px-4 pt-32 pb-24 sm:px-8 sm:pt-36 sm:pb-32">
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-center text-center">
        {/* ─── 1. BADGE TECHNIQUE DOVETAIL (JETBRAINS MONO + BALISE INDIGO) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="/produit/visibilite-ia"
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#313131] bg-[#141414]/90 px-3.5 py-1.5 text-[12px] font-mono tracking-wide text-[#a7a7a7] backdrop-blur-md transition-all hover:border-[#6798ff]/50 hover:bg-[#1e1e1e] hover:text-[#ffffff] shadow-2xs"
          >
            {/* Balise lumineuse Soft Indigo (#6798ff) */}
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6798ff] opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-[#6798ff]" />
            </span>
            <span>L'audit de référence pour les moteurs de réponse IA</span>
            <ArrowUpRight className="size-3.5 text-[#7c7c7c] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#6798ff]" />
          </a>
        </motion.div>

        {/* ─── 2. TITRE DISPLAY VERROUILLÉ STRICTEMENT SUR 2 LIGNES ─── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-5xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-medium tracking-[-0.035em] text-[#ffffff] leading-[1.18]">
            <span className="block whitespace-normal md:whitespace-nowrap">
              Mesurez la visibilité de votre marque
            </span>

            <span className="block mt-1 sm:mt-2 whitespace-normal md:whitespace-nowrap">
              dans les recommandations de{' '}
              {/* ─── L'ÉTINCELLE SOFT INDIGO CENTRALE (#6798ff) SUR [CHATGPT] ─── */}
              <span className="relative inline-flex items-center align-baseline px-3 sm:px-3.5 py-0.5 rounded-[8px] border border-[#6798ff]/50 bg-[#6798ff]/10 text-[#6798ff] shadow-[0_0_28px_rgba(103,152,255,0.32)] transition-all hover:shadow-[0_0_36px_rgba(103,152,255,0.48)] hover:border-[#6798ff]/70 group/badge select-none">
                {/* Micro-mires d'angle blueprint */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-1 -left-1 text-[8px] font-mono text-[#6798ff]/60 leading-none"
                >
                  +
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-1 -right-1 text-[8px] font-mono text-[#6798ff]/60 leading-none"
                >
                  +
                </span>

                {/* Étincelle animée */}
                <span className="relative font-semibold tracking-normal text-[#6798ff] flex items-center gap-1.5">
                  <span className="text-xs text-[#6798ff] animate-pulse">✦</span>
                  <span>ChatGPT</span>
                </span>
              </span>
              .
            </span>
          </h1>
        </motion.div>

        {/* ─── 3. SOUS-TITRE HARMONISÉ EN GRIS ASH (#A7A7A7) ─── */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-[#a7a7a7] leading-[1.6] tracking-[-0.015em]"
        >
          Reflet simule les questions réelles de vos prospects, analyse les réponses
          générées et vous révèle qui prend votre place pour vous hisser en première position.
        </motion.p>

        {/* ─── 4. DOUBLES BOUTONS D'ACTION DOVETAIL (RAYON 8PX STRICT) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto justify-center"
        >
          {/* Bouton Primaire : Blanc pur (#ffffff Bone), texte noir, bord 8px */}
          <a
            href="/login"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[8px] bg-[#ffffff] hover:bg-[#ffffff]/90 text-[#0a0a0a] text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Analyser mon site</span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Bouton Secondaire : Fond Graphite (#141414), bord Slate Edge (#313131) */}
          <a
            href="/produit/vue-ensemble"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[8px] bg-[#141414] hover:bg-[#1e1e1e] border border-[#313131] hover:border-[#454545] text-[#ffffff] text-sm font-medium transition-all cursor-pointer"
          >
            <span>Voir le produit</span>
            <ArrowUpRight className="size-4 text-[#7c7c7c] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ffffff]" />
          </a>
        </motion.div>

        {/* ─── 5. BANDEAU DE RÉASSURANCE DISCRET ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="mt-5 flex items-center justify-center gap-2 text-xs text-[#7c7c7c] font-mono"
        >
          <CheckCircle2 className="size-3.5 text-[#6798ff]" />
          <span>1 site inclus · 30 questions ciblées · audit continu sans configuration</span>
        </motion.div>

        {/* ─── 6. CENTREPIECE MOCKUP : CENTRE DE CONTRÔLE BLUEPRINT DOVETAIL ─── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-14 w-full max-w-4xl"
        >
          {/* Lueur Soft Indigo feutrée derrière le conteneur */}
          <div
            className="pointer-events-none absolute -inset-2 rounded-2xl opacity-25 blur-3xl -z-10"
            style={{
              background:
                'radial-gradient(circle at 50% 0%, rgba(103, 152, 255, 0.35) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          {/* Boîtier principal : Graphite (#141414), bord Slate Edge (#313131), rayon 8px */}
          <div className="overflow-hidden rounded-[8px] border border-[#313131] bg-[#141414] shadow-2xl text-left">
            {/* Barre de statut supérieure style Terminal de mesure */}
            <div className="flex items-center justify-between border-b border-[#313131] px-4 py-3 bg-[#0a0a0a]/90 font-mono text-[11px]">
              <div className="flex items-center gap-3">
                {/* 3 points d'état monochromes discrets */}
                <div className="flex gap-1.5">
                  <span className="size-2 rounded-full bg-[#313131]" />
                  <span className="size-2 rounded-full bg-[#313131]" />
                  <span className="size-2 rounded-full bg-[#6798ff]" />
                </div>

                <div className="h-3.5 w-px bg-[#313131] mx-1" />

                <div className="flex items-center gap-2 text-[#a7a7a7]">
                  <Terminal className="size-3.5 text-[#6798ff]" />
                  <span className="font-semibold text-[#ffffff]">AUDIT TELEMETRY</span>
                  <span className="text-[#7c7c7c]">:: CHATGPT-4O</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[#7c7c7c]">
                <span className="size-1.5 rounded-full bg-[#6798ff] animate-pulse" />
                <span className="text-[#a7a7a7]">24/7 SURVEILLANCE</span>
              </div>
            </div>

            {/* Corps du centre de commande */}
            <div className="p-5 sm:p-7 space-y-6">
              {/* Question cible du prospect (Simulation réelle) */}
              <div className="p-4 rounded-[6px] border border-[#313131] bg-[#0a0a0a] space-y-1.5">
                <div className="flex items-center justify-between text-[10.5px] font-mono text-[#7c7c7c] uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 text-[#6798ff]">
                    <Cpu className="size-3" />
                    <span>Requête Prospect Simulée #14</span>
                  </span>
                  <span>Moteur : GPT-4o Search</span>
                </div>
                <div className="text-sm sm:text-[15px] font-medium text-[#ffffff]">
                  « Quel est le meilleur logiciel pour auditer sa visibilité dans ChatGPT en 2026 ? »
                </div>
              </div>

              {/* Analyse en direct des recommandations */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#a7a7a7] font-mono">
                  <span>CLASSEMENT D'AUTORITÉ GÉNÉRÉ</span>
                  <span className="text-[#6798ff] font-semibold">Taux de citation : 84%</span>
                </div>

                {/* 1ère Position : Votre Marque mise en valeur par l'Indigo Soft */}
                <div className="rounded-[6px] border border-[#6798ff]/50 bg-[#6798ff]/10 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[0_0_20px_rgba(103,152,255,0.12)]">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#ffffff]">
                        1. Votre Marque
                      </span>
                      <span className="px-2 py-0.5 rounded-[4px] bg-[#6798ff] text-[#0a0a0a] font-mono font-bold text-[10px] uppercase tracking-wider">
                        Recommandé #1
                      </span>
                    </div>
                    <p className="text-xs text-[#a7a7a7] max-w-lg">
                      « Cité comme référence en tête de réponse : audit continu de 30 requêtes, détection de concurrents et alertes en direct. »
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 sm:text-right font-mono">
                    <div className="text-right">
                      <div className="text-xs font-bold text-[#6798ff]">Score 84/100</div>
                      <div className="text-[10.5px] text-[#7c7c7c]">Top 1 absolu</div>
                    </div>
                  </div>
                </div>

                {/* 2ème Position : Concurrent A (neutre Dovetail) */}
                <div className="rounded-[6px] border border-[#313131] bg-[#1e1e1e]/60 p-3.5 flex items-center justify-between gap-3 text-[#7c7c7c]">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium text-[#a7a7a7]">
                      2. Concurrent Historique A
                    </div>
                    <p className="text-xs text-[#7c7c7c]">
                      « Mentionné en milieu de texte sans citation directe de sources techniques. »
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#7c7c7c]">Rang #2 · 42%</span>
                </div>

                {/* 3ème Position : Concurrent B (neutre Dovetail) */}
                <div className="rounded-[6px] border border-[#313131] bg-[#1e1e1e]/60 p-3.5 flex items-center justify-between gap-3 text-[#7c7c7c]">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium text-[#a7a7a7]">
                      3. Plateforme Générique B
                    </div>
                    <p className="text-xs text-[#7c7c7c]">
                      « Cité uniquement comme alternative générale sans cas d'usage précis. »
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#7c7c7c]">Rang #3 · 28%</span>
                </div>
              </div>

              {/* Barre de télémétrie inférieure */}
              <div className="pt-2 border-t border-[#313131] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#7c7c7c]">
                <div className="flex items-center gap-2">
                  <Activity className="size-3 text-[#6798ff]" />
                  <span>ÉCHANTILLON : 30 / 30 QUESTIONS CIBLES</span>
                </div>
                <div className="text-[#a7a7a7]">
                  GAINS DÉTECTÉS : <span className="text-[#6798ff] font-bold">+18% DE CITATIONS ACTIVES</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </BlueprintGrid>
  )
}
