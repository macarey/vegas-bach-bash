'use client'

import { useEffect, useState } from 'react'

export const LaserEffects = () => {
  const [lasers, setLasers] = useState<Array<{
    id: number
    x1: number
    y1: number
    x2: number
    y2: number
    color: string
    opacity: number
    angle: number
  }>>([])

  useEffect(() => {
    const generateLasers = () => {
      const newLasers = []
      for (let i = 0; i < 8; i++) {
        const angle = (i * 45) + Math.random() * 20 - 10
        const length = 200 + Math.random() * 300
        const startX = Math.random() * window.innerWidth
        const startY = Math.random() * window.innerHeight
        
        const endX = startX + Math.cos(angle * Math.PI / 180) * length
        const endY = startY + Math.sin(angle * Math.PI / 180) * length
        
        newLasers.push({
          id: i,
          x1: startX,
          y1: startY,
          x2: endX,
          y2: endY,
          color: ['#ff0080', '#00ffff', '#ffff00', '#ff6600', '#ff00ff'][Math.floor(Math.random() * 5)],
          opacity: 0.3 + Math.random() * 0.4,
          angle
        })
      }
      setLasers(newLasers)
    }

    generateLasers()
    const interval = setInterval(generateLasers, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {lasers.map((laser) => (
        <div
          key={laser.id}
          className="absolute"
          style={{
            left: laser.x1,
            top: laser.y1,
            width: Math.sqrt(Math.pow(laser.x2 - laser.x1, 2) + Math.pow(laser.y2 - laser.y1, 2)),
            height: '2px',
            backgroundColor: laser.color,
            opacity: laser.opacity,
            transform: `rotate(${laser.angle}deg)`,
            transformOrigin: '0 0',
            boxShadow: `0 0 10px ${laser.color}, 0 0 20px ${laser.color}`,
            animation: 'laser-pulse 2s ease-in-out infinite'
          }}
        />
      ))}
    </div>
  )
}

export const DiscoBall = () => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 2)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-10 right-10 pointer-events-none">
      <div
        className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 shadow-2xl"
        style={{
          transform: `rotateY(${rotation}deg)`,
          boxShadow: '0 0 30px rgba(255, 255, 0, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.3)'
        }}
      >
        {/* Disco ball facets */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white opacity-60 rounded-sm"
            style={{
              left: `${20 + Math.cos(i * 0.3) * 20}px`,
              top: `${20 + Math.sin(i * 0.3) * 20}px`,
              transform: `rotate(${i * 18}deg)`
            }}
          />
        ))}
      </div>
    </div>
  )
}

export const PartyLights = () => {
  const [lights, setLights] = useState<Array<{
    id: number
    x: number
    y: number
    color: string
    size: number
    pulse: number
  }>>([])

  useEffect(() => {
    const generateLights = () => {
      const newLights = []
      for (let i = 0; i < 15; i++) {
        newLights.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          color: ['#ff0080', '#00ffff', '#ffff00', '#ff6600', '#ff00ff', '#00ff00'][Math.floor(Math.random() * 6)],
          size: 20 + Math.random() * 40,
          pulse: Math.random() * 2
        })
      }
      setLights(newLights)
    }

    generateLights()
    const interval = setInterval(generateLights, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {lights.map((light) => (
        <div
          key={light.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${light.x}%`,
            top: `${light.y}%`,
            width: light.size,
            height: light.size,
            backgroundColor: light.color,
            boxShadow: `0 0 ${light.size}px ${light.color}, 0 0 ${light.size * 2}px ${light.color}`,
            animation: `party-pulse ${2 + light.pulse}s ease-in-out infinite`
          }}
        />
      ))}
    </div>
  )
}

export const NeonGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-20">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00ffff" strokeWidth="1" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}
