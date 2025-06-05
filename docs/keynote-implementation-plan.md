# Keynote Implementation Plan
## Project Aurora Engineering All Hands - Interactive Presentation

### Project Overview
Build an interactive Next.js presentation application for the Engineering All Hands keynote on AI transformation.

**Timeline**: Aiming for completion before June 5th, 2025  
**Duration**: 5-10 minute presentation  
**Tech Stack**: Next.js 15, React 19, Tailwind CSS, Shadcn UI, Framer Motion

---

## Phase 1: Project Setup & Architecture (Day 1)

### Environment Setup
- [ ] Clean up example components from `/src/components/`
- [ ] Remove example page from `/src/app/(delete-this-and-modify-page.tsx)/`
- [ ] Create presentation folder structure:
  ```
  /src/app/presentation/
  /src/components/presentation/
  /src/lib/presentation/
  /src/hooks/presentation/
  ```
- [ ] Install additional dependencies:
  - [ ] `framer-motion` for animations
  - [ ] `recharts` for data visualizations (already installed)
  - [ ] `zustand` or `jotai` for presentation state management
  - [ ] `react-use-keypress` for keyboard navigation

### Core Architecture
- [ ] Create presentation context/store:
  - [ ] Current slide index
  - [ ] Presentation mode (presenter/viewer)
  - [ ] Poll results storage
  - [ ] Animation states
  - [ ] Phoenix challenge signups

- [ ] Set up routing structure:
  - [ ] `/presentation` - Main presentation view
  - [ ] `/presentation/presenter` - Presenter view with notes
  - [ ] `/presentation/fallback` - Static fallback version

- [ ] Create base components:
  - [ ] `PresentationContainer` - Main wrapper
  - [ ] `SlideContainer` - Individual slide wrapper
  - [ ] `NavigationControls` - Arrow keys, progress bar
  - [ ] `PresentationProvider` - Context provider

---

## Phase 2: Navigation & Core Functionality (Day 2)

### Navigation System
- [ ] Implement keyboard navigation:
  - [ ] Arrow keys (←/→) for slide navigation
  - [ ] Space bar for next slide
  - [ ] ESC for overview mode
  - [ ] F for fullscreen
  - [ ] Numbers (1-9) for direct slide access

- [ ] Create slide progress indicator:
  - [ ] Bottom progress bar
  - [ ] Slide counter (1/8)
  - [ ] Time elapsed indicator (optional)

- [ ] Add touch/swipe support for mobile:
  - [ ] Swipe left/right for navigation
  - [ ] Pinch to zoom out to overview

### Slide Management
- [ ] Create slide manifest/registry:
  - [ ] Slide components mapping
  - [ ] Slide metadata (title, duration, type)
  - [ ] Transition configurations

- [ ] Implement transition system:
  - [ ] Fade transitions as default
  - [ ] Custom transitions per slide
  - [ ] Smooth animation timing

---

## Phase 3: Individual Slides Implementation (Days 3-5)

### Slide 0: Opening Screen
- [ ] Create opening animation:
  - [ ] Pulsing cursor effect
  - [ ] Text fade-in sequence
  - [ ] First Horizon brand integration
- [ ] Add date and title typography

### Slide 1: The Mirror (Adoption Dashboard)
- [ ] Create dashboard component:
  - [ ] Animated progress bars
  - [ ] Live percentage counters
  - [ ] Subtle particle background
- [ ] Mock data structure:
  - [ ] Active users: 23%
  - [ ] Potential utilization: 80%
  - [ ] Pod-by-pod breakdown (anonymized)
- [ ] Add real-time animation on slide entry

### Slide 2: The Poll
- [ ] Build interactive poll component:
  - [ ] Radio button options
  - [ ] Anonymous voting mechanism
  - [ ] Local storage for results
- [ ] Create results visualization:
  - [ ] Animated bar chart
  - [ ] Particle effect for votes
  - [ ] Percentage display
- [ ] Poll options:
  - [ ] Too many tools, too fast
  - [ ] Don't know where to start
  - [ ] Concerned about job security
  - [ ] Pride in my craft
  - [ ] All of the above

### Slide 3: Water Metaphor
- [ ] Implement water animation:
  - [ ] CSS/SVG water flow effect
  - [ ] Interactive mouse following (optional)
  - [ ] Text reveals with flow
- [ ] Add philosophical quotes:
  - [ ] Timed text appearances
  - [ ] Smooth fade transitions
  - [ ] Zen-inspired typography

### Slide 4: Pod Evolution
- [ ] Create evolution diagram:
  - [ ] Three-stage pod visualization
  - [ ] Animated transitions between stages
  - [ ] Interactive click-through
- [ ] Pod stages:
  - [ ] Traditional Pod (1.0)
  - [ ] AI-Enhanced Pod (2.0)
  - [ ] Builder Pod (3.0)
- [ ] Add role descriptions and transitions

### Slide 5: Live Demo
- [ ] Build split-screen comparison:
  - [ ] Traditional coding side
  - [ ] AI-powered side
  - [ ] Syntax highlighting
  - [ ] Typing animation for traditional
  - [ ] Instant appearance for AI
- [ ] Add timer components:
  - [ ] 2 hours vs 2 minutes
  - [ ] Visual speed comparison
- [ ] Include sample code:
  - [ ] Banking validation function
  - [ ] First Horizon specific example

### Slide 6: Vibe Coder Philosophy
- [ ] Create minimalist design:
  - [ ] Centered quote layout
  - [ ] Gentle fade-in animations
  - [ ] Subtle background pattern
- [ ] Implement quote reveal:
  - [ ] Line-by-line appearance
  - [ ] Emphasis on key phrases
  - [ ] Breathing animation effect

### Slide 7: Project Phoenix Challenge
- [ ] Build challenge signup component:
  - [ ] Challenge description
  - [ ] Real-time counter
  - [ ] Join button with animation
- [ ] Create Phoenix visual:
  - [ ] Rising Phoenix animation
  - [ ] Fire particle effects
  - [ ] First Horizon brand colors
- [ ] Add signup functionality:
  - [ ] Local storage for count
  - [ ] Animated counter increment
  - [ ] Success confirmation

### Slide 8: Closing Screen
- [ ] Design transformation visual:
  - [ ] Engineer → Builder animation
  - [ ] Fade effect between states
  - [ ] Powerful closing question
- [ ] Add call-to-action:
  - [ ] "Will you?" emphasis
  - [ ] Subtle background animation
  - [ ] End screen hold

---

## Phase 4: Polish & Enhancements (Day 6)

### Visual Polish
- [ ] Implement First Horizon brand colors:
  - [ ] Primary: #003366
  - [ ] Secondary: #66B2FF
  - [ ] Accent: #FF6B6B
  - [ ] Update Tailwind config

- [ ] Add micro-interactions:
  - [ ] Button hover effects
  - [ ] Smooth transitions
  - [ ] Loading states
  - [ ] Error boundaries

### Performance Optimization
- [ ] Optimize animations:
  - [ ] Use CSS transforms where possible
  - [ ] Implement lazy loading for heavy slides
  - [ ] Preload next slide assets

- [ ] Code splitting:
  - [ ] Dynamic imports for slides
  - [ ] Optimize bundle size
  - [ ] Remove unused dependencies

### Accessibility
- [ ] Add ARIA labels:
  - [ ] Slide navigation
  - [ ] Interactive elements
  - [ ] Poll options

- [ ] Keyboard navigation:
  - [ ] Tab order optimization
  - [ ] Focus management
  - [ ] Screen reader support

---

## Phase 5: Presenter Features (Day 7)

### Presenter View
- [ ] Create presenter dashboard:
  - [ ] Current slide preview
  - [ ] Next slide preview
  - [ ] Speaker notes display
  - [ ] Timer/stopwatch
  - [ ] Slide overview grid

- [ ] Add presenter controls:
  - [ ] Jump to any slide
  - [ ] Pause/resume timer
  - [ ] Notes editor (optional)
  - [ ] Audience view toggle

### Speaker Notes Integration
- [ ] Load notes from markdown:
  - [ ] Parse speaker notes file
  - [ ] Match notes to slides
  - [ ] Display in presenter view

- [ ] Add note features:
  - [ ] Font size adjustment
  - [ ] Highlight key points
  - [ ] Timing suggestions

---

## Phase 6: Testing & Fallbacks (Day 8)

### Testing
- [ ] Browser compatibility:
  - [ ] Chrome/Edge
  - [ ] Safari
  - [ ] Firefox
  - [ ] Mobile browsers

- [ ] Device testing:
  - [ ] Desktop (various resolutions)
  - [ ] Tablet (iPad)
  - [ ] Mobile (iPhone/Android)
  - [ ] Projector resolution (1920x1080)

- [ ] Performance testing:
  - [ ] Animation smoothness
  - [ ] Load times
  - [ ] Memory usage
  - [ ] CPU usage during animations

### Fallback Solutions
- [ ] Create static version:
  - [ ] Export as PDF
  - [ ] Print-friendly styles
  - [ ] No animation version

- [ ] Offline capability:
  - [ ] Service worker setup
  - [ ] Cache critical assets
  - [ ] Offline indicator

- [ ] Error handling:
  - [ ] Graceful degradation
  - [ ] Error boundaries
  - [ ] Fallback content

---

## Phase 7: Deployment & Documentation (Day 9)

### Deployment
- [ ] Build optimization:
  - [ ] Production build
  - [ ] Environment variables
  - [ ] Asset optimization

- [ ] Deployment options:
  - [ ] Vercel deployment
  - [ ] Docker container
  - [ ] Static export option

- [ ] Pre-presentation setup:
  - [ ] Test on venue equipment
  - [ ] Backup deployment
  - [ ] Local copy ready

### Documentation
- [ ] Create README:
  - [ ] Setup instructions
  - [ ] Presenter guide
  - [ ] Troubleshooting

- [ ] Code documentation:
  - [ ] Component documentation
  - [ ] State management guide
  - [ ] Customization guide

---

## Phase 8: Final Review & Practice (Day 10)

### Final Checks
- [ ] Content review:
  - [ ] Typo check
  - [ ] Brand compliance
  - [ ] Message consistency

- [ ] Technical review:
  - [ ] All animations working
  - [ ] Navigation smooth
  - [ ] No console errors

- [ ] Backup preparations:
  - [ ] USB with offline version
  - [ ] PDF backup
  - [ ] Screenshots of each slide

### Practice & Refinement
- [ ] Practice runs:
  - [ ] Full presentation walkthrough
  - [ ] Timing adjustments
  - [ ] Transition smoothness

- [ ] Gather feedback:
  - [ ] Test with small audience
  - [ ] Adjust based on feedback
  - [ ] Final refinements

---

## Success Metrics & Post-Presentation

### Tracking Setup
- [ ] Analytics integration:
  - [ ] Slide view tracking
  - [ ] Poll participation rate
  - [ ] Phoenix Challenge signups

- [ ] Follow-up preparation:
  - [ ] Export poll results
  - [ ] Challenge participant list
  - [ ] Engagement metrics

### Post-Presentation Tasks
- [ ] Share presentation link
- [ ] Publish to company portal
- [ ] Create follow-up resources
- [ ] Schedule AI Masterclass

---

## Risk Mitigation

### Technical Risks
- **Risk**: Animations lag on venue hardware
  - **Mitigation**: Performance mode with reduced animations
  
- **Risk**: Internet connection fails
  - **Mitigation**: Fully offline-capable version

- **Risk**: Browser compatibility issues
  - **Mitigation**: Tested static fallback ready

### Content Risks
- **Risk**: Strong pushback during presentation
  - **Mitigation**: Prepared responses in speaker notes

- **Risk**: Technical demo fails
  - **Mitigation**: Pre-recorded video backup

---

## Resources & Assets Needed

### Design Assets
- [ ] First Horizon brand guidelines
- [ ] Logo files (SVG preferred)
- [ ] Brand color palette
- [ ] Approved fonts

### Content Assets
- [ ] Current Cursor AI usage data
- [ ] Pod structure diagrams
- [ ] Code examples relevant to First Horizon
- [ ] Phoenix challenge details

### Technical Resources
- [ ] Presentation display specs
- [ ] Venue internet reliability
- [ ] Backup equipment availability
- [ ] IT support contact

---

## Timeline Summary

- **Days 1-2**: Foundation & Navigation (20% complete)
- **Days 3-5**: Slide Implementation (60% complete)
- **Days 6-7**: Polish & Presenter Features (80% complete)
- **Days 8-9**: Testing & Deployment (95% complete)
- **Day 10**: Final Review & Practice (100% complete)

**Total Estimated Time**: 10 development days
**Buffer Time**: 2-3 additional days recommended

---

## Notes

- Prioritize core slides over advanced animations if time constrained
- Keep performance in mind - venue hardware may vary
- Ensure all interactive elements have keyboard alternatives
- Test thoroughly on actual presentation hardware before event