'use client'

import { useState, useEffect } from 'react'

interface CardProps {
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades'
  value: string | number
  flipped?: boolean
  animated?: boolean
}

export const PlayingCard = ({ suit, value, flipped = false, animated = false }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(flipped)

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setIsFlipped(!isFlipped)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [animated, isFlipped])

  const getSuitSymbol = (suit: string) => {
    const symbols = {
      hearts: '♥',
      diamonds: '♦',
      clubs: '♣',
      spades: '♠'
    }
    return symbols[suit as keyof typeof symbols]
  }

  const getSuitColor = (suit: string) => {
    return suit === 'hearts' || suit === 'diamonds' ? 'text-red-500' : 'text-black'
  }

  const suitSymbol = getSuitSymbol(suit)
  const suitColor = getSuitColor(suit)

  return (
    <div className={`
      w-16 h-24 bg-white border-2 border-gray-300 rounded-lg shadow-lg
      flex flex-col justify-between p-2 relative overflow-hidden
      ${animated ? 'animate-pulse' : ''}
      transition-transform duration-500 hover:scale-105
    `}>
      {isFlipped ? (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
          <div className="text-white text-2xl font-bold">🎰</div>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-start">
            <div className={`text-sm font-bold ${suitColor}`}>{value}</div>
            <div className={`text-lg ${suitColor}`}>{suitSymbol}</div>
          </div>
          <div className="flex justify-center">
            <div className={`text-2xl ${suitColor}`}>{suitSymbol}</div>
          </div>
          <div className="flex flex-col items-end rotate-180">
            <div className={`text-sm font-bold ${suitColor}`}>{value}</div>
            <div className={`text-lg ${suitColor}`}>{suitSymbol}</div>
          </div>
        </>
      )}
    </div>
  )
}

export const CardDeck = () => {
  const cards = [
    { suit: 'hearts' as const, value: 'A' },
    { suit: 'diamonds' as const, value: 'K' },
    { suit: 'clubs' as const, value: 'Q' },
    { suit: 'spades' as const, value: 'J' }
  ]

  return (
    <div className="flex gap-2">
      {cards.map((card, index) => (
        <div
          key={index}
          className="transition-transform duration-300 hover:scale-110"
          style={{
            transform: `rotate(${(index - 1.5) * 10}deg)`,
            zIndex: cards.length - index
          }}
        >
          <PlayingCard {...card} animated={index === 0} />
        </div>
      ))}
    </div>
  )
}
