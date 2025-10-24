# Vegas Bach Bash Microsite

A simple, single-page website displaying the full weekend plan for a combined bachelor/bachelorette trip in Las Vegas.

## Features

- **Mobile-first design** with dark theme and cyan accents
- **Accessible** with proper semantic HTML, focus states, and keyboard navigation
- **Copy itinerary** functionality for easy sharing
- **Subtle animations** with reduced-motion support
- **Fast loading** with optimized Next.js build

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### Vercel Deployment

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically

### Custom Domain Setup

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. In Cloudflare DNS:
   - Create CNAME record pointing to Vercel's provided domain
   - Set Proxy to "DNS only" (not proxied)
4. Verify HTTPS and domain resolution

## Content

The site displays:
- Hero section with event title and dates
- Key details (arrival, departure, hotel, dress code)
- Complete weekend schedule (Friday-Sunday)
- Important notes about the mixed-group weekend

All content matches the provided brief exactly, including dates, times, locations, and dress code.