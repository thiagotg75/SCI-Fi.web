'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface StarProps {
  delay?: number
}

const Star: React.FC<StarProps> = ({ delay = 0 }) => {
  const randomX = Math.random() * 100
  const randomY = Math.random() * 100
  const randomDuration = 3 + Math.random() * 2

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
      }}
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{
        duration: randomDuration,
        delay,
        repeat: Infinity,
      }}
    />
  )
}

export const StarField: React.FC = () => {
  const stars = Array.from({ length: 100 }, (_, i) => (
    <Star key={i} delay={Math.random() * 2} />
  ))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars}
    </div>
  )
}
