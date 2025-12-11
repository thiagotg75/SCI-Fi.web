'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 relative bg-gradient-to-b from-space-900 via-black to-space-900 flex items-center overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-white/60 text-lg">
            Junte-se à nossa missão de exploração intergaláctica
          </p>
        </motion.div>

        <motion.form
          className="border border-neon-cyan/30 rounded-lg p-8 bg-space-900/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2 bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
                Nome Completo
              </label>
              <input
                type="text"
                className="w-full bg-space-900/50 border border-neon-cyan/40 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-neon-cyan focus:bg-space-900/80 transition-all"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-space-900/50 border border-neon-cyan/40 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-neon-cyan focus:bg-space-900/80 transition-all"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Especialidade
            </label>
            <select className="w-full bg-space-900/50 border border-neon-cyan/40 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-cyan focus:bg-space-900/80 transition-all">
              <option>Astronauta</option>
              <option>Engenheiro Aeroespacial</option>
              <option>Cientista</option>
              <option>Piloto</option>
              <option>Outro</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Mensagem
            </label>
            <textarea
              className="w-full bg-space-900/50 border border-neon-cyan/40 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-neon-cyan focus:bg-space-900/80 transition-all h-32 resize-none"
              placeholder="Conte-nos sobre sua experiência espacial..."
            />
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              type="submit"
              className="relative px-8 py-3 text-lg font-bold overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-100 group-hover:opacity-80 transition-opacity" />
              <span className="relative z-10 text-black">Enviar Mensagem</span>
            </motion.button>
            <span className="text-white/50 text-sm">
              Responderemos em 24 horas
            </span>
          </div>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="mt-16 flex justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { icon: '🚀', label: 'Twitter' },
            { icon: '🛸', label: 'Discord' },
            { icon: '🌌', label: 'LinkedIn' },
            { icon: '⭐', label: 'GitHub' },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href="#"
              className="w-12 h-12 rounded-full border border-neon-cyan/50 flex items-center justify-center text-xl hover:bg-neon-cyan/10 transition-all"
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
