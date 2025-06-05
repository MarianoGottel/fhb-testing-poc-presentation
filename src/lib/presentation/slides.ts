export interface SlideMetadata {
  id: string
  title: string
  subtitle?: string
  duration?: number // estimated duration in seconds
  type: 'opening' | 'content' | 'interactive' | 'closing'
  transition?: 'fade' | 'slide' | 'scale' | 'custom'
}

export const SLIDES: SlideMetadata[] = [
  {
    id: 'opening',
    title: 'Project Aurora Engineering All Hands',
    subtitle: 'June 5th, 2025',
    type: 'opening',
    transition: 'fade',
  },
  {
    id: 'mirror',
    title: 'The Mirror',
    subtitle: 'Where We Are Today',
    duration: 120,
    type: 'content',
    transition: 'slide',
  },
  {
    id: 'poll',
    title: 'The Poll',
    subtitle: "What's Holding You Back?",
    duration: 60,
    type: 'interactive',
    transition: 'fade',
  },
  {
    id: 'water',
    title: 'Water Metaphor',
    subtitle: 'Code Flows Like Water',
    duration: 90,
    type: 'content',
    transition: 'custom',
  },
  {
    id: 'evolution',
    title: 'Aurora Pod Evolution',
    subtitle: 'The Transformation Journey',
    duration: 90,
    type: 'interactive',
    transition: 'slide',
  },
  {
    id: 'demo',
    title: 'The Evolution of Development',
    subtitle: 'Traditional → AI-Powered → Agentic',
    duration: 120,
    type: 'content',
    transition: 'slide',
  },
  {
    id: 'philosophy',
    title: 'The Vibe Coder',
    subtitle: 'A New Philosophy',
    duration: 60,
    type: 'content',
    transition: 'fade',
  },
  {
    id: 'phoenix',
    title: 'What You Can Do',
    subtitle: 'Your Personal AI Transformation',
    duration: 90,
    type: 'interactive',
    transition: 'scale',
  },
  {
    id: 'closing',
    title: 'The Choice',
    subtitle: 'Will You?',
    type: 'closing',
    transition: 'fade',
  },
  {
    id: 'skills',
    title: 'Skills for the Future',
    subtitle: 'What will set you apart',
    duration: 90,
    type: 'content',
    transition: 'fade',
  },
]

export const getSlideById = (id: string) => SLIDES.find((slide) => slide.id === id)
export const getSlideByIndex = (index: number) => SLIDES[index]