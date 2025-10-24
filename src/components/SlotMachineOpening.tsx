'use client'

import { useState, useEffect } from 'react'

interface SlotMachineOpeningProps {
  onComplete: () => void
}

const slotSymbols = ['🍒', '🍋', '🍊', '🍇', '⭐', '💎', '7️⃣', '🍑']

export const SlotMachineOpening = ({ onComplete }: SlotMachineOpeningProps) => {
  const [phase, setPhase] = useState<'black' | 'spinning' | 'stopping' | 'complete'>('black')
  const [reels, setReels] = useState(['🍑', '🍑', '🍑'])
  const [isSpinning, setIsSpinning] = useState(false)

  useEffect(() => {
    // Start the sequence
    const timer1 = setTimeout(() => {
      setPhase('spinning')
      setIsSpinning(true)
      
      // Animate slot machine spinning
      const spinInterval = setInterval(() => {
        setReels([
          slotSymbols[Math.floor(Math.random() * slotSymbols.length)],
          slotSymbols[Math.floor(Math.random() * slotSymbols.length)],
          slotSymbols[Math.floor(Math.random() * slotSymbols.length)]
        ])
      }, 100)

      // Stop spinning after 3 seconds and ensure all show peach
      const timer2 = setTimeout(() => {
        clearInterval(spinInterval)
        setReels(['🍑', '🍑', '🍑'])
        setIsSpinning(false)
        setPhase('stopping')
        
        // Complete the animation
        const timer3 = setTimeout(() => {
          setPhase('complete')
          onComplete()
        }, 2000)
        
        return () => clearTimeout(timer3)
      }, 3000)
      
      return () => clearTimeout(timer2)
    }, 500)

    return () => clearTimeout(timer1)
  }, [onComplete])

  return (
    <div className={`
      fixed inset-0 z-50 flex items-center justify-center
      bg-black transition-all duration-1000
    `}>
      {phase === 'black' && (
        <div className="text-white text-center animate-fade-in">
          <div className="text-6xl mb-4 animate-pulse">🎰</div>
          <div className="text-xl opacity-70">Spinning the reels...</div>
        </div>
      )}

      {phase === 'spinning' && (
        <div className="bg-gradient-to-b from-yellow-400 to-yellow-600 p-8 rounded-xl shadow-2xl border-4 border-yellow-300 animate-slide-up">
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
            <div className="text-lg font-bold text-black animate-pulse">
              SPINNING...
            </div>
          </div>
        </div>
      )}

      {phase === 'stopping' && (
        <div className="bg-gradient-to-b from-yellow-400 to-yellow-600 p-8 rounded-xl shadow-2xl border-4 border-yellow-300 animate-zoom-in">
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-black mb-2">🎰 JACKPOT! 🎰</h3>
            <div className="bg-black rounded-lg p-4 mb-4">
              <div className="flex justify-center gap-4">
                {reels.map((symbol, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-3xl border-2 border-gray-300 animate-pulse"
                  >
                    {symbol}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-xl font-bold text-black animate-pulse">
              🍑🍑🍑 TRIPLE PEACH! 🍑🍑🍑
            </div>
            <div className="text-lg text-black mt-2">
              Welcome to Vegas!
            </div>
          </div>
        </div>
      )}

      {phase === 'complete' && (
        <div className="text-white text-center animate-fade-in">
          <div className="text-4xl mb-4">🎰</div>
          <div className="text-xl">Let's Party!</div>
        </div>
      )}
    </div>
  )
}
