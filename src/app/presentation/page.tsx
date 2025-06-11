'use client';

import { NavigationControls } from '@/components/presentation/navigation-controls';
import { PresentationContainer } from '@/components/presentation/presentation-container';
import {
    ClosingSlide,
    DemoSlide,
    EvolutionSlide,
    MirrorSlide,
    OpeningSlide,
    PhilosophySlide,
    PhoenixSlide,
    PollSlide,
    SkillsSlide,
    WaterSlide
} from '@/components/presentation/slides';
import { useKeyboardNavigation } from '@/hooks/presentation/use-keyboard-navigation';
import { useTouchNavigation } from '@/hooks/presentation/use-touch-navigation';
import { getSlideByIndex } from '@/lib/presentation/slides';
import { usePresentationStore } from '@/lib/presentation/store';

import { AnimatePresence } from 'framer-motion';

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
    SkillsSlide
];

export default function PresentationPage() {
    const { currentSlide } = usePresentationStore();
    useKeyboardNavigation();
    useTouchNavigation();

    const CurrentSlideComponent = slideComponents[currentSlide];
    const slideMetadata = getSlideByIndex(currentSlide);

    return (
        <PresentationContainer>
            <AnimatePresence mode='wait'>
                <CurrentSlideComponent key={`slide-${currentSlide}`} />
            </AnimatePresence>
            <NavigationControls />
        </PresentationContainer>
    );
}
