'use client'

import { AnimatePresence } from 'framer-motion'
import { PresentationContainer } from '@/components/presentation/presentation-container'
import { NavigationControls } from '@/components/presentation/navigation-controls'
import { useKeyboardNavigation } from '@/hooks/presentation/use-keyboard-navigation'
import { useTouchNavigation } from '@/hooks/presentation/use-touch-navigation'
import { usePresentationStore } from '@/lib/presentation/store'
import { getSlideByIndex } from '@/lib/presentation/slides'
import {
  OpeningSlide,
  MirrorSlide,
  PollSlide,
  WaterSlide,
  EvolutionSlide,
  DemoSlide,
  PhilosophySlide,
  PhoenixSlide,
  ClosingSlide,
  SkillsSlide,
} from '@/components/presentation/slides'

const slideComponents = [
  OpeningSlide,
  MirrorSlide,
  PollSlide,
  WaterSlide,
  EvolutionSlide,
  DemoSlide,
  PhilosophySlide,
  PhoenixSlide,
  ClosingSlide,
  SkillsSlide,
]

export default function PresentationPage() {
  const { currentSlide } = usePresentationStore()
  useKeyboardNavigation()
  useTouchNavigation()

  const CurrentSlideComponent = slideComponents[currentSlide]
  const slideMetadata = getSlideByIndex(currentSlide)

  return (
    <PresentationContainer>
      <AnimatePresence mode="wait">
        <CurrentSlideComponent key={`slide-${currentSlide}`} />
      </AnimatePresence>
      <NavigationControls />
    </PresentationContainer>
  )
}