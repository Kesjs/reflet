import React, { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Settings, User, Globe, Target, Bell, CreditCard, Shield } from 'lucide-react'
import { ContentLayout } from '@/components/admin-panel/content-layout'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/dashboard/parametres')({
  component: ParametresPage,
})

const SECTIONS = [
  { id: 'compte', label: 'Compte', icon: User },
  { id: 'site', label: 'Site', icon: Globe },
  { id: 'questions', label: 'Questions', icon: Target },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'abonnement', label: 'Abonnement', icon: CreditCard },
  { id: 'securite', label: 'Sécurité', icon: Shield },
]

function ParametresPage() {
  const [activeSection, setActiveSection] = useState('site')

  return (
    <ContentLayout title="Paramètres">
      <div className="space-y-6 select-none">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Liste des sections (§9) */}
          <div className="space-y-1">
            {SECTIONS.map((sec) => {
              const Icon = sec.icon
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => setActiveSection(sec.id)}
                  className={cn(
                    'w-full flex items-center gap-3 px-3.5 py-2.5 rounded-[6px] text-xs font-medium transition-colors cursor-pointer text-left',
                    activeSection === sec.id
                      ? 'bg-[#ffffff] text-[#0a0a0a] font-bold'
                      : 'text-[#a7a7a7] hover:bg-[#141414] hover:text-[#ffffff]'
                  )}
                >
                  <Icon className="size-4 shrink-0" />
                  <span>{sec.label}</span>
                </button>
              )
            })}
          </div>

          {/* Contenu de la section active */}
          <div className="md:col-span-3 p-6 rounded-[8px] border border-[#313131] bg-[#141414] space-y-6">
            {activeSection === 'site' && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-[#ffffff]">Configuration du site sous surveillance</h3>
                  <p className="text-xs text-[#a7a7a7] mt-0.5">
                    Domaine et pages indexées par le moteur de détection de changements.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-[#a7a7a7] font-mono text-[11px] mb-1">
                      URL DU DOMAINE PRINCIPAL
                    </label>
                    <input
                      type="text"
                      readOnly
                      value="https://reflet.dev"
                      className="w-full px-3 py-2 rounded-[6px] bg-[#0a0a0a] border border-[#313131] text-[#ffffff] font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[#a7a7a7] font-mono text-[11px] mb-1">
                      PAGES SOUS SURVEILLANCE ACTIVE
                    </label>
                    <div className="p-3 rounded-[6px] bg-[#0a0a0a] border border-[#313131] space-y-1.5 font-mono text-[11px] text-[#ffffff]">
                      <div className="flex justify-between">
                        <span>/ (Page d'accueil)</span>
                        <span className="text-[#22c55e]">200 OK</span>
                      </div>
                      <div className="flex justify-between">
                        <span>/produit (Présentation solution)</span>
                        <span className="text-[#22c55e]">200 OK</span>
                      </div>
                      <div className="flex justify-between">
                        <span>/tarifs (Offre et plan unique)</span>
                        <span className="text-[#22c55e]">200 OK</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'abonnement' && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-[#ffffff]">Abonnement Reflet</h3>
                  <p className="text-xs text-[#a7a7a7] mt-0.5">
                    Formule unique transparente adaptée aux PME.
                  </p>
                </div>

                <div className="p-4 rounded-[6px] bg-[#0a0a0a] border border-[#313131] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#ffffff] text-sm">Plan Professionnel</span>
                    <span className="font-mono text-sm font-bold text-[#f2d94e]">75 € / mois</span>
                  </div>
                  <p className="text-xs text-[#a7a7a7]">
                    1 site · 30 questions suivies dans ChatGPT · Mesure hebdomadaire automatique · Détection quotidienne des modifications.
                  </p>
                </div>
              </div>
            )}

            {activeSection !== 'site' && activeSection !== 'abonnement' && (
              <div className="py-8 text-center text-xs text-[#a7a7a7]">
                Section <span className="text-[#ffffff] font-semibold">{activeSection}</span> configurée selon les paramètres de votre compte.
              </div>
            )}
          </div>
        </div>
      </div>
    </ContentLayout>
  )
}
