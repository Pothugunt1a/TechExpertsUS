# Tech Experts US - Full-Featured Modern Website

## Project Overview
A stunning modern website for Tech Experts US with **both light and dark mode** support, professional animations, glassmorphism effects, particle backgrounds, animated floating banner, and advanced visual effects across all pages.

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Routing**: Wouter
- **Styling**: Tailwind CSS with custom dark mode theme
- **Animations**: Framer Motion
- **UI Components**: Shadcn UI
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form with Zod validation
- **Backend**: Express.js with TypeScript
- **Storage**: In-memory storage (MemStorage)

## Pages
- **Home** (`/`): Hero with particle background, services showcase, statistics counter, testimonials
- **About** (`/about`): Company info, mission/vision, skills progress bars, client logos
- **Services** (`/services`): Service overview and categories
  - Data Center Management (`/services/dms`)
  - Infrastructure Consulting (`/services/ics`)
  - Project Management Solutions (`/services/pms`)
- **Consult**:
  - Consulting (`/consult/consulting`)
  - Outsourcing (`/consult/outsourcing`)
  - Staffing Solutions (`/consult/staffing`)
- **Careers** (`/careers`): Professional careers page with job listings, company culture, benefits, testimonials, and application process
- **Contact** (`/contact`): Contact form and global office locations

## Design Features
- **Light/Dark Mode Toggle**: Fully functional theme switcher with localStorage persistence
  - Animated sun/moon icon transitions
  - Seamless theme switching across all components
  - Default to dark mode with user preference saved
- **Floating Banner**: Promotional announcement banner with:
  - Gradient animation and shimmer effects
  - Animated megaphone icon
  - Dismissible with smooth exit animation
  - Glowing border effect
- **Advanced Animations**:
  - Parallax scroll effects on hero section
  - Animated floating tech icons (CPU, Database, Cloud, Zap)
  - Fade-in and slide animations on scroll
  - 3D hover effects on service cards
  - Animated statistics counters with CountUp
  - Gradient text effects with animation
  - Smooth page transitions
  - Interactive hover animations on benefit items
  - Pulsing background glow effects
- **Glassmorphism**: Backdrop blur effects on navigation, cards, and modals
- **Particle Background**: Custom particle animation system
- **Components**:
  - Animated navigation with theme toggle (desktop & mobile)
  - **Interactive Service Categories** with clickable list and dynamic SVG visuals
  - Service cards with 3D hover effects
  - Statistics counter with CountUp animation
  - Testimonial carousel
  - Skill progress bars
  - Client logo showcase
  - Contact form with validation
  - Enhanced "Why Choose Us" section with animated icons

## Color Palette
- Primary: Cyan (#22d3ee)
- Secondary: Electric Blue
- Background: Deep charcoal with blue undertone
- Card: Elevated dark surfaces
- Text: Three-level hierarchy (default, secondary, tertiary)

## Key Features
- ✅ **Interactive Service Categories** with clickable navigation and dynamic SVG visuals
- ✅ **Light & Dark Mode** with persistent theme switching
- ✅ **Floating Promotional Banner** with animations
- ✅ **Parallax Scroll Effects** on hero section
- ✅ **Animated Tech Icons** floating in the background
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth animations throughout using Framer Motion
- ✅ Particle effects on hero sections
- ✅ Glassmorphic navigation bar with theme toggle
- ✅ Professional service cards with 3D hover effects
- ✅ Animated statistics with CountUp
- ✅ Interactive testimonials carousel
- ✅ Contact form with validation
- ✅ Global office locations display
- ✅ Enhanced visual effects (glows, gradients, shimmer)

## Development Status
- ✅ Schema and types defined
- ✅ Design tokens configured for light and dark themes
- ✅ All page components built
- ✅ Reusable UI components created
- ✅ Navigation and footer implemented
- ✅ Light/Dark mode toggle with ThemeProvider
- ✅ Floating banner component with animations
- ✅ Advanced animations and visual effects added
- ✅ Parallax scroll effects implemented
- ✅ Enhanced "Why Choose Us" section with interactive elements
- ⏳ Backend API implementation pending
- ⏳ Contact form integration pending

## Recent Updates (Latest Session)
1. ✅ **Completely Redesigned PMS Page** with modern, trending layouts:
   - **Hero**: Full-screen parallax effect with background image and animated gradient text
   - **Process Improvement**: Diagonal split design with image + floating stats card
   - **Risk Analysis**: Dark background with 3-column grid and animated icons
   - **Custom Software**: Alternating layout - image left, numbered steps right
   - **Web Applications**: Full-width image background with horizontal service cards
   - **Security Solutions**: Split background with image overlay and floating security badge
   - **Additional Solutions**: 3-column grid with hover animations
   - **Scrum Training**: Centered section with rotating icon
   - **CTA**: Modern gradient with floating orbs and particle background
   - **4 Stock Images Integrated**: Process improvement, software dev, security, scrum
   - **Avoided Card Components**: Used alternative layouts like diagonal splits, floating elements
   - **Unique Section Designs**: Each section has completely different layout structure
   - **✅ COMPREHENSIVE DATA-TESTID COVERAGE**: All interactive elements and meaningful content now have data-testid attributes for automated testing:
     - Every button, link, and interactive element tagged
     - All headings, descriptions, and text content tagged
     - All images, stats, badges, and cards tagged
     - Dynamic elements use indexed data-testid (e.g., `feature-process-${index}`)
     - Total: 70+ data-testid attributes across 9 unique sections
2. ✅ **Redesigned Careers Page "Why Join?"** section with Bento Box layout:
   - Asymmetric grid with varying card sizes (trending 2024-2025 design)
   - 4 stock images integrated with gradient overlays
   - Hover zoom animations on all images
   - Large featured card, tall vertical cards, wide horizontal cards
3. ✅ Previous updates: Professional Careers page, Interactive Service Categories, About page updates
4. ✅ All core features maintained: ThemeProvider, dark mode, floating banner, parallax effects
5. ✅ **Testing Infrastructure**: Comprehensive data-testid coverage enables automated UI testing and quality assurance

## How to Use
- **Theme Toggle**: Click the sun/moon icon in the navigation bar to switch between light and dark modes
- **Floating Banner**: The promotional banner can be dismissed by clicking the X button
- **Responsive Design**: The website adapts to all screen sizes with mobile-friendly navigation

## Next Steps
1. Implement backend contact form API
2. Add email notification handling
3. Connect frontend to backend
4. Add more page-specific animations
5. Optimize performance and bundle size
6. Final QA testing across all browsers
