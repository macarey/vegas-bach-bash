import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vegas Bach Bash — Oct 24–26 at The Venetian',
  description: 'A quick, clean itinerary for our Vegas bachelor/bachelorette weekend.',
  openGraph: {
    title: 'Vegas Bach Bash — Oct 24–26 at The Venetian',
    description: 'A quick, clean itinerary for our Vegas bachelor/bachelorette weekend.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}