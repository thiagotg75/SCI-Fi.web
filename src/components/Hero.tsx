'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface HeroProps {
  title: string
  subtitle: string
  cta: string
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, cta }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Video/Background Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-900/60 to-space-900 z-10" />

        {/* Dynamic parallax background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            x: mousePosition.x * 30 - 15,
            y: mousePosition.y * 30 - 15,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 50 }}
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-neon-purple via-neon-blue to-transparent opacity-30 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-neon-cyan via-neon-pink to-transparent opacity-30 blur-3xl rounded-full" />
        </motion.div>

        {/* Animated stars/particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl">
        {/* Pre-title animation */}
        <motion.div
          className="mb-6 inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-neon-cyan text-sm md:text-base font-mono tracking-widest uppercase">
            ◆ Bem-vindo ao Espaço ◆
          </p>
        </motion.div>

        {/* Main title with letter animation */}
        <motion.h1
          className="text-5xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent drop-shadow-2xl">
            {title}
          </span>
        </motion.h1>

        {/* Subtitle with staggered animation */}
        <motion.div
          className="mb-10 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.p
            className="text-xl md:text-3xl text-white/80 font-light leading-relaxed"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="relative px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl font-bold overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button background with glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-100 group-hover:opacity-80 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple blur-lg opacity-0 group-hover:opacity-50 transition-opacity -z-10" />

            <span className="relative z-10 text-black">{cta}</span>
          </motion.button>

          <motion.button
            className="px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl font-bold border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            Explorar
          </motion.button>
        </motion.div>

        {/* Info tags */}
        <motion.div
          className="mt-16 flex flex-wrap gap-4 justify-center text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {['4K', 'Próxima Geração', 'WebGL'].map((tag, idx) => (
            <motion.span
              key={idx}
              className="px-4 py-2 border border-neon-cyan/50 rounded-full text-neon-cyan/70 backdrop-blur-sm"
              whileHover={{ scale: 1.1, borderColor: 'rgba(0, 212, 255, 1)' }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - cinematic style */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-neon-cyan text-xs font-mono uppercase tracking-widest">
            Scroll
          </span>
          <svg
            className="w-5 h-5 text-neon-cyan"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>

      {/* Horizontal line accent */}
      <motion.div
        className="absolute bottom-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      />
    </section>
  )
}
