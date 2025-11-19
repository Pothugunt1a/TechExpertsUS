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
1. ✅ **Streamlined PMS Page** with focused, clean design:
   - **Hero**: Full-screen parallax effect with background image and animated gradient text
   - **Process Improvement**: Diagonal split design with image + floating stats card
   - **Risk Analysis**: Dark background with 3-column grid and animated rotating icons
   - **Custom Software Development**: Split background layout (Security Solutions style) with image and floating code badge
   - **Our Core Services**: 8 service categories in card grid matching Home page style:
     - Custom Software Development
     - Web Application Development
     - Secure Internet Solutions
     - Secure Intranet Solutions
     - Responsive Web Design
     - 3rd Party Integrations
     - Enterprise Database Solutions
     - Scrum Training
   - **CTA**: Modern gradient with floating orbs and particle background
   - **3 Stock Images**: Process improvement, software development (with floating badge)
   - **Simplified Structure**: Removed unnecessary sections for cleaner, more focused page
   - **✅ COMPREHENSIVE DATA-TESTID COVERAGE**: 50+ data-testid attributes across all sections:
     - Every button, link, and interactive element tagged
     - All headings, descriptions, and text content tagged
     - All images, icons, stats, badges, and cards tagged
     - Dynamic elements use indexed data-testid (e.g., `feature-process-${index}`, `card-service-${index}`)
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
