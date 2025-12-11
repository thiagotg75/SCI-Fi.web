'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface MissionProps {
  number: number
  title: string
  description: string
  status: 'active' | 'completed' | 'planned'
  delay?: number
}

const MissionCard: React.FC<MissionProps> = ({
  number,
  title,
  description,
  status,
  delay = 0,
}) => {
  const statusColors = {
    active: 'border-neon-cyan bg-neon-cyan/5',
    completed: 'border-green-500 bg-green-500/5',
    planned: 'border-neon-purple bg-neon-purple/5',
  }

  const statusLabels = {
    active: '🔴 Ativa',
    completed: '✅ Concluída',
    planned: '⏳ Planejada',
  }

  return (
    <motion.div
      className={`border-2 rounded-lg p-6 ${statusColors[status]} backdrop-blur-sm`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ x: 10 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl font-bold text-neon-cyan opacity-20">
          {String(number).padStart(2, '0')}
        </div>
        <span className="text-xs px-3 py-1 bg-white/10 rounded-full">
          {statusLabels[status]}
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-white/60">{description}</p>
    </motion.div>
  )
}

export const Missions: React.FC = () => {
  const missions = [
    {
      number: 1,
      title: 'Operação Centauro',
      description:
        'Primeira missão tripulada para Proxima Centauri com objetivo de estabelecer colônia permanente.',
      status: 'active' as const,
    },
    {
      number: 2,
      title: 'Sonda Andômeda',
      description:
        'Missão de reconhecimento não-tripulada para a galáxia de Andrômeda com duração de 150 anos.',
      status: 'active' as const,
    },
    {
      number: 3,
      title: 'Resgate Orbital',
      description:
        'Operação bem-sucedida de salvamento de tripulação em órbita de Marte. Todos retornaram com segurança.',
      status: 'completed' as const,
    },
    {
      number: 4,
      title: 'Forja Intergaláctica',
      description:
        'Construção da maior estação espacial da história para servir como hub comercial intergaláctico.',
      status: 'planned' as const,
    },
  ]

  return (
    <section
      id="missions"
      className="min-h-screen py-24 px-6 relative bg-gradient-to-b from-space-800 via-black to-space-900 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Nossas Missões
          </h2>
          <p className="text-white/60 text-lg">
            Projetos ambiciosos que moldam o futuro da humanidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missions.map((mission, idx) => (
            <MissionCard
              key={idx}
              number={mission.number}
              title={mission.title}
              description={mission.description}
              status={mission.status}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Mission timeline */}
        <motion.div
          className="mt-20 p-8 bg-space-800 border border-neon-cyan/30 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-neon-cyan">
            Cronograma Futuro
          </h3>
          <div className="space-y-4">
            {[
              { year: '2025', event: 'Lançamento da Operação Centauro' },
              { year: '2027', event: 'Chegada em órbita de Marte' },
              { year: '2030', event: 'Primeira colônia lunar expandida' },
              { year: '2035', event: 'Chegada em Proxima Centauri' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-3 h-3 bg-neon-cyan rounded-full" />
                <span className="font-bold text-neon-cyan">{item.year}</span>
                <span className="text-white/70">{item.event}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
