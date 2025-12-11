'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Exploração', href: '#exploration' },
    { label: 'Missões', href: '#missions' },
    { label: 'Tecnologia', href: '#technology' },
    { label: 'Contato', href: '#contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-space-900/90 border-b border-neon-cyan/20'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-2xl">🚀</div>
          <div className="text-2xl font-black bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            SCI-FI SPACE
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              className="text-white/70 hover:text-neon-cyan transition-colors relative group text-sm font-medium uppercase tracking-wider"
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-neon-cyan text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? '✕' : '☰'}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-space-900/95 backdrop-blur-md border-t border-neon-cyan/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                className="block text-white/70 hover:text-neon-cyan transition-colors font-medium uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
