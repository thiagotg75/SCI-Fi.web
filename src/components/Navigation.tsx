'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

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
    { label: 'Naves', href: '#starships' },
    { label: 'Flora', href: '#flora' },
    { label: 'Contato', href: '#contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-dark-900/90 border-b border-neon-cyan/20'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10">
            <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-neon-cyan">
              <text x="100" y="25" fontSize="24" fontWeight="bold" textAnchor="middle" fill="currentColor" fontFamily="Arial, sans-serif">STAR</text>
              <circle cx="100" cy="100" r="60"/>
              <circle cx="100" cy="100" r="50"/>
              <circle cx="100" cy="100" r="40"/>
              <path d="M 100 60 L 110 85 L 135 85 L 115 100 L 125 125 L 100 110 L 75 125 L 85 100 L 65 85 L 90 85 Z" fill="currentColor"/>
              <g>
                <path d="M 75 85 Q 70 80 68 75 Q 66 70 65 65" strokeLinecap="round"/>
                <path d="M 75 95 Q 68 95 63 98" strokeLinecap="round"/>
                <path d="M 75 105 Q 70 108 65 115" strokeLinecap="round"/>
              </g>
              <g>
                <path d="M 125 85 Q 130 80 132 75 Q 134 70 135 65" strokeLinecap="round"/>
                <path d="M 125 95 Q 132 95 137 98" strokeLinecap="round"/>
                <path d="M 125 105 Q 130 108 135 115" strokeLinecap="round"/>
              </g>
              <text x="100" y="210" fontSize="24" fontWeight="bold" textAnchor="middle" fill="currentColor" fontFamily="Arial, sans-serif">CITIZEN</text>
            </svg>
          </div>
          <div className="text-lg font-black bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            STAR CITIZEN
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
