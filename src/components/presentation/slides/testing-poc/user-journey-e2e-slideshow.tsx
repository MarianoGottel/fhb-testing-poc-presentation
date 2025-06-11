'use client';

import { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';

import { usePresentationStore } from '@/lib/presentation/store';

import { SlideContainer } from '../../slide-container';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface UserJourneyE2ESlideshowProps {
    isOpen: boolean;
    onClose: () => void;
}

const slides = [
    {
        src: '/images/userJourneyGeneration.png',
        alt: 'User Journey Generation - AI creates user journey from user story',
        title: 'Step 1: User Journey Generation',
        description:
            'The agent creates a comprehensive user journey from a user story that can be used in the follow-up process. This structured approach ensures all user interactions and workflows are properly mapped for testing.'
    },
    {
        src: '/images/appNavigation.png',
        alt: 'Application Navigation - AI navigates and creates Page Object Models',
        title: 'Step 2: Application Navigation & POM Creation',
        description:
            'The agent navigates through the app autonomously, creating Page Object Models (POMs) during the process. POMs store critical information about how each page needs to be navigated and interacted with. The agent requires this structured information to create accurate tests later on. The POMs ensure high quality tests and are reusable across E2E tests, cross-system integration, performance-load, production verification, and smoke tests.'
    },
    {
        src: '/images/playwright.png',
        alt: 'Playwright Test Generation - Complete E2E test script creation',
        title: 'Step 3: Playwright Test Generation',
        description:
            'The agent generates a complete E2E Playwright test script from the POMs. These generated E2E Tests are automatically triggered in the deployment process to ensure regression. They are reviewed by QA Engineers to ensure all test criteria are met and validate the comprehensive test coverage.'
    }
];

export function UserJourneyE2ESlideshow({ isOpen, onClose }: UserJourneyE2ESlideshowProps) {
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

                        <div className='flex h-full w-full flex-col pt-2'>
                            {/* Slide title */}
                            <motion.h2
                                key={currentSlide}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className='mb-4 text-center text-3xl font-bold text-white'>
                                {slides[currentSlide].title}
                            </motion.h2>

                            {/* Main content - Side by side layout */}
                            <div className='flex flex-1 gap-4 px-4'>
                                {/* Navigation and Screenshot - Left Side */}
                                <div className='flex flex-1 items-center gap-2'>
                                    {/* Previous Button */}
                                    <button
                                        onClick={prevSlide}
                                        disabled={currentSlide === 0}
                                        className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/80 text-white backdrop-blur-sm transition-all hover:bg-blue-700 disabled:bg-gray-600/50 disabled:opacity-50'>
                                        <ChevronLeft className='h-6 w-6' />
                                    </button>

                                    {/* Large Screenshot Container */}
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className='relative h-full max-h-[calc(100vh-140px)] flex-1 overflow-hidden rounded-lg'>
                                        <Image
                                            src={slides[currentSlide].src}
                                            alt={slides[currentSlide].alt}
                                            fill
                                            className='object-contain'
                                            unoptimized
                                        />
                                    </motion.div>

                                    {/* Next Button */}
                                    <button
                                        onClick={nextSlide}
                                        className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-600/80 text-white backdrop-blur-sm transition-all hover:bg-green-700'>
                                        <ChevronRight className='h-6 w-6' />
                                    </button>
                                </div>

                                {/* Description Panel - Right Side */}
                                <motion.div
                                    key={`desc-${currentSlide}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className='flex w-80 flex-col justify-center rounded-lg border border-gray-600 bg-gradient-to-r from-gray-900/80 to-gray-800/80 p-6 backdrop-blur-sm'>
                                    <div className='mb-4 flex items-center space-x-2'>
                                        <div className='h-2 w-2 rounded-full bg-blue-400'></div>
                                        <span className='text-sm font-medium text-blue-400'>Process Description</span>
                                    </div>
                                    <p className='text-lg leading-relaxed text-gray-200'>
                                        {slides[currentSlide].description}
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
