# Tech Experts US - Dark Mode Design Guidelines

## Design Approach

**Selected Framework:** Modern Tech-Forward Aesthetic (Hybrid Approach)
- Primary inspiration: Linear's sleek dark UI + Vercel's minimalist tech aesthetic + Apple's refinement
- Design system foundation: Fluent Design principles for enterprise credibility
- Enhancement layer: Glassmorphism, subtle animations, and modern gradients

**Core Principles:**
1. Professional sophistication with cutting-edge visual appeal
2. Dark-first design that reduces eye strain while maintaining clarity
3. Purposeful animations that enhance, never distract
4. Enterprise credibility meets startup innovation aesthetic

---

## Color Palette

### Dark Mode Foundation
- **Primary Background:** 12 8% 8% (Deep charcoal with slight blue undertone)
- **Secondary Background:** 215 15% 12% (Elevated surfaces - cards, navigation)
- **Tertiary Background:** 215 20% 16% (Interactive elements, hover states)

### Accent Colors
- **Primary Accent (Cyan):** 190 95% 55% (Electric cyan for CTAs and highlights)
- **Secondary Accent (Electric Blue):** 215 90% 60% (Links, interactive elements)
- **Success Green:** 142 76% 45% (Success states, positive metrics)
- **Warning Amber:** 38 92% 50% (Alerts, important notices)

### Text Hierarchy
- **Heading Text:** 0 0% 98% (Near-white for maximum contrast)
- **Body Text:** 215 15% 75% (Soft gray-blue for comfortable reading)
- **Muted Text:** 215 10% 55% (Secondary information, captions)
- **Accent Text:** 190 95% 65% (Interactive text, links)

### Gradient Overlays
- **Hero Gradient:** Linear gradient from 215 25% 10% to 190 30% 15% (Subtle cyan-to-navy)
- **Card Gradient:** Radial gradient from 215 20% 16% to 215 15% 12% (Depth on hover)
- **Glow Effect:** 190 95% 55% with 20% opacity (Accent highlights)

---

## Typography

### Font Families
- **Primary (Headings):** 'Inter', system-ui, sans-serif - Modern, clean, professional
- **Secondary (Body):** 'Inter', system-ui, sans-serif - Consistent for better hierarchy
- **Accent (Numbers/Stats):** 'JetBrains Mono', monospace - Technical credibility

### Type Scale (Desktop)
- **Hero Headline:** text-6xl (60px), font-bold, tracking-tight, leading-none
- **Section Headers:** text-4xl (36px), font-bold, tracking-tight
- **Subsection Headers:** text-2xl (24px), font-semibold
- **Body Large:** text-lg (18px), font-normal, leading-relaxed
- **Body Regular:** text-base (16px), font-normal, leading-relaxed
- **Small Text:** text-sm (14px), font-medium

### Responsive Adjustments
- Mobile hero: text-4xl with increased line-height
- Mobile sections: text-3xl for readability
- Maintain consistent spacing primitives across breakpoints

---

## Layout System

### Spacing Primitives
**Core Units:** We will use Tailwind units of **4, 8, 12, 16, 20, and 24** for consistent rhythm
- Micro spacing (gaps, padding): space-4, space-8
- Component spacing: space-12, space-16
- Section spacing: space-20, space-24
- Mega spacing (major sections): py-32, py-40

### Grid Structure
- **Container:** max-w-7xl mx-auto px-6 lg:px-8
- **Section Padding:** py-20 md:py-32 (generous breathing room)
- **Card Grids:** grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- **Content Width:** max-w-4xl for readable text blocks

---

## Component Library

### Navigation Bar
- **Style:** Glassmorphic header with backdrop-blur-xl
- **Background:** 215 15% 12% with 80% opacity
- **Border:** Bottom border with gradient (cyan to transparent)
- **Height:** h-20 with smooth shadow on scroll
- **Logo Treatment:** Gradient text effect (cyan to electric blue)
- **Menu Items:** Hover state with cyan underline animation (slide-in from left)
- **Mobile:** Slide-in overlay menu with staggered item animations

### Hero Section (All Pages)
- **Layout:** Full-width with min-h-screen, flex items-center
- **Background:** Particle.js animated background (floating geometric shapes in cyan/blue)
- **Content:** max-w-4xl centered, z-10 above particles
- **Headline:** Typewriter animation effect on page load
- **Subtext:** Fade-in with 200ms delay
- **CTA Buttons:** Glassmorphic with glow effect on hover, backdrop-blur-sm
- **Images:** Parallax floating images with subtle rotation on scroll

### Service Cards (3-Column Grid)
- **Base:** Rounded-2xl with glassmorphic background (backdrop-blur-md)
- **Hover Effect:** 3D lift with scale-105 transform and enhanced glow border
- **Icon:** Gradient background circle (cyan to blue), size-16, with pulse animation
- **Border:** 1px gradient border (transparent to cyan) that glows on hover
- **Transition:** All transitions duration-500 with ease-out timing

### Statistics Counter Section
- **Layout:** 4-column grid on desktop, 2-column on mobile
- **Number Display:** JetBrains Mono font, text-5xl, cyan gradient text
- **Animation:** Count-up animation on scroll into view
- **Label:** Muted text below, text-sm uppercase tracking-wider
- **Background:** Subtle gradient overlay with geometric pattern

### Testimonial Carousel
- **Container:** Max-w-6xl with overflow-hidden
- **Cards:** Glassmorphic cards with gradient backgrounds
- **Quote Icon:** Cyan gradient, size-12, absolute positioned top-left
- **Transition:** Smooth fade and slide (translate-x) with 600ms duration
- **Controls:** Minimalist dots navigation with cyan active state

### Skills/Progress Bars
- **Container:** Space-y-6 for vertical rhythm
- **Bar Background:** Dark with subtle border
- **Fill:** Animated gradient (cyan to electric blue) with smooth width transition
- **Animation:** Animate from 0% to target on scroll into view, duration-1500ms
- **Percentage:** Display in JetBrains Mono, absolute right-aligned

### Client Logo Showcase
- **Layout:** Infinite horizontal scroll animation
- **Logos:** Grayscale filter, brightness-75 default
- **Hover:** Full color with brightness-100 and scale-110
- **Background:** Gradient fade at edges (left and right)

### Contact Form
- **Input Style:** Glassmorphic with floating labels
- **Focus State:** Cyan border glow and label moves up with scale-90
- **Validation:** Green success, amber warning borders
- **Submit Button:** Full-width with gradient background and glow effect
- **Location Cards:** Grid of glassmorphic cards for office locations

### Footer
- **Background:** Gradient from primary to secondary dark
- **Layout:** Multi-column on desktop (Company, Services, Resources, Contact)
- **Social Icons:** Circular glassmorphic buttons with hover scale and glow
- **Divider:** Gradient line (cyan fading to transparent)
- **Copyright:** Muted text, text-sm, centered

---

## Animations & Effects

### Global Animation Principles
- **Entrance:** Fade-up (opacity + translateY) on scroll into view
- **Hover:** Smooth scale transforms (scale-105) with glow effects
- **Timing:** duration-300 for micro-interactions, duration-500 for component transitions
- **Easing:** Use ease-out for natural deceleration

### Specific Effects
1. **Particle Background:** Floating geometric shapes (triangles, circles) in cyan/blue with slow drift animation
2. **Glassmorphism:** backdrop-blur-xl with semi-transparent backgrounds (bg-opacity-80)
3. **Glow Effects:** box-shadow with cyan color at 30% opacity, enhanced on hover
4. **Typewriter Effect:** Sequential character reveal for hero headlines
5. **Parallax Scroll:** Hero images move at 0.5x scroll speed for depth
6. **Gradient Shifts:** Subtle hue rotation on hover for cards (360deg over 3s)

---

## Images

### Hero Sections
- **Home:** Abstract tech network visualization (nodes and connections) with cyan/blue color scheme, 1920x1080, positioned center with parallax effect
- **About:** Team collaboration imagery (modern office/tech workspace), positioned right with subtle rotation animation
- **Services:** Data center/server infrastructure visualization, full-width with overlay gradient
- **Contact:** Global map visualization with location pins, subtle pulse animation on pins

### Service Page Images
- **DMS:** Server racks with fiber optic lights, landscape orientation
- **ICS:** Network infrastructure diagram, isometric view
- **PMS:** Project timeline/kanban board visualization, modern flat design

### Icons & Graphics
- Use Heroicons for UI elements (outline style for consistency)
- Custom gradient backgrounds for service icons (circular, size-16)
- Animated floating tech icons (cloud, database, network) in hero sections

---

## Accessibility & Responsiveness

- **Contrast Ratios:** Maintain WCAG AAA standards (7:1) for body text, AA (4.5:1) for large text
- **Focus States:** Visible cyan outline with 2px offset for keyboard navigation
- **Reduced Motion:** Respect prefers-reduced-motion, use opacity transitions only
- **Mobile Navigation:** Touch-optimized with min-height of 48px for tap targets
- **Breakpoints:** sm:640px, md:768px, lg:1024px, xl:1280px, 2xl:1536px

---

## Page-Specific Treatments

### Home Page
- Animated hero with 3 rotating taglines
- 6-card service grid with staggered entrance animation
- Counter section with counting animation
- Testimonial carousel (3 slides)

### About Page  
- Mission/Vision cards in 2-column layout with icon headers
- Values accordion with expand/collapse animation
- Team section (if applicable) with hover flip cards
- Skills bars with animated fill

### Services Pages (DMS, ICS, PMS)
- Hero with service-specific imagery
- Feature list with checkmark icons and fade-in
- Detailed description in 2-column layout (text + supporting visual)

### Contact Page
- Multi-location cards in responsive grid
- Form with floating labels and validation states
- Interactive map integration (if applicable)

This design system ensures a cohesive, modern, and professional dark mode experience across all pages of Tech Experts US website.