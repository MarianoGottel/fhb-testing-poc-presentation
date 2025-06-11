'use client';

import { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';

import { usePresentationStore } from '@/lib/presentation/store';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface UserStoryComponentSlideshowProps {
    isOpen: boolean;
    onClose: () => void;
}

const slides = [
    {
        src: '/images/step1CreateTestCases.png',
        alt: 'Create Test Cases - AI analyzes user story and generates test cases',
        title: 'Step 1: Create Test Cases',
        description:
            'The agent analyzes and validates the user story (fetched from Jira). Based on acceptance criteria, it generates comprehensive test cases. Uses jira_get_issues and create_test_cases tools.'
    },
    {
        src: '/images/step2GenerateComponent.png',
        alt: 'Generate Component - AI creates React component from Figma design',
        title: 'Step 2: Generate Component',
        description:
            'The agent generates a React component based on Figma design and user story requirements. Uses create_screen tool.'
    },
    {
        src: '/images/step3GenerateStories.png',
        alt: 'Generate Stories - AI creates Storybook stories for component',
        title: 'Step 3: Generate Stories',
        description:
            'The agent creates Storybook stories based on the test cases and component structure. Uses generate_storybook_testing_stories tool'
    },
    {
        src: '/images/step4DebugStories.png',
        alt: 'Debug Stories - AI iteratively fixes and validates Storybook tests',
        title: 'Step 4: Debug Stories',
        description:
            'The agent iteratively debugs and validates the Storybook stories to ensure they work correctly. Uses browser_actions toolset.'
    }
];

export function UserStoryComponentSlideshow({ isOpen, onClose }: UserStoryComponentSlideshowProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { setProcessSlideshowOpen } = usePresentationStore();

    useEffect(() => {
        if (!isOpen) {
            setCurrentSlide(0);
        }
        // Update the global state when slideshow opens/closes
        setProcessSlideshowOpen(isOpen);
    }, [isOpen, setProcessSlideshowOpen]);

    const nextSlide = useCallback(() => {
        console.log(`Next slide clicked. Current: ${currentSlide}, Total: ${slides.length}`);
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            console.log('Last slide reached, closing slideshow');
            // After last slide, close slideshow and return to main presentation
            setCurrentSlide(0); // Reset to first slide for next time
            onClose();
        }
    }, [currentSlide, onClose]);

    const prevSlide = useCallback(() => {
        console.log(`Previous slide clicked. Current: ${currentSlide}`);
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    }, [currentSlide]);

    const goToSlide = useCallback((index: number) => {
        console.log(`Going to slide ${index + 1}`);
        setCurrentSlide(index);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!isOpen) return;

            console.log(`Key pressed: ${event.key}`);
            switch (event.key) {
                case 'ArrowRight':
                case ' ':
                    event.preventDefault();
                    event.stopPropagation();
                    nextSlide();
                    break;
                case 'ArrowLeft':
                    event.preventDefault();
                    event.stopPropagation();
                    prevSlide();
                    break;
                case 'Escape':
                    event.preventDefault();
                    event.stopPropagation();
                    onClose();
                    break;
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, nextSlide, prevSlide, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='fixed inset-0 z-[9999] bg-black'
                    style={{ zIndex: 9999 }}>
                    <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-[#0A0A0A] via-[#0A0A1A] to-[#0A0A0A]'>
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className='absolute top-6 right-6 z-10 rounded-full bg-red-600 p-3 text-white transition-colors hover:bg-red-700'>
                            <X className='h-6 w-6' />
                        </button>

                        {/* Slide indicator */}
                        <div className='absolute top-6 left-6 z-10 rounded-lg bg-black/50 px-3 py-1 text-white'>
                            <span className='text-lg font-bold'>
                                {currentSlide + 1} / {slides.length}
                            </span>
                        </div>

                        <div className='flex h-full w-full max-w-7xl flex-col pt-4'>
                            {/* Slide title */}
                            <motion.h2
                                key={currentSlide}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className='mb-2 text-center text-3xl font-bold text-white'>
                                {slides[currentSlide].title}
                            </motion.h2>

                            {/* Description Panel - Top */}
                            <motion.div
                                key={`desc-${currentSlide}`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className='mx-auto mb-4 max-w-4xl rounded-lg border border-gray-600 bg-gradient-to-r from-gray-900/80 to-gray-800/80 p-6 backdrop-blur-sm'>
                                <div className='text-center'>
                                    <div className='mb-3 flex items-center justify-center space-x-2'>
                                        <div className='h-2 w-2 rounded-full bg-[#4ECDC4]'></div>
                                        <span className='text-sm font-medium text-[#4ECDC4]'>Process Description</span>
                                    </div>
                                    <p className='text-lg leading-relaxed text-gray-200'>
                                        {slides[currentSlide].description}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Screenshot with Side Navigation - Flexbox Layout */}
                            <div className='flex flex-1 items-center justify-between gap-4 px-4'>
                                {/* Previous Button - Left Side */}
                                <button
                                    onClick={prevSlide}
                                    disabled={currentSlide === 0}
                                    className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/80 text-white backdrop-blur-sm transition-all hover:bg-blue-700 disabled:bg-gray-600/50 disabled:opacity-50'>
                                    <ChevronLeft className='h-6 w-6' />
                                </button>

                                {/* Wide Screenshot Container */}
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className='relative h-full max-h-[calc(100vh-80px)] flex-1 overflow-hidden'>
                                    <Image
                                        src={slides[currentSlide].src}
                                        alt={slides[currentSlide].alt}
                                        fill
                                        className='object-contain'
                                        unoptimized
                                    />
                                </motion.div>

                                {/* Next Button - Right Side */}
                                <button
                                    onClick={nextSlide}
                                    className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-600/80 text-white backdrop-blur-sm transition-all hover:bg-green-700'>
                                    <ChevronRight className='h-6 w-6' />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
