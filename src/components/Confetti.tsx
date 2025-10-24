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
  size: number
}

export const Confetti = ({ trigger }: { trigger: boolean }) => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    if (!trigger) return

    // Vegas-themed colors
    const colors = ['#00ffff', '#ff00ff', '#ffff00', '#ff6600', '#00ff00', '#ff0080', '#00ff80']
    const newConfetti: ConfettiPiece[] = []

    for (let i = 0; i < 80; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: -20,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        velocity: {
          x: (Math.random() - 0.5) * 8,
          y: Math.random() * 3 + 3
        },
        life: 1,
        size: Math.random() * 4 + 2
      })
    }

    setConfetti(newConfetti)

    let animationId: number

    const animate = () => {
      setConfetti(prev => {
        const updated = prev.map(piece => ({
          ...piece,
          x: piece.x + piece.velocity.x,
          y: piece.y + piece.velocity.y,
          rotation: piece.rotation + 8,
          life: piece.life - 0.005,
          velocity: {
            x: piece.velocity.x * 0.99,
            y: piece.velocity.y + 0.2
          }
        })).filter(piece => 
          piece.life > 0 && 
          piece.y < (typeof window !== 'undefined' ? window.innerHeight + 200 : 1000)
        )

        // Continue animation if there are still pieces
        if (updated.length > 0) {
          animationId = requestAnimationFrame(animate)
        } else {
          setConfetti([])
        }

        return updated
      })
    }

    // Start the animation
    animationId = requestAnimationFrame(animate)

    // Cleanup timeout as backup
    const timeout = setTimeout(() => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      setConfetti([])
    }, 6000)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      clearTimeout(timeout)
    }
  }, [trigger])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: piece.x,
            top: piece.y,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            opacity: piece.life,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
            boxShadow: `0 0 ${piece.size * 2}px ${piece.color}`
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
    setTimeout(() => setShowConfetti(false), 200)
  }

  return (
    <>
      <div onClick={handleClick}>
        {children}
      </div>
      <Confetti trigger={showConfetti} />
    </>
  )
}
