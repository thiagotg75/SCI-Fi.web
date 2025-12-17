import type { Metadata } from 'next'
import '@/globals.css'

export const metadata: Metadata = {
  title: 'Star citezen| Exploração Intergaláctica',
  description:
    'Embarque em uma jornada extraordinária através do espaço com tecnologias futuristas e missões ambiciosas.',
  keywords: [
    'sci-fi',
    'space',
    'exploration',
    'future',
    'technology',
    'universe',
  ],
  authors: [{ name: 'Star citezenTeam' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://sci-fi-space.com',
    siteName: 'Star Citezen',
    title: 'Star citezen| Exploração Intergaláctica',
    description:
      'Embarque em uma jornada extraordinária através do espaço com tecnologias futuristas.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0e27" />
      </head>
      <body className="bg-dark-900 text-white">{children}</body>
    </html>
  )
}
