'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface TechItemProps {
  icon: string
  name: string
  description: string
  delay?: number
}

const TechItem: React.FC<TechItemProps> = ({
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
    <div className="relative border border-neon-cyan/30 rounded-lg p-6 bg-space-900/50 backdrop-blur-sm text-center h-full overflow-hidden group-hover:border-neon-cyan/70 transition-all">
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
      
      <div className="text-5xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">{name}</h3>
      <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">{description}</p>
    </div>
  </motion.div>
)

export const Technology: React.FC = () => {
  const technologies = [
    {
      icon: '⚙️',
      name: 'Propulsão Warp',
      description: 'Tecnologia de distorção espaço-tempo para velocidade superluminal',
    },
    {
      icon: '🛡️',
      name: 'Escudos Plasmáticos',
      description: 'Proteção contra radiação e impactos de asteroides',
    },
    {
      icon: '🤖',
      name: 'IA Quântica',
      description: 'Inteligência artificial baseada em computação quântica',
    },
    {
      icon: '🔋',
      name: 'Reatores de Fusão',
      description: 'Geração infinita de energia através da fusão nuclear',
    },
    {
      icon: '📡',
      name: 'Comunicação Hiperespacial',
      description: 'Transmissão instantânea através de dimensões paralelas',
    },
    {
      icon: '🔬',
      name: 'Terraformação Ativa',
      description: 'Modificação ambiental para habitação humana em dias',
    },
  ]

  return (
    <section
      id="technology"
      className="min-h-screen py-24 px-6 relative bg-gradient-to-b from-black via-space-900 to-space-800 overflow-hidden"
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
            Tecnologias Avançadas
          </h2>
          <p className="text-white/60 text-lg">
            Inovações que definem o futuro da exploração espacial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, idx) => (
            <TechItem
              key={idx}
              icon={tech.icon}
              name={tech.name}
              description={tech.description}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Tech specs section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            {
              label: 'Velocidade Máxima',
              value: '99.99c',
              desc: 'Velocidade da luz',
            },
            {
              label: 'Autonomia de Voo',
              value: '50 Anos',
              desc: 'Sem necessidade de reabastecimento',
            },
            {
              label: 'Capacidade de Carga',
              value: '10.000 T',
              desc: 'Toneladas métricas',
            },
          ].map((spec, idx) => (
            <div
              key={idx}
              className="text-center p-6 border border-neon-purple/50 rounded-lg"
            >
              <p className="text-neon-purple mb-2">{spec.label}</p>
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
