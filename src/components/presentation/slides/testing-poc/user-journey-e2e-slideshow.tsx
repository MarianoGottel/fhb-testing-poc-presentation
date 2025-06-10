'use client';

import { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';

import { SlideContainer } from '../../slide-container';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface UserJourneyE2ESlideshowProps {
    isOpen: boolean;
    onClose: () => void;
}

const slides = [
    {
        src: '/images/getUserJourney.png',
        alt: 'Get User Journey - AI analyzes application workflow',
        title: 'Step 1: Get User Journey',
        description: 'The agent retrieves the current user journey and understands the flow.'
    },
    {
        src: '/images/navigationPOM.png',
        alt: 'Navigation POM - Page Object Models generation',
        title: 'Step 2: Navigation POM Generation',
        description:
            'The agent opens the browser and navigates through the screen, filling forms and clicking buttons. Based on these information, the agent creates a Page Model which is used as the base for the test.'
    },
    {
        src: '/images/e2eTest.png',
        alt: 'E2E Test - Complete test suite execution',
        title: 'Step 3: E2E Test Execution',
        description:
            'The agent executes the e2e test iteratively through the process. Every time a new page model is created, the e2e test is updated and validated.'
    }
];

export function UserJourneyE2ESlideshow({ isOpen, onClose }: UserJourneyE2ESlideshowProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!isOpen) {
            setCurrentSlide(0);
        }
    }, [isOpen]);

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

                        <div className='flex h-full w-full max-w-7xl flex-col'>
                            {/* Slide title */}
                            <motion.h2
                                key={currentSlide}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className='mb-4 text-center text-3xl font-bold text-white'>
                                {slides[currentSlide].title}
                            </motion.h2>

                            {/* Description Panel - Top */}
                            <motion.div
                                key={`desc-${currentSlide}`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className='mx-auto mb-6 max-w-4xl rounded-lg border border-gray-600 bg-gradient-to-r from-gray-900/80 to-gray-800/80 p-6 backdrop-blur-sm'>
                                <div className='text-center'>
                                    <div className='mb-3 flex items-center justify-center space-x-2'>
                                        <div className='h-2 w-2 rounded-full bg-blue-400'></div>
                                        <span className='text-sm font-medium text-blue-400'>Process Description</span>
                                    </div>
                                    <p className='text-lg leading-relaxed text-gray-200'>
                                        {slides[currentSlide].description}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Screenshot with Side Navigation - Wide Layout */}
                            <div className='relative flex flex-1 items-center justify-center'>
                                {/* Previous Button - Left Side */}
                                <button
                                    onClick={prevSlide}
                                    disabled={currentSlide === 0}
                                    className='absolute top-1/2 left-2 z-10 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600/80 text-white backdrop-blur-sm transition-all hover:bg-blue-700 disabled:bg-gray-600/50 disabled:opacity-50'>
                                    <ChevronLeft className='h-8 w-8' />
                                </button>

                                {/* Wide Screenshot Container */}
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className='mx-4 h-full max-h-[calc(100vh-350px)] w-full max-w-screen-2xl overflow-hidden'>
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
                                    className='absolute top-1/2 right-2 z-10 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-green-600/80 text-white backdrop-blur-sm transition-all hover:bg-green-700'>
                                    <ChevronRight className='h-8 w-8' />
                                </button>
                            </div>

                            {/* Bottom Navigation - Slide Indicators and Status */}
                            <div className='mt-4 flex items-center justify-center space-x-6'>
                                {/* Slide Indicators */}
                                <div className='flex space-x-3'>
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`h-3 w-3 rounded-full transition-all ${
                                                index === currentSlide
                                                    ? 'scale-125 bg-blue-400 ring-2 ring-blue-300'
                                                    : 'bg-gray-600 hover:scale-110 hover:bg-gray-500'
                                            }`}
                                        />
                                    ))}
                                </div>

                                {/* Status Text */}
                                <div className='text-sm text-gray-400'>
                                    {currentSlide === slides.length - 1 ? (
                                        <span className='font-medium text-green-400'>
                                            Click right arrow to finish & return
                                        </span>
                                    ) : (
                                        <span>Use arrow keys or click side buttons to navigate</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
