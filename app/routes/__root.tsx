import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Meta, Scripts } from '@tanstack/start'
import type { ReactNode } from 'react'
import '../styles/globals.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Reflet — Mesurer votre visibilité dans ChatGPT',
      },
      {
        name: 'description',
        content: 'Reflet mesure comment votre marque apparaît dans les réponses générées par ChatGPT.',
      },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
