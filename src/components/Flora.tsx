'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface FloraItemProps {
  icon: string
  name: string
  description: string
  delay?: number
}

const FloraItem: React.FC<FloraItemProps> = ({
  icon,
  name,
  description,
  delay = 0,
}) => (
  <motion.div
    className="relative group"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    <div className="relative border border-neon-cyan/30 rounded-lg p-6 bg-dark-900/50 backdrop-blur-sm text-center h-full overflow-hidden group-hover:border-neon-cyan/70 transition-all">
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
      
      <div className="text-5xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">{name}</h3>
      <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">{description}</p>
    </div>
  </motion.div>
)

export const Flora: React.FC = () => {
  const flora = [
    {
      icon: '🌿',
      name: 'Flores Luminescentes',
      description: 'Plantas que emanam luz própria, encontradas em planetas com atmosferas especiais',
    },
    {
      icon: '🪴',
      name: 'Árvores Sencientes',
      description: 'Organismos vegetais com consciência própria e capacidade de comunicação telepática',
    },
    {
      icon: '🌳',
      name: 'Florestas Cristalinas',
      description: 'Ecossistemas onde a flora e minerais cristalinos coexistem em harmonia',
    },
    {
      icon: '💐',
      name: 'Flores Dimensionais',
      description: 'Plantas que existem em múltiplas dimensões simultaneamente',
    },
    {
      icon: '🌲',
      name: 'Árvores Antígenas',
      description: 'Organismos que existem há milhões de anos, guardiões da história galáctica',
    },
    {
      icon: '🍄',
      name: 'Fungos Cósmicos',
      description: 'Microorganismos que transformam matéria em energia através da fotossíntese cósmica',
    },
  ]

  return (
    <section
      id="flora"
      className="min-h-screen py-24 px-6 relative bg-gradient-to-b from-black via-dark-900 to-dark-800 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl" />
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
            Flora Cósmica
          </h2>
          <p className="text-white/60 text-lg">
            Biodiversidade extraordinária dos mundos que exploramos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flora.map((item, idx) => (
            <FloraItem
              key={idx}
              icon={item.icon}
              name={item.name}
              description={item.description}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Flora specs section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            {
              label: 'Espécies Catalogadas',
              value: '10.847',
              desc: 'Organismos únicos',
            },
            {
              label: 'Mundos Explorados',
              value: '342',
              desc: 'Biomas diferentes',
            },
            {
              label: 'Potencial Genético',
              value: '99%',
              desc: 'Ainda desconhecido',
            },
          ].map((spec, idx) => (
            <div
              key={idx}
              className="text-center p-6 border border-neon-purple/50 rounded-lg"
            >
              <p className="text-neon-blue mb-2">{spec.label}</p>
              <p className="text-4xl font-bold text-neon-cyan mb-2">
                {spec.value}
              </p>
              <p className="text-sm text-white/60">{spec.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
