'use client'

import { useState, useEffect } from 'react'

interface ConfettiPiece {
  id: number
  x: number
  y: number
  color: string
  rotation: number
  velocity: { x: number; y: number }
  life: number
}

export const Confetti = ({ trigger }: { trigger: boolean }) => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    if (!trigger) return

    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff']
    const newConfetti: ConfettiPiece[] = []

    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        velocity: {
          x: (Math.random() - 0.5) * 10,
          y: Math.random() * 5 + 2
        },
        life: 1
      })
    }

    setConfetti(newConfetti)

    const animate = () => {
      setConfetti(prev => 
        prev.map(piece => ({
          ...piece,
          x: piece.x + piece.velocity.x,
          y: piece.y + piece.velocity.y,
          rotation: piece.rotation + 5,
          life: piece.life - 0.01,
          velocity: {
            x: piece.velocity.x * 0.99,
            y: piece.velocity.y + 0.1
          }
        })).filter(piece => piece.life > 0 && piece.y < window.innerHeight + 100)
      )
    }

    const interval = setInterval(animate, 16)
    const timeout = setTimeout(() => clearInterval(interval), 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [trigger])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="absolute w-2 h-2"
          style={{
            left: piece.x,
            top: piece.y,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            opacity: piece.life,
            borderRadius: '50%'
          }}
        />
      ))}
    </div>
  )
}

export const CelebrationButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleClick = () => {
    setShowConfetti(true)
    onClick()
    setTimeout(() => setShowConfetti(false), 100)
  }

  return (
    <>
      <button onClick={handleClick}>
        {children}
      </button>
      <Confetti trigger={showConfetti} />
    </>
  )
}
