# KnowEdge Tech Hub - Landing Page

A modern, responsive landing page for KnowEdge Tech Hub's Pilot Cohort program, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Accessible**: WCAG compliant with semantic HTML and ARIA labels
- **Animated**: Smooth scroll animations powered by Framer Motion
- **Modern Design**: Clean, professional UI with brand colors (#36c9cd)
- **SEO Optimized**: Proper meta tags and semantic structure
- **Fast Performance**: Built with Vite for optimal loading speed

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Font**: Inter (Google Fonts)

## 📦 Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── ProgramHighlights.tsx  # Program overview cards
│   ├── CurriculumGrid.tsx  # Skills and curriculum showcase
│   ├── ScholarshipCard.tsx # Scholarship information
│   ├── FAQ.tsx             # Frequently asked questions
│   ├── CTASection.tsx      # Final call-to-action
│   └── Footer.tsx          # Footer with links and contact
├── assets/
│   ├── hero.jpg           # Hero section image
│   └── scholarship.jpg    # Scholarship section image
├── pages/
│   └── Index.tsx          # Main landing page
└── index.css              # Global styles and design system
```

## 🎨 Design System

The project uses a comprehensive design system defined in `src/index.css`:

### Brand Colors
- **Primary**: `#36c9cd` (Teal) - Used for CTAs and accents
- **Background**: White
- **Foreground**: Dark gray/black for text

### Typography
- **Font Family**: Inter
- **Headings**: Semibold weight
- **Body**: Regular weight

### Custom CSS Variables
```css
--primary: 187 69% 51%;           /* Brand teal */
--hero-gradient: ...              /* Subtle background gradient */
--card-shadow: ...                /* Consistent card shadows */
--card-hover-shadow: ...          /* Interactive hover effects */
```

## 🧩 Components

### Navbar
- Sticky header with smooth scrolling
- Mobile-responsive hamburger menu
- Animated menu transitions

### Hero
- Eye-catching headline with CTA buttons
- Program highlights badges
- Generated hero image with brand colors

### ProgramHighlights
- 4-card grid layout
- Hover effects with smooth transitions
- Icons from Lucide React

### CurriculumGrid
- 8-card skills showcase
- Color-coded hover effects
- Learning philosophy section

### ScholarshipCard
- Two-column layout (image + content)
- Benefits checklist
- Timeline display
- Eligibility criteria

### FAQ
- Accordion component from shadcn/ui
- 8 common questions covered
- Accessible keyboard navigation

### CTASection
- Full-width background with gradient
- Strong conversion-focused copy
- External WhatsApp link

### Footer
- Multi-column layout
- Quick navigation links
- Social media icons
- Contact information

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🌐 Deployment

The project can be deployed to any static hosting service:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider

Recommended platforms:
- Vercel
- Netlify
- GitHub Pages
- Lovable (click Share → Publish)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus indicators
- Screen reader friendly

## 📝 Content Management

To update content, edit the respective component files:
- Program details: `ProgramHighlights.tsx`
- Curriculum: `CurriculumGrid.tsx`
- FAQ: `FAQ.tsx`
- Contact info: `Footer.tsx`

## 🎯 Performance Optimizations

- Image optimization with proper formats
- Lazy loading for off-screen content
- Code splitting with dynamic imports
- Minimal bundle size
- Fast initial page load

## 📄 License

© 2025 KnowEdge Tech Hub. All rights reserved.
A division of KnowEdge Technologies Limited.

## 🤝 Support

For questions or support, contact:
- Email: info@knowledgetechhub.com
- WhatsApp: [Join Waitlist](https://chat.whatsapp.com/KCWc5OmiCwH1qjgiVMvUuW?mode=hqrt2)

---

Built with ❤️ using Lovable
