'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface StarshipProps {
  number: number
  title: string
  description: string
  status: 'active' | 'completed' | 'planned'
  image?: string
  delay?: number
}

const StarshipCard: React.FC<StarshipProps> = ({
  number,
  title,
  description,
  status,
  image,
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
      className={`border-2 rounded-lg p-6 ${statusColors[status]} backdrop-blur-sm relative overflow-hidden group h-full`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ x: 10 }}
    >
      {/* Background image */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
        />
      )}
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl font-bold text-neon-cyan opacity-20">
            {String(number).padStart(2, '0')}
          </div>
          <span className="text-xs px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">
            {statusLabels[status]}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white/60">{description}</p>
      </div>
    </motion.div>
  )
}

export const Starships: React.FC = () => {
  const starships = [
    {
      number: 1,
      title: 'Polaris',
      description:
        'Nave exploratória de classe Centauro com capacidade de velocidade superluminal para exploração intergaláctica.',
      status: 'active' as const,
      image: '/images/starships/polaris.webp',
    },
    {
      number: 2,
      title: 'Idris',
      description:
        'Nave de comando otima para missoes militares ainda mais com seu canhao de raio de plasma.',
      status: 'active' as const,
      image: '/images/starships/idris.jpg',
    },
    {
      number: 3,
      title: 'Kraken',
      description:
        'Nave de guerra de classe Kraken com capacidade de combate e defesa uma nave parecida com porto avioes so que de naves.',
      status: 'completed' as const,
      image: '/images/starships/kraken.jpg',
    },
    {
      number: 4,
      title: 'I900',
      description:
        'Maior nave de luxo com novos desenvolvimento de tecnologias.',
      status: 'planned' as const,
      image: '/images/starships/i900.webp',
    },
  ]

  return (
    <section
      id="starships"
      className="min-h-screen py-24 px-6 relative bg-gradient-to-b from-dark-800 via-black to-dark-900 overflow-hidden"
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
            Nossa Frota de Naves
          </h2>
          <p className="text-white/60 text-lg">
            Naves de exploração que dominam as fronteiras do universo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {starships.map((starship, idx) => (
            <StarshipCard
              key={idx}
              image={starship.image}
              number={starship.number}
              title={starship.title}
              description={starship.description}
              status={starship.status}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Fleet expansion timeline */}
        <motion.div
          className="mt-20 p-8 bg-dark-800 border border-neon-cyan/30 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-neon-cyan">
            Cronograma de Expansão
          </h3>
          <div className="space-y-4">
            {[
              { year: '2025', event: 'Lançamento do Intrepidus' },
              { year: '2027', event: 'Integração da Nebula X1' },
              { year: '2030', event: 'Frotas regionais estabelecidas' },
              { year: '2035', event: 'Lançamento da Forja Estelar' },
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
