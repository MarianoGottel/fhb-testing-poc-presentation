# Project Aurora Engineering All Hands - Presentation App

## Overview
An interactive Next.js presentation application for the Engineering All Hands keynote on AI transformation at First Horizon Bank.

## Quick Start

### Running the Presentation
```bash
npm run dev
```

Then navigate to:
- **Main Presentation**: http://localhost:3000/presentation
- **Presenter View**: http://localhost:3000/presentation/presenter
- **Static Fallback**: http://localhost:3000/presentation/fallback

### Keyboard Controls
- **→** or **Space**: Next slide
- **←**: Previous slide
- **F**: Toggle fullscreen
- **1-9**: Jump to specific slide
- **Ctrl/Cmd + P**: Toggle presenter mode
- **ESC**: Exit fullscreen

### Touch Controls (Mobile/Tablet)
- **Swipe Left**: Next slide
- **Swipe Right**: Previous slide

## Presentation Structure

### Slides
1. **Opening**: Project Aurora title and date
2. **The Mirror**: Current AI adoption metrics (23% usage)
3. **The Poll**: Interactive audience poll on AI resistance
4. **Water Metaphor**: Philosophical approach to letting go
5. **Pod Evolution**: Transformation from traditional to AI-enhanced teams
6. **Live Demo**: Side-by-side comparison of traditional vs AI coding
7. **Philosophy**: The Vibe Coder Tao philosophy
8. **Project Phoenix**: 30-day challenge signup
9. **Closing**: The choice - Engineer vs Builder

### Key Features
- **Smooth Animations**: Framer Motion for professional transitions
- **Interactive Elements**: Live poll and Phoenix challenge signup
- **Persistent Data**: Poll results and signups saved locally
- **Presenter View**: Speaker notes, timer, and slide navigation
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Fallback Mode**: Static version for emergencies

## Technical Details

### State Management
- Zustand for presentation state
- LocalStorage persistence for poll/signup data
- Real-time updates across components

### Navigation
- Keyboard navigation hook
- Touch/swipe support
- Direct slide jumping
- Progress indicator

### Animations
- Slide transitions (fade, slide, scale)
- Per-element entrance animations
- Interactive hover states
- Particle effects on Phoenix slide

## Pre-Presentation Checklist

### Technical Setup
- [ ] Test on venue display/projector
- [ ] Verify resolution (optimized for 1920x1080)
- [ ] Check keyboard/clicker compatibility
- [ ] Test fullscreen mode
- [ ] Ensure fallback URL is bookmarked

### Content Verification
- [ ] Review all slide content for typos
- [ ] Verify First Horizon branding colors
- [ ] Test interactive elements (poll, signup)
- [ ] Confirm speaker notes are accurate

### Backup Preparation
- [ ] Have fallback URL ready
- [ ] Screenshot each slide as backup
- [ ] Export static PDF version
- [ ] Test on backup laptop

## Customization

### Modifying Slides
Slides are located in `/src/components/presentation/slides/`
Each slide is a separate component for easy editing.

### Updating Speaker Notes
Edit the `speakerNotes` array in `/src/app/presentation/presenter/page.tsx`

### Changing Colors
First Horizon brand colors are used throughout:
- Primary: `#003366`
- Secondary: `#66B2FF`
- Accent: `#FF6B6B`
- Success: `#4ECDC4`

## Troubleshooting

### Animations Lagging
- Use presenter view which has scaled preview
- Disable complex animations in `SlideContainer`
- Use static fallback if severe

### Keyboard Not Working
- Check if input field has focus
- Try clicking on slide background
- Use navigation buttons as backup

### Poll/Signup Not Saving
- Check browser localStorage permissions
- Clear cache and reload
- Data persists across sessions

## Deployment

### Production Build
```bash
npm run build
npm start
```

### Environment Variables
No environment variables required - fully client-side application.

### Hosting Options
- Vercel (recommended)
- Static export to any web server
- Docker container available

## Post-Presentation

### Extracting Data
Poll results and Phoenix signups are stored in localStorage:
```javascript
// In browser console
JSON.parse(localStorage.getItem('presentation-storage'))
```

### Follow-up Actions
1. Export poll results
2. Share Phoenix Challenge participant list
3. Schedule AI Masterclass
4. Distribute presentation link

## Support
For technical issues during presentation:
- Primary: Use static fallback
- Secondary: Have PDF screenshots ready
- Emergency: Use speaker notes only