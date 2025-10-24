'use client'

import { useEffect, useState } from 'react'

export const LuxuryEffects = () => {
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    opacity: number
    speed: number
  }>>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 12; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 2 + Math.random() * 4,
          opacity: 0.3 + Math.random() * 0.4,
          speed: 0.5 + Math.random() * 1
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
    const interval = setInterval(generateParticles, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Rose Gold Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full silk-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: '#CD7F32',
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px #CD7F32`,
            animationDuration: `${3 + particle.speed}s`
          }}
        />
      ))}

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 luxury-gradient opacity-5" />
      
      {/* Silk Curtain Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-30" />
    </div>
  )
}

export const DiamondSparkles = () => {
  const [sparkles, setSparkles] = useState<Array<{
    id: number
    x: number
    y: number
    delay: number
  }>>([])

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = []
      for (let i = 0; i < 8; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 2
        })
      }
      setSparkles(newSparkles)
    }

    generateSparkles()
    const interval = setInterval(generateSparkles, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute text-2xl silk-pulse"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
            color: '#DAA520'
          }}
        >
          ✨
        </div>
      ))}
    </div>
  )
}

export const SilkText = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`silk-reveal ${className}`}>
      {children}
    </div>
  )
}
