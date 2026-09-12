import type { ReactNode } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { SectionTitle } from '@/components/ui/section-title'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface MarketingPageProps {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
  cta?: boolean
}

export function MarketingPage({
  eyebrow,
  title,
  description,
  children,
  cta = true,
}: MarketingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <SectionWrapper className="pt-32 pb-16">
          <div className="max-w-3xl space-y-6">
            <Badge>{eyebrow}</Badge>
            <SectionTitle variant="display" as="h1">
              {title}
            </SectionTitle>
            <p className="text-lg text-text-secondary leading-relaxed">
              {description}
            </p>
          </div>
        </SectionWrapper>

        {children}

        {cta && (
          <SectionWrapper className="py-16">
            <div className="bg-surface-elevated border border-border rounded-2xl p-12 text-center space-y-6">
              <h2 className="text-h2 font-semibold text-text-primary">
                Voyez ce que ChatGPT dit de votre marque.
              </h2>
              <Button href="/login" size="lg">
                Analyser mon site
              </Button>
            </div>
          </SectionWrapper>
        )}
      </main>

      <Footer />
    </div>
  )
}
