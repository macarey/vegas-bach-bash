'use client'

import { useState } from 'react'
import './globals.css'

export default function Home() {
  const [copied, setCopied] = useState(false)

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
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="px-6 py-12 md:py-20 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">
            Vegas Bach Bash
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-6 font-medium">
            October 24–26 • The Venetian Resort
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Your quick link for the weekend plan.
          </p>
          <button
            onClick={copyItinerary}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Copy itinerary to clipboard"
          >
            {copied ? '✓ Copied!' : 'Copy Itinerary'}
          </button>
        </div>
      </section>

      {/* Key Details */}
      <section className="px-6 py-8 animate-slide-up" aria-labelledby="key-details">
        <div className="max-w-4xl mx-auto">
          <h2 id="key-details" className="sr-only">Key Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-500 transition-colors focus-within:border-cyan-500">
              <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wide mb-2">Arrival</h3>
              <p className="text-white text-lg">Thursday, Oct 24 at 6:15 PM</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-500 transition-colors focus-within:border-cyan-500">
              <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wide mb-2">Departure</h3>
              <p className="text-white text-lg">Sunday, Oct 26 at 12:00 PM</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-500 transition-colors focus-within:border-cyan-500">
              <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wide mb-2">Hotel</h3>
              <p className="text-white text-lg">The Venetian Resort</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-500 transition-colors focus-within:border-cyan-500">
              <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wide mb-2">Dress Code</h3>
              <p className="text-white text-lg">Vegas chic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="px-6 py-12 animate-slide-up" aria-labelledby="schedule">
        <div className="max-w-4xl mx-auto">
          <h2 id="schedule" className="text-3xl font-bold text-white mb-8 text-center">Weekend Schedule</h2>
          
          {/* Friday */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Friday — Arrival & Dinner</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span>Arrive in Las Vegas — 6:15 PM</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span>Check in at The Venetian</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span>Group dinner (TBD)</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span>Optional: drinks / bar hop / gambling</span>
              </li>
            </ul>
          </div>

          {/* Saturday */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Saturday — Party Day</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span>Girls: Brunch (TBD)</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span>Guys: Casual breakfast + gambling</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span>Pool Party at The Venetian (afternoon)</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span>The Chainsmokers at XS (night)</span>
              </li>
            </ul>
          </div>

          {/* Sunday */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Sunday — Departure</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span>Pack & check out</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">•</span>
                <span>Depart: 12:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="px-6 py-8 animate-slide-up" aria-labelledby="notes">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 id="notes" className="text-lg font-semibold text-white mb-3">Important Notes</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3" aria-hidden="true">•</span>
                <span>Mixed-group weekend.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3" aria-hidden="true">•</span>
                <span>Friday dinner and girls' brunch are TBD; updates via group chat.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>Vegas Bach Bash • October 24–26, 2024</p>
        </div>
      </footer>
    </main>
  )
}