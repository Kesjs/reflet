import { createFileRoute } from '@tanstack/react-router'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/sections/hero'
import { Problem } from '@/components/sections/problem'
import { HowItWorks } from '@/components/sections/how-it-works'
import { QuestionEngine } from '@/components/sections/question-engine'
import { WhatWeMeasure } from '@/components/sections/what-we-measure'
import { Evidence } from '@/components/sections/evidence'
import { History } from '@/components/sections/history'
import { Pricing } from '@/components/sections/pricing'
import { FAQ } from '@/components/sections/faq'
import { FinalCTA } from '@/components/sections/final-cta'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <QuestionEngine />
        <WhatWeMeasure />
        <Evidence />
        <History />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  )
}
