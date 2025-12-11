import React from 'react'
import { Navigation } from '@/components/Navigation'
import { StarField } from '@/components/StarField'
import { Hero } from '@/components/Hero'
import { Exploration } from '@/components/Exploration'
import { Missions } from '@/components/Missions'
import { Technology } from '@/components/Technology'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-space-900 via-space-800 to-space-900">
      <StarField />
      <Navigation />
      
      <Hero
        title="EXPLORAÇÃO ESTELAR"
        subtitle="Bem-vindo ao futuro da humanidade. Embarque em uma jornada cósmica incomparável através das galáxias mais distantes."
        cta="Iniciar Exploração"
      />
      
      <Exploration />
      <Missions />
      <Technology />
      <Contact />
      <Footer />
    </div>
  )
}
