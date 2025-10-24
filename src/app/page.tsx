'use client'

import { useState } from 'react'
import './globals.css'
import { CinematicOpening } from '@/components/CinematicOpening'
import { LuxuryEffects, DiamondSparkles, SilkText } from '@/components/LuxuryEffects'
import { NeonText } from '@/components/VegasEffects'
import { CelebrationButton } from '@/components/Confetti'

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [showMainContent, setShowMainContent] = useState(false)

  const copyItinerary = async () => {
    const itinerary = `Mark & Kristen's Bachelor/Bachelorette Weekend - October 24–26, 2024

ARRIVAL: Thursday, Oct 24 at 6:15 PM
DEPARTURE: Sunday, Oct 26 at 12:00 PM
HOTEL: The Venetian Resort
DRESS CODE: Vegas chic

FRIDAY — Arrival & Dinner
• 6:15 PM – Land in Vegas
• 7:30 PM – Check in at The Venetian
• 8:30 PM – Group dinner (Rosa Mexicana)
• 10:30 PM – Drinks, bar hop, gambling

SATURDAY — Party Day
• 11:00 AM – Girls: Brunch (Chica)
• 11:00 AM – Guys: Sleep in, breakfast and gambling
• 1:00–5:00 PM – Pool at The Venetian
• 8:30 PM – Pregame at the suite
• 9:30 PM – Bus then Chainsmokers at XS

SUNDAY — Departure
• 11:00 AM – Pack and check out
• 12:00 PM – Depart for airport

NOTES:
• Mixed-group weekend
• All times are approximate; updates via group chat.`

    try {
      await navigator.clipboard.writeText(itinerary)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy itinerary:', err)
    }
  }

  return (
    <>
      {/* Cinematic Dice Opening Animation */}
      {!showMainContent && (
        <CinematicOpening onComplete={() => setShowMainContent(true)} />
      )}

      {/* Main Content - Only shows after cinematic opening */}
      {showMainContent && (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
          {/* Luxury Effects */}
          <LuxuryEffects />
          <DiamondSparkles />
          
          {/* Hero Section */}
          <section className="px-6 py-12 md:py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <SilkText>
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 text-balance drop-shadow-2xl rose-gold-text">
                  🎰 MARK & KRISTEN'S BACHELOR/BACHELORETTE WEEKEND 🎰
                </h1>
              </SilkText>
              <SilkText className="mt-6">
                <p className="text-2xl md:text-3xl text-rose-300 mb-6 font-medium silk-pulse">
                  October 24–26 • The Venetian Resort
                </p>
              </SilkText>
              <SilkText className="mt-4">
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                  Your elegant guide to the weekend of a lifetime. 🌹✨
                </p>
              </SilkText>
              
              <SilkText className="mt-8">
                <div className="flex justify-center mb-8">
                  <CelebrationButton onClick={copyItinerary}>
                    <button className="luxury-gradient hover:opacity-90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-500 transform hover:scale-105 shadow-lg silk-glow">
                      {copied ? '✓ Copied!' : '📋 Copy Itinerary'}
                    </button>
                  </CelebrationButton>
                </div>
              </SilkText>
            </div>
          </section>

      {/* Key Details */}
      <section className="px-6 py-8 relative z-10" aria-labelledby="key-details">
        <div className="max-w-4xl mx-auto">
          <h2 id="key-details" className="sr-only">Key Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SilkText>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-2 border-rose-400/50 rounded-xl p-6 hover:border-rose-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-rose-400/25 silk-glow">
                <h3 className="text-rose-300 font-bold text-lg uppercase tracking-wide mb-3 flex items-center">
                  ✈️ Arrival
                </h3>
                <p className="text-white text-xl font-semibold">Thursday, Oct 24 at 6:15 PM</p>
              </div>
            </SilkText>
            <SilkText className="mt-2">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-2 border-amber-400/50 rounded-xl p-6 hover:border-amber-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-amber-400/25 silk-glow">
                <h3 className="text-amber-300 font-bold text-lg uppercase tracking-wide mb-3 flex items-center">
                  🚁 Departure
                </h3>
                <p className="text-white text-xl font-semibold">Sunday, Oct 26 at 12:00 PM</p>
              </div>
            </SilkText>
            <SilkText className="mt-4">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-2 border-yellow-400/50 rounded-xl p-6 hover:border-yellow-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-yellow-400/25 silk-glow">
                <h3 className="text-yellow-300 font-bold text-lg uppercase tracking-wide mb-3 flex items-center">
                  🏨 Hotel
                </h3>
                <p className="text-white text-xl font-semibold">The Venetian Resort</p>
              </div>
            </SilkText>
            <SilkText className="mt-6">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-2 border-pink-400/50 rounded-xl p-6 hover:border-pink-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-pink-400/25 silk-glow">
                <h3 className="text-pink-300 font-bold text-lg uppercase tracking-wide mb-3 flex items-center">
                  👗 Dress Code
                </h3>
                <p className="text-white text-xl font-semibold">Vegas chic</p>
              </div>
            </SilkText>
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
                <span>6:15 PM – Land in Vegas</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-4 text-2xl" aria-hidden="true">🏨</span>
                <span>7:30 PM – Check in at The Venetian</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-4 text-2xl" aria-hidden="true">🍽️</span>
                <span>8:30 PM – Group dinner (Rosa Mexicana)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-4 text-2xl" aria-hidden="true">🍸</span>
                <span>10:30 PM – Drinks, bar hop, gambling</span>
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
                <span>11:00 AM – Girls: Brunch (Chica)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-4 text-2xl" aria-hidden="true">👨</span>
                <span>11:00 AM – Guys: Sleep in, breakfast and gambling</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-4 text-2xl" aria-hidden="true">🏊</span>
                <span>1:00–5:00 PM – Pool at The Venetian</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-4 text-2xl" aria-hidden="true">🍸</span>
                <span>8:30 PM – Pregame at the suite</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-4 text-2xl" aria-hidden="true">🎵</span>
                <span>9:30 PM – Bus then Chainsmokers at XS</span>
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
                <span>11:00 AM – Pack and check out</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-4 text-2xl" aria-hidden="true">✈️</span>
                <span>12:00 PM – Depart for airport</span>
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
                <span>All times are approximate; updates via group chat.</span>
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
                🎰 Mark & Kristen's Bachelor/Bachelorette Weekend 🎰
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
      )}
    </>
  )
}