'use client'

import { useState, useEffect } from 'react'

const slotSymbols = ['🍒', '🍋', '🍊', '🍇', '⭐', '💎', '7️⃣', '🎰']

export const SlotMachine = () => {
  const [isSpinning, setIsSpinning] = useState(false)
  const [reels, setReels] = useState(['🍒', '🍋', '🍊'])
  const [message, setMessage] = useState('')

  const spin = () => {
    if (isSpinning) return
    
    setIsSpinning(true)
    setMessage('')
    
    // Animate spinning
    const spinInterval = setInterval(() => {
      setReels([
        slotSymbols[Math.floor(Math.random() * slotSymbols.length)],
        slotSymbols[Math.floor(Math.random() * slotSymbols.length)],
        slotSymbols[Math.floor(Math.random() * slotSymbols.length)]
      ])
    }, 100)

    setTimeout(() => {
      clearInterval(spinInterval)
      
      // Final result
      const finalReels = [
        slotSymbols[Math.floor(Math.random() * slotSymbols.length)],
        slotSymbols[Math.floor(Math.random() * slotSymbols.length)],
        slotSymbols[Math.floor(Math.random() * slotSymbols.length)]
      ]
      
      setReels(finalReels)
      setIsSpinning(false)
      
      // Check for wins
      if (finalReels[0] === finalReels[1] && finalReels[1] === finalReels[2]) {
        setMessage('🎉 JACKPOT! 🎉')
      } else if (finalReels[0] === finalReels[1] || finalReels[1] === finalReels[2] || finalReels[0] === finalReels[2]) {
        setMessage('🎊 You Win! 🎊')
      } else {
        setMessage('Try Again!')
      }
    }, 2000)
  }

  return (
    <div className="bg-gradient-to-b from-yellow-400 to-yellow-600 p-6 rounded-xl shadow-2xl border-4 border-yellow-300">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-black mb-2">🎰 SLOT MACHINE 🎰</h3>
        <div className="bg-black rounded-lg p-4 mb-4">
          <div className="flex justify-center gap-4">
            {reels.map((symbol, index) => (
              <div
                key={index}
                className={`
                  w-16 h-16 bg-white rounded-lg flex items-center justify-center text-3xl
                  ${isSpinning ? 'animate-bounce' : ''}
                  border-2 border-gray-300
                `}
              >
                {symbol}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={spin}
          disabled={isSpinning}
          className={`
            bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-lg
            transition-colors duration-200 text-lg
            ${isSpinning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
          `}
        >
          {isSpinning ? 'SPINNING...' : 'SPIN!'}
        </button>
        {message && (
          <div className="mt-4 text-xl font-bold text-black animate-pulse">
            {message}
          </div>
        )}
      </div>
    </div>
  )
}
