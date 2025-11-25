# KnowEdge Tech Hub - Scholarship Landing Page

A modern, responsive landing page for KnowEdge Tech Hub's Scholarship Program, built with React, TypeScript, Tailwind CSS, and Framer Motion. The application features a beautiful dark/light mode toggle and a fully responsive design.

![Preview](https://via.placeholder.com/1200x600/36c9cd/ffffff?text=KnowEdge+Tech+Hub)  
*Screenshot of the landing page*

## ✨ Features

- 🌓 **Dark/Light Mode**: Toggle between light and dark themes with system preference detection
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Blazing Fast**: Built with Vite for optimal performance
- 🎨 **Modern UI**: Clean, accessible interface with smooth animations
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML
- ♿ **Accessible**: WCAG compliant with keyboard navigation support

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: 
  - Tailwind CSS for utility-first styling
  - shadcn/ui for accessible components
- **State Management**: React Context API
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint + Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/knowedge-scholarship-landingpage.git
   cd knowedge-scholarship-landingpage
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🏗 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── Navbar.tsx       # Navigation with theme toggle
│   ├── Hero.tsx         # Hero section with CTAs
│   ├── ProgramHighlights.tsx  # Program features
│   ├── CurriculumGrid.tsx     # Course curriculum
│   ├── ScholarshipCard.tsx    # Scholarship details
│   ├── FAQ.tsx          # Frequently asked questions
│   ├── CTASection.tsx   # Call-to-action section
│   ├── Footer.tsx       # Footer component
│   ├── theme-provider.tsx  # Theme context provider
│   └── theme-toggle.tsx    # Dark/light mode toggle
├── pages/
│   └── Index.tsx        # Main landing page
├── lib/
│   └── utils.ts         # Utility functions
└── App.tsx              # Main application component
```

## 🎨 Theme System

The application features a comprehensive theming system:

- **Light/Dark Mode**: Toggle between light and dark themes
- **System Preference**: Automatically detects and applies system theme
- **Smooth Transitions**: Theme changes are animated for a polished feel

### Theme Colors

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 187 69% 51%;  /* Brand teal */
  --primary-foreground: 0 0% 100%;
  /* ... other theme variables ... */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 187 69% 51%;  /* Brand teal */
  --primary-foreground: 0 0% 100%;
  /* ... other dark theme variables ... */
}
```

## 🧩 Key Components

### Theme Toggle
- Accessible button for switching between light/dark themes
- Shows appropriate icon based on current theme
- Smooth transitions between theme changes

### Responsive Navigation
- Mobile-first responsive design
- Smooth scroll to sections
- Animated mobile menu

### Program Highlights
- Feature cards with icons
- Hover animations
- Responsive grid layout

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for animations
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
