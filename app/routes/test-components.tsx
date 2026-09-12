import { createFileRoute } from '@tanstack/react-router'
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Grid,
  SectionTitle,
  SectionWrapper,
} from '@/components/ui'

export const Route = createFileRoute('/test-components')({
  component: TestComponents,
})

function TestComponents() {
  return (
    <div className="min-h-screen py-12">
      <SectionWrapper>
        <SectionTitle variant="display" as="h1" className="mb-8">
          Design System Test
        </SectionTitle>

        {/* Badges */}
        <div className="mb-12">
          <SectionTitle variant="h2" className="mb-4">
            Badges
          </SectionTitle>
          <div className="flex gap-4">
            <Badge>Visibilité IA</Badge>
            <Badge variant="outline">Outline Badge</Badge>
          </div>
        </div>

        {/* Buttons */}
        <div className="mb-12">
          <SectionTitle variant="h2" className="mb-4">
            Buttons
          </SectionTitle>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary">Analyser mon site</Button>
            <Button variant="secondary">Voir le produit</Button>
            <Button variant="primary" size="sm">
              Small Button
            </Button>
            <Button variant="primary" size="lg">
              Large Button
            </Button>
          </div>
        </div>

        {/* Typography */}
        <div className="mb-12">
          <SectionTitle variant="h2" className="mb-4">
            Typography
          </SectionTitle>
          <div className="space-y-4">
            <SectionTitle variant="display">Display Title</SectionTitle>
            <SectionTitle variant="h1" as="h1">
              H1 Title
            </SectionTitle>
            <SectionTitle variant="h2">H2 Title</SectionTitle>
            <SectionTitle variant="h3" as="h3">
              H3 Title
            </SectionTitle>
            <p className="text-body text-text-primary">
              Body text (text-primary)
            </p>
            <p className="text-body text-text-secondary">
              Body text (text-secondary)
            </p>
            <p className="text-small text-text-muted">Small text (text-muted)</p>
            <p className="text-caption text-text-muted">
              Caption text (text-muted)
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mb-12">
          <SectionTitle variant="h2" className="mb-4">
            Cards
          </SectionTitle>
          <Grid cols={3}>
            <Card>
              <CardHeader>
                <CardTitle>Présence</CardTitle>
              </CardHeader>
              <CardContent>
                Votre marque est-elle mentionnée dans les réponses générées par ChatGPT ?
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recommandation</CardTitle>
              </CardHeader>
              <CardContent>
                Est-elle proposée comme solution pertinente ?
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Position</CardTitle>
              </CardHeader>
              <CardContent>
                Où apparaît-elle lorsqu'une liste est générée ?
              </CardContent>
            </Card>
          </Grid>
        </div>

        {/* Grid Variants */}
        <div className="mb-12">
          <SectionTitle variant="h2" className="mb-4">
            Grid Variants
          </SectionTitle>
          <div className="space-y-8">
            <div>
              <p className="text-small text-text-muted mb-4">Grid cols 2:</p>
              <Grid cols={2}>
                <Card>
                  <CardContent>Item 1</CardContent>
                </Card>
                <Card>
                  <CardContent>Item 2</CardContent>
                </Card>
              </Grid>
            </div>
            <div>
              <p className="text-small text-text-muted mb-4">Grid cols 4:</p>
              <Grid cols={4}>
                <Card>
                  <CardContent>Item 1</CardContent>
                </Card>
                <Card>
                  <CardContent>Item 2</CardContent>
                </Card>
                <Card>
                  <CardContent>Item 3</CardContent>
                </Card>
                <Card>
                  <CardContent>Item 4</CardContent>
                </Card>
              </Grid>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-12">
          <SectionTitle variant="h2" className="mb-4">
            Color Palette
          </SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="w-full h-24 bg-background border border-border rounded-lg mb-2"></div>
              <p className="text-small text-text-muted">background</p>
            </div>
            <div>
              <div className="w-full h-24 bg-surface border border-border rounded-lg mb-2"></div>
              <p className="text-small text-text-muted">surface</p>
            </div>
            <div>
              <div className="w-full h-24 bg-surface-elevated border border-border rounded-lg mb-2"></div>
              <p className="text-small text-text-muted">surface-elevated</p>
            </div>
            <div>
              <div className="w-full h-24 bg-brand rounded-lg mb-2"></div>
              <p className="text-small text-text-muted">brand (cyan)</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
