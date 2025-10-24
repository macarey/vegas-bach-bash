'use client'

import { useState, useEffect } from 'react'

interface CinematicOpeningProps {
  onComplete: () => void
}

export const CinematicOpening = ({ onComplete }: CinematicOpeningProps) => {
  const [phase, setPhase] = useState<'black' | 'rolling' | 'zooming' | 'complete'>('black')
  const [diceValues, setDiceValues] = useState([6, 6])
  const [isRolling, setIsRolling] = useState(false)

  useEffect(() => {
    // Start the sequence
    const timer1 = setTimeout(() => {
      setPhase('rolling')
      setIsRolling(true)
      
      // Animate dice rolling
      const rollInterval = setInterval(() => {
        setDiceValues([
          Math.floor(Math.random() * 6) + 1,
          Math.floor(Math.random() * 6) + 1
        ])
      }, 150)

      // Stop rolling after 2 seconds and ensure one die shows '1'
      const timer2 = setTimeout(() => {
        clearInterval(rollInterval)
        setDiceValues([1, Math.floor(Math.random() * 6) + 1])
        setIsRolling(false)
        
        // Start zoom phase
        const timer3 = setTimeout(() => {
          setPhase('zooming')
          
          // Complete the animation
          const timer4 = setTimeout(() => {
            setPhase('complete')
            onComplete()
          }, 2000)
          
          return () => clearTimeout(timer4)
        }, 1000)
        
        return () => clearTimeout(timer3)
      }, 2000)
      
      return () => clearTimeout(timer2)
    }, 500)

    return () => clearTimeout(timer1)
  }, [onComplete])

  const getDotPositions = (value: number) => {
    const positions = {
      1: ['center'],
      2: ['top-left', 'bottom-right'],
      3: ['top-left', 'center', 'bottom-right'],
      4: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      5: ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'],
      6: ['top-left', 'top-right', 'middle-left', 'middle-right', 'bottom-left', 'bottom-right']
    }
    return positions[value as keyof typeof positions] || []
  }

  const getDotClass = (position: string) => {
    const baseClass = 'absolute w-3 h-3 bg-white rounded-full'
    const positions: Record<string, string> = {
      'top-left': 'top-2 left-2',
      'top-right': 'top-2 right-2',
      'middle-left': 'top-1/2 left-2 -translate-y-1/2',
      'middle-right': 'top-1/2 right-2 -translate-y-1/2',
      'bottom-left': 'bottom-2 left-2',
      'bottom-right': 'bottom-2 right-2',
      'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
    }
    return `${baseClass} ${positions[position]}`
  }

  return (
    <div className={`
      fixed inset-0 z-50 flex items-center justify-center
      ${phase === 'black' ? 'bg-black' : 'bg-black'}
      transition-all duration-1000
    `}>
      {phase === 'black' && (
        <div className="text-white text-center animate-fade-in">
          <div className="text-6xl mb-4 animate-pulse">🎲</div>
          <div className="text-xl opacity-70">Rolling the dice...</div>
        </div>
      )}

      {phase === 'rolling' && (
        <div className="flex items-center gap-8 animate-slide-up">
          {diceValues.map((value, index) => (
            <div
              key={index}
              className={`
                w-20 h-20 bg-red-600 border-4 border-white rounded-lg relative shadow-2xl
                ${isRolling ? 'animate-spin' : ''}
                transition-transform duration-300 hover:scale-110
              `}
            >
              {getDotPositions(value).map((position, dotIndex) => (
                <div key={dotIndex} className={getDotClass(position)} />
              ))}
            </div>
          ))}
        </div>
      )}

      {phase === 'zooming' && (
        <div className="relative animate-zoom-in">
          {/* The die that shows '1' - this will be the zoom target */}
          <div className="w-20 h-20 bg-red-600 border-4 border-white rounded-lg relative shadow-2xl">
            <div className={getDotClass('center')} />
          </div>
          
          {/* Zoom effect overlay */}
          <div className="absolute inset-0 bg-black opacity-0 animate-ping" />
          
          {/* Zoom transition effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-50 animate-pulse" />
        </div>
      )}

      {phase === 'complete' && (
        <div className="text-white text-center animate-fade-in">
          <div className="text-4xl mb-4">🎰</div>
          <div className="text-xl">Welcome to Vegas!</div>
        </div>
      )}
    </div>
  )
}
