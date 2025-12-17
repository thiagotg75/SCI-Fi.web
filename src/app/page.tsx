import React from 'react'
import { Navigation } from '@/components/Navigation'
import { StarField } from '@/components/StarField'
import { Hero } from '@/components/Hero'
import { Exploration } from '@/components/Exploration'
import { Starships } from '@/components/Starships'
import { Flora } from '@/components/Flora'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
      <StarField />
      <Navigation />
      
      <Hero
        title="Star Citezen"
        subtitle=""
        cta="Iniciar Exploração"
      />
      
      <Exploration />
      <Starships />
      <Flora />
      <Contact />
      <Footer />
    </div>
  )
}
