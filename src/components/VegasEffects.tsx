'use client'

import { useEffect, useState } from 'react'

export const VegasLights = () => {
  const [lights, setLights] = useState<Array<{ id: number; x: number; y: number; color: string; delay: number }>>([])

  useEffect(() => {
    const generateLights = () => {
      const newLights = []
      for (let i = 0; i < 20; i++) {
        newLights.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff6600'][Math.floor(Math.random() * 5)],
          delay: Math.random() * 3
        })
      }
      setLights(newLights)
    }

    generateLights()
    const interval = setInterval(generateLights, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {lights.map((light) => (
        <div
          key={light.id}
          className="absolute w-2 h-2 rounded-full animate-pulse"
          style={{
            left: `${light.x}%`,
            top: `${light.y}%`,
            backgroundColor: light.color,
            animationDelay: `${light.delay}s`,
            boxShadow: `0 0 20px ${light.color}, 0 0 40px ${light.color}`
          }}
        />
      ))}
    </div>
  )
}

export const NeonText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 blur-sm opacity-75">
        {children}
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  )
}

export const FloatingElements = () => {
  const elements = ['🎰', '🎲', '🃏', '💰', '🍸', '🎊', '💎', '⭐']

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <div
          key={index}
          className="absolute text-4xl opacity-20 animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          {element}
        </div>
      ))}
    </div>
  )
}
