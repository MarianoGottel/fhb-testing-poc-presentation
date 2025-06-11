'use client';

import { useEffect, useState } from 'react';

import { NavigationControls } from '@/components/presentation/navigation-controls';
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
import { SLIDES, getSlideByIndex } from '@/lib/presentation/slides';
import { usePresentationStore } from '@/lib/presentation/store';
import { cn } from '@/lib/utils';

import { AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';

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

const speakerNotes = [
    // Opening
    `Welcome everyone. Today marks a pivotal moment in our engineering journey.
  We're here to talk about transformation - not just technological, but philosophical.`,

    // Mirror
    `Let's be honest about where we are. Only 23% actively using AI tools.
  We're operating at 20% of our potential. This isn't criticism - it's opportunity.`,

    // Poll
    `Your concerns are valid. The pace of change IS overwhelming.
  But remember - we've navigated transformations before.`,

    // Water
    `Code is temporary. Solutions are permanent. When we stop clinging to our code,
  we can focus on what matters: solving problems and creating value.`,

    // Evolution
    `This isn't about replacing you. It's about amplifying you.
  In 6 months, the landscape will be unrecognizable. We can lead or follow.`,

    // Demo
    `Watch the difference. Not just in speed, but in completeness.
  The AI handles the mundane so you can focus on the meaningful.`,

    // Philosophy
    `The Tao teaches us that by letting go, we gain more.
  Your value was never in the code - it was in your vision.`,

    // What You Can Do
    `This is about personal reflection. What tasks bog you down?
  How could AI free you? Share your ideas - we're all learning together.`,

    // Closing
    `The choice is yours. But know this: First Horizon will lead this transformation.
  The question is: will you lead with us?`,

    // Skills
    `These aren't just nice-to-haves. These are survival skills for the AI age.
  Develop your opinion. Stay curious. Take ownership. Ask better questions.`
];

export default function PresenterPage() {
    const { currentSlide, goToSlide } = usePresentationStore();
    const [elapsedTime, setElapsedTime] = useState(0);
    const [startTime] = useState(Date.now());

    useKeyboardNavigation();

    useEffect(() => {
        const timer = setInterval(() => {
            setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
        }, 1000);

        return () => clearInterval(timer);
    }, [startTime]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;

        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const CurrentSlideComponent = slideComponents[currentSlide];
    const NextSlideComponent = currentSlide < slideComponents.length - 1 ? slideComponents[currentSlide + 1] : null;

    return (
        <div className='flex h-screen bg-gray-900'>
            {/* Main presentation view */}
            <div className='relative flex-1'>
                <div className='h-full scale-75 transform'>
                    <AnimatePresence mode='wait'>
                        <CurrentSlideComponent key={`slide-${currentSlide}`} />
                    </AnimatePresence>
                </div>
                {/* <NavigationControls /> */}
            </div>

            {/* Presenter panel */}
            <div className='w-96 overflow-y-auto border-l border-gray-700 bg-gray-800 p-6'>
                {/* Timer */}
                <div className='mb-6 flex items-center justify-between'>
                    <div className='flex items-center space-x-2 text-white'>
                        <Clock className='h-5 w-5' />
                        <span className='font-mono text-lg'>{formatTime(elapsedTime)}</span>
                    </div>
                    <span className='text-white/60'>
                        Slide {currentSlide + 1} of {SLIDES.length}
                    </span>
                </div>

                {/* Current slide info */}
                <div className='mb-6'>
                    <h3 className='mb-2 text-lg font-semibold text-white'>Current Slide</h3>
                    <div className='rounded bg-gray-700 p-4'>
                        <h4 className='font-medium text-[#66B2FF]'>{SLIDES[currentSlide].title}</h4>
                        {SLIDES[currentSlide].subtitle && (
                            <p className='mt-1 text-sm text-white/60'>{SLIDES[currentSlide].subtitle}</p>
                        )}
                    </div>
                </div>

                {/* Speaker notes */}
                <div className='mb-6'>
                    <h3 className='mb-2 text-lg font-semibold text-white'>Speaker Notes</h3>
                    <div className='rounded bg-gray-700 p-4 text-sm leading-relaxed text-white/80'>
                        {speakerNotes[currentSlide]}
                    </div>
                </div>

                {/* Next slide preview */}
                {NextSlideComponent && (
                    <div className='mb-6'>
                        <h3 className='mb-2 text-lg font-semibold text-white'>Next Slide</h3>
                        <div className='rounded bg-gray-700 p-4'>
                            <h4 className='font-medium text-[#4ECDC4]'>{SLIDES[currentSlide + 1].title}</h4>
                        </div>
                    </div>
                )}

                {/* Slide overview */}
                <div>
                    <h3 className='mb-2 text-lg font-semibold text-white'>All Slides</h3>
                    <div className='space-y-1'>
                        {SLIDES.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => goToSlide(index)}
                                className={cn(
                                    'w-full rounded px-3 py-2 text-left text-sm transition-colors',
                                    currentSlide === index
                                        ? 'bg-[#66B2FF] text-white'
                                        : 'bg-gray-700 text-white/60 hover:bg-gray-600 hover:text-white'
                                )}>
                                {index + 1}. {slide.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
