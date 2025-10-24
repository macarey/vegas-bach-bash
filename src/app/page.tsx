'use client'

import { useState } from 'react'
import './globals.css'
import { RollingDice } from '@/components/Dice'
import { CardDeck } from '@/components/Cards'
import { SlotMachine } from '@/components/SlotMachine'
import { VegasLights, NeonText, FloatingElements } from '@/components/VegasEffects'
import { CelebrationButton } from '@/components/Confetti'

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [showGames, setShowGames] = useState(false)

  const copyItinerary = async () => {
    const itinerary = `Vegas Bach Bash - October 24–26, 2024

ARRIVAL: Thursday, Oct 24 at 6:15 PM
DEPARTURE: Sunday, Oct 26 at 12:00 PM
HOTEL: The Venetian Resort
DRESS CODE: Vegas chic

FRIDAY — Arrival & Dinner
• Arrive in Las Vegas — 6:15 PM
• Check in at The Venetian
• Group dinner (TBD)
• Optional: drinks / bar hop / gambling

SATURDAY — Party Day
• Girls: Brunch (TBD)
• Guys: Casual breakfast + gambling
• Pool Party at The Venetian (afternoon)
• The Chainsmokers at XS (night)

SUNDAY — Departure
• Pack & check out
• Depart: 12:00 PM

NOTES:
• Mixed-group weekend
• Friday dinner and girls' brunch are TBD; updates via group chat`

    try {
      await navigator.clipboard.writeText(itinerary)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy itinerary:', err)
    }
  }

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Vegas Effects */}
      <VegasLights />
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="px-6 py-12 md:py-20 animate-fade-in relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <NeonText>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 text-balance drop-shadow-2xl">
              🎰 VEGAS BACH BASH 🎰
            </h1>
          </NeonText>
          <NeonText>
            <p className="text-2xl md:text-3xl text-cyan-400 mb-6 font-medium animate-pulse">
              October 24–26 • The Venetian Resort
            </p>
          </NeonText>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Your quick link for the weekend plan. 🎲🎊
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <CelebrationButton onClick={copyItinerary}>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
                {copied ? '✓ Copied!' : '📋 Copy Itinerary'}
              </button>
            </CelebrationButton>
            
            <button 
              onClick={() => setShowGames(!showGames)}
              className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-400 hover:to-red-400 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/50"
            >
              {showGames ? '🎯 Hide Games' : '🎮 Vegas Games'}
            </button>
          </div>

          {/* Vegas Games Section */}
          {showGames && (
            <div className="mt-12 space-y-8 animate-slide-up">
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">🎲 Roll the Dice!</h3>
                <div className="flex justify-center">
                  <RollingDice />
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">🃏 Lucky Cards</h3>
                <div className="flex justify-center">
                  <CardDeck />
                </div>
              </div>

              <div className="flex justify-center">
                <SlotMachine />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Key Details */}
      <section className="px-6 py-8 animate-slide-up relative z-10" aria-labelledby="key-details">
        <div className="max-w-4xl mx-auto">
          <h2 id="key-details" className="sr-only">Key Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-cyan-500/50 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              <h3 className="text-cyan-400 font-bold text-lg uppercase tracking-wide mb-3 flex items-center">
                ✈️ Arrival
              </h3>
              <p className="text-white text-xl font-semibold">Thursday, Oct 24 at 6:15 PM</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-purple-500/50 rounded-xl p-6 hover:border-purple-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              <h3 className="text-purple-400 font-bold text-lg uppercase tracking-wide mb-3 flex items-center">
                🚁 Departure
              </h3>
              <p className="text-white text-xl font-semibold">Sunday, Oct 26 at 12:00 PM</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-yellow-500/50 rounded-xl p-6 hover:border-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/25">
              <h3 className="text-yellow-400 font-bold text-lg uppercase tracking-wide mb-3 flex items-center">
                🏨 Hotel
              </h3>
              <p className="text-white text-xl font-semibold">The Venetian Resort</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-pink-500/50 rounded-xl p-6 hover:border-pink-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/25">
              <h3 className="text-pink-400 font-bold text-lg uppercase tracking-wide mb-3 flex items-center">
                👗 Dress Code
              </h3>
              <p className="text-white text-xl font-semibold">Vegas chic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="px-6 py-12 animate-slide-up relative z-10" aria-labelledby="schedule">
        <div className="max-w-4xl mx-auto">
          <NeonText>
            <h2 id="schedule" className="text-4xl font-bold text-white mb-12 text-center">
              🎊 WEEKEND SCHEDULE 🎊
            </h2>
          </NeonText>
          
          {/* Friday */}
          <div className="mb-12 bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
            <h3 className="text-3xl font-bold text-red-400 mb-6 flex items-center">
              🎉 Friday — Arrival & Dinner
            </h3>
            <ul className="space-y-4 text-gray-200 text-lg">
              <li className="flex items-start">
                <span className="text-red-400 mr-4 text-2xl" aria-hidden="true">✈️</span>
                <span>Arrive in Las Vegas — 6:15 PM</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-4 text-2xl" aria-hidden="true">🏨</span>
                <span>Check in at The Venetian</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-4 text-2xl" aria-hidden="true">🍽️</span>
                <span>Group dinner (TBD)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-4 text-2xl" aria-hidden="true">🍸</span>
                <span>Optional: drinks / bar hop / gambling</span>
              </li>
            </ul>
          </div>

          {/* Saturday */}
          <div className="mb-12 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-purple-400 mb-6 flex items-center">
              🎰 Saturday — Party Day
            </h3>
            <ul className="space-y-4 text-gray-200 text-lg">
              <li className="flex items-start">
                <span className="text-purple-400 mr-4 text-2xl" aria-hidden="true">👩</span>
                <span>Girls: Brunch (TBD)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-4 text-2xl" aria-hidden="true">👨</span>
                <span>Guys: Casual breakfast + gambling</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-4 text-2xl" aria-hidden="true">🏊</span>
                <span>Pool Party at The Venetian (afternoon)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-4 text-2xl" aria-hidden="true">🎵</span>
                <span>The Chainsmokers at XS (night)</span>
              </li>
            </ul>
          </div>

          {/* Sunday */}
          <div className="mb-12 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-blue-400 mb-6 flex items-center">
              🚁 Sunday — Departure
            </h3>
            <ul className="space-y-4 text-gray-200 text-lg">
              <li className="flex items-start">
                <span className="text-blue-400 mr-4 text-2xl" aria-hidden="true">📦</span>
                <span>Pack & check out</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-4 text-2xl" aria-hidden="true">✈️</span>
                <span>Depart: 12:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="px-6 py-8 animate-slide-up relative z-10" aria-labelledby="notes">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30">
            <h3 id="notes" className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
              ⚠️ Important Notes
            </h3>
            <ul className="space-y-4 text-gray-200 text-lg">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-4 text-2xl" aria-hidden="true">👥</span>
                <span>Mixed-group weekend.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-4 text-2xl" aria-hidden="true">📱</span>
                <span>Friday dinner and girls' brunch are TBD; updates via group chat.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <NeonText>
              <p className="text-2xl font-bold text-white mb-4">
                🎰 Vegas Bach Bash 🎰
              </p>
            </NeonText>
            <p className="text-lg text-gray-300 mb-4">October 24–26, 2024</p>
            <div className="flex justify-center gap-4 text-2xl">
              <span className="animate-bounce">🎲</span>
              <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🎊</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🍸</span>
              <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>💎</span>
              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🎰</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}