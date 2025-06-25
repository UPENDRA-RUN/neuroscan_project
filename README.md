# NeuroScan Pro - Advanced Neuroimaging Analytics Platform

A stunning, modern website built with Next.js showcasing revolutionary AI-powered neuroimaging technology. Features beautiful animations, interactive components, and a clean medical design system.

## 🚀 Features

- **Modern Design**: Clean, minimalist medical/healthcare design
- **Interactive Components**: Engaging animations and user interactions
- **Responsive**: Fully responsive design for all devices
- **Performance**: Optimized for speed and SEO
- **Accessible**: Built with accessibility best practices
- **Type-Safe**: Full TypeScript implementation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom medical design system
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **Type Safety**: TypeScript for robust development
- **Deployment**: Optimized for Vercel

## 🎨 Design System

### Colors

- **Medical Primary**: `#2563eb` (Professional blue)
- **Neural**: `#0ea5e9` (Brain-inspired cyan)
- **Success**: `#22c55e` (Health-positive green)
- **Grays**: Custom gray scale for clean hierarchy

### Components

- Medical cards with subtle shadows
- Interactive buttons with hover states
- Animated statistics counters
- 3D brain visualizations
- Glassmorphism effects

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Install dependencies**:

```bash
npm install
```

2. **Start development server**:

```bash
npm run dev
```

3. **Build for production**:

```bash
npm run build
```

4. **Start production server**:

```bash
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & design system
│   ├── layout.tsx         # Root layout with medical theme
│   └── page.tsx           # Main homepage
├── components/            # Reusable React components
│   ├── Hero.tsx          # Hero section with brain animation
│   ├── Features.tsx      # Interactive features showcase
│   ├── Stats.tsx         # Animated statistics
│   ├── Demo.tsx          # Interactive demo section
│   └── Footer.tsx        # Clean footer
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions & data
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── vercel.json          # Vercel deployment config
```

## 🎯 Key Sections

### Hero Section

- Animated brain visualization with neural networks
- Real-time statistics display
- Call-to-action buttons
- Floating medical elements

### Features Section

- Interactive feature cards
- Hover animations and effects
- Medical iconography
- Trust indicators

### Statistics Section

- Animated number counters
- Global impact metrics
- Hospital partnerships
- Trust badges

### Demo Section

- Interactive 3-step process
- Live preview of the platform
- Sample medical data
- Real-time processing simulation

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Configure project**:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Deploy**: Automatic deployment on git push

### Manual Deployment

```bash
# Build the project
npm run build

# Export static files (if needed)
npm run export
```

## 🔧 Customization

### Design System

Modify `tailwind.config.js` to customize:

- Color palette
- Typography
- Spacing
- Animations

### Content

Update `lib/utils.ts` to modify:

- Feature descriptions
- Statistics
- Sample data

### Components

Customize individual components in `/components/` folder.

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Images**: Optimized with Next.js Image component
- **Fonts**: Self-hosted Google Fonts for performance

## 🔒 Security

- HIPAA compliance ready
- Security headers configured
- Content Security Policy
- XSS protection
- CSRF protection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE.md for details

## 🆘 Support

For support or questions:

- Email: contact@neuroscanpro.com
- Documentation: [docs.neuroscanpro.com](https://docs.neuroscanpro.com)
- Issues: GitHub Issues

---

Built with ❤️ for medical professionals worldwide.
