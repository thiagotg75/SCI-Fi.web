'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ExplorationCardProps {
  icon: string
  title: string
  description: string
  delay?: number
}

const ExplorationCard: React.FC<ExplorationCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => (
  <motion.div
    className="relative group min-h-64 flex flex-col justify-between p-6 border border-neon-cyan/30 rounded-lg bg-dark-900/50 backdrop-blur-sm overflow-hidden hover:border-neon-cyan/70 transition-all"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
  >
    {/* Glow background */}
    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">{title}</h3>
    <p className="text-white/70">{description}</p>
  </motion.div>
)

export const Exploration: React.FC = () => {
  const explorations = [
    {
      icon: '🛸',
      title: 'Naves Estelares',
      description:
        'Explore as tecnologias mais avançadas em propulsão intergaláctica e viagem relativística.',
    },
    {
      icon: '🌌',
      title: 'Galáxias Distantes',
      description:
        'Descubra mundos impossíveis e civilizações além de nossas fronteiras conhecidas.',
    },
    {
      icon: '🔭',
      title: 'Observação Cósmica',
      description:
        'Analise fenômenos astronômicos extraordinários e buracos negros em desenvolvimento.',
    },
    {
      icon: '⚡',
      title: 'Energia Cósmica',
      description:
        'Domine as forças do universo e controle a energia de sistemas estelares inteiros.',
    },
  ]

  return (
    <section
      id="exploration"
      className="min-h-screen py-24 px-6 relative bg-gradient-to-b from-dark-900 via-black to-dark-900 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
            Exploração Cósmica
          </h2>
          <p className="text-white/60 text-lg">
            Embarque em uma jornada extraordinária pelo universo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {explorations.map((item, idx) => (
            <ExplorationCard
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
