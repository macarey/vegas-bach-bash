'use client'

import { useState, useEffect } from 'react'

interface DiceProps {
  value: number
  rolling?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export const Dice = ({ value, rolling = false, size = 'md' }: DiceProps) => {
  const [displayValue, setDisplayValue] = useState(value)
  
  useEffect(() => {
    if (rolling) {
      const interval = setInterval(() => {
        setDisplayValue(Math.floor(Math.random() * 6) + 1)
      }, 100)
      
      const timeout = setTimeout(() => {
        clearInterval(interval)
        setDisplayValue(value)
      }, 2000)
      
      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }
    } else {
      setDisplayValue(value)
    }
  }, [value, rolling])

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-2xl'
  }

  const dotPositions = {
    1: ['center'],
    2: ['top-left', 'bottom-right'],
    3: ['top-left', 'center', 'bottom-right'],
    4: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    5: ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'],
    6: ['top-left', 'top-right', 'middle-left', 'middle-right', 'bottom-left', 'bottom-right']
  }

  const getDotClass = (position: string) => {
    const baseClass = 'absolute w-2 h-2 bg-white rounded-full'
    const positions: Record<string, string> = {
      'top-left': 'top-1 left-1',
      'top-right': 'top-1 right-1',
      'middle-left': 'top-1/2 left-1 -translate-y-1/2',
      'middle-right': 'top-1/2 right-1 -translate-y-1/2',
      'bottom-left': 'bottom-1 left-1',
      'bottom-right': 'bottom-1 right-1',
      'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
    }
    return `${baseClass} ${positions[position]}`
  }

  return (
    <div className={`
      ${sizeClasses[size]}
      bg-red-600 border-2 border-white rounded-lg relative shadow-lg
      ${rolling ? 'animate-spin' : ''}
      transition-transform duration-300 hover:scale-110
    `}>
      {dotPositions[displayValue as keyof typeof dotPositions]?.map((position, index) => (
        <div key={index} className={getDotClass(position)} />
      ))}
    </div>
  )
}

export const RollingDice = () => {
  const [isRolling, setIsRolling] = useState(false)
  const [diceValues, setDiceValues] = useState([1, 6])

  const rollDice = () => {
    setIsRolling(true)
    setTimeout(() => {
      setDiceValues([
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1
      ])
      setIsRolling(false)
    }, 2000)
  }

  return (
    <div className="flex items-center gap-4">
      <Dice value={diceValues[0]} rolling={isRolling} size="md" />
      <Dice value={diceValues[1]} rolling={isRolling} size="md" />
      <button
        onClick={rollDice}
        disabled={isRolling}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
      >
        {isRolling ? 'Rolling...' : 'Roll Dice!'}
      </button>
    </div>
  )
}
