# VIP Development Landing Page

A luxury single-page landing page for VIP Development, a Costa Rica-based construction company with 20+ years of experience.

## Features

- Modern, minimalist luxury design with Gold/Black/White color palette
- Fully responsive design (mobile-first)
- Smooth scroll animations with Framer Motion
- Contact form with EmailJS integration
- Static export ready for SiteGround hosting
- Optimized for performance and SEO

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Email Service**: EmailJS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up EmailJS (optional for development):
   - Copy `.env.example` to `.env.local`
   - Get your EmailJS credentials from [https://www.emailjs.com/](https://www.emailjs.com/)
   - Add your service ID, template ID, and public key to `.env.local`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

### Static Export (SiteGround)

1. Build and export the static site:
```bash
npm run build
```

2. The `/out` directory will contain all static files ready to upload to SiteGround's `public_html` folder.

Note: With `output: 'export'` in `next.config.js`, Next.js automatically generates static files in the `/out` directory when you run `npm run build`.

## Project Structure

```
vip-development-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services grid
│   ├── FeaturedProject.tsx # Villas Tres Hermanas project
│   ├── Benefits.tsx        # Why choose VIP Development
│   ├── Process.tsx         # How it works
│   ├── ServiceAreas.tsx   # Service areas
│   ├── ContactForm.tsx     # Contact form
│   └── Footer.tsx          # Footer
├── lib/
│   └── emailjs.ts          # EmailJS integration
├── public/
│   └── images/             # Image assets
└── ...
```

## Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Add your credentials to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Customization

- **Colors**: Edit `tailwind.config.js` to modify the color palette
- **Content**: Update component files in `components/` directory
- **Images**: Replace images in `public/images/` directories

## Deployment

### SiteGround Static Export

1. Run `npm run build` to generate the static site
2. Upload the contents of the `/out` directory to your SiteGround `public_html` folder
3. Ensure all files and folders are uploaded correctly

## Notes

- All content is in English
- Single-page landing page (no routing)
- Images should be optimized before deployment
- Ensure EmailJS is configured before going live

## License

Private project for VIP Development.

