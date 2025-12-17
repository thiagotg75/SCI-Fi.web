'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-neon-cyan/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8">
                <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-neon-blue">
                  <circle cx="100" cy="100" r="60"/>
                  <circle cx="100" cy="100" r="50"/>
                  <circle cx="100" cy="100" r="40"/>
                  <path d="M 100 60 L 110 85 L 135 85 L 115 100 L 125 125 L 100 110 L 75 125 L 85 100 L 65 85 L 90 85 Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-neon-blue font-bold">STAR CITIZEN</h3>
            </div>
            <p className="text-white/60 text-sm">
              Explorando os limites do universo e da tecnologia.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#home" className="hover:text-neon-blue transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#exploration" className="hover:text-neon-blue transition">
                  Exploração
                </a>
              </li>
              <li>
                <a href="#missions" className="hover:text-neon-blue transition">
                  Missões
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-neon-blue transition">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-neon-blue transition">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition">
                  Termos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-neon-cyan/10 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 text-sm">
            © {currentYear} STAR CITIZEN. Todos os direitos reservados.
          </p>
          <p className="text-neon-blue/60 text-sm mt-4 md:mt-0">
            Construído com React, Next.js, TypeScript e Tailwind CSS ⚡
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
