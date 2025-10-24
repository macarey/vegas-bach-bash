import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Mark & Kristen's Bachelor/Bachelorette Weekend — Oct 24–26 at The Venetian",
  description: 'A quick, clean itinerary for Mark & Kristen\'s Vegas bachelor/bachelorette weekend.',
  openGraph: {
    title: "Mark & Kristen's Bachelor/Bachelorette Weekend — Oct 24–26 at The Venetian",
    description: 'A quick, clean itinerary for Mark & Kristen\'s Vegas bachelor/bachelorette weekend.',
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