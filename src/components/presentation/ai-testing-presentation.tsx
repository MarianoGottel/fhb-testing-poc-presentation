'use client';

import { useEffect, useState } from 'react';

import {
    AITestingTitleSlide,
    DemoShowcaseSlide,
    DeveloperTransformationSlide,
    FutureOutlookSlide,
    ProblemSlide,
    ProcessOverviewSlide,
    WorkflowDetailsSlide,
    WorkflowShowcaseSlide
} from './slides';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from 'lucide-react';

const slides = [
    { component: AITestingTitleSlide, title: '' },
    { component: ProblemSlide, title: 'The Current POC' },
    { component: ProcessOverviewSlide, title: 'Aurora Process Overview' },
    { component: DemoShowcaseSlide, title: 'Two AI Workflows' },
    { component: WorkflowShowcaseSlide, title: 'AI Workflow Screenshots' },
    { component: WorkflowDetailsSlide, title: 'Detailed Workflow Process' },
    { component: DeveloperTransformationSlide, title: 'The Developer Transformation' },
    { component: FutureOutlookSlide, title: 'Future Outlook' }
];

export function AITestingPresentation() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Auto-advance slides when playing
    useEffect(() => {
        if (!isPlaying) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => {
                if (prev === slides.length - 1) {
                    setIsPlaying(false);

                    return prev;
                }

                return prev + 1;
            });
        }, 15000); // 15 seconds per slide

        return () => clearInterval(timer);
    }, [isPlaying, currentSlide]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowRight':
                case ' ':
                    e.preventDefault();
                    nextSlide();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    prevSlide();
                    break;
                case 'Escape':
                    e.preventDefault();
                    exitFullscreen();
                    break;
                case 'f':
                case 'F':
                    e.preventDefault();
                    toggleFullscreen();
                    break;
                case 'r':
                case 'R':
                    e.preventDefault();
                    setCurrentSlide(0);
                    setIsPlaying(false);
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => document.removeEventListener('keydown', handleKeyPress);
    }, []);

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const toggleFullscreen = async () => {
        try {
            if (!document.fullscreenElement) {
                await document.documentElement.requestFullscreen();
                setIsFullscreen(true);
            } else {
                await document.exitFullscreen();
                setIsFullscreen(false);
            }
        } catch (error) {
            console.error('Fullscreen error:', error);
        }
    };

    const exitFullscreen = async () => {
        try {
            if (document.fullscreenElement) {
                await document.exitFullscreen();
                setIsFullscreen(false);
            }
        } catch (error) {
            console.error('Exit fullscreen error:', error);
        }
    };

    // Listen for fullscreen changes
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    const CurrentSlideComponent = slides[currentSlide].component;

    return (
        <div className='relative h-screen w-screen overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-[#001833]'>
            {/* Background elements */}
            <div className='absolute inset-0'>
                {/* Tech grid pattern */}
                <div
                    className='absolute inset-0 opacity-[0.02]'
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(102, 178, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(102, 178, 255, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Animated particles - using deterministic positions to avoid hydration errors */}
                {[...Array(15)].map((_, i) => {
                    // Create deterministic positions based on index to avoid hydration mismatches
                    const left = (i * 37) % 100; // Pseudo-random but deterministic
                    const top = (i * 73 + 23) % 100; // Pseudo-random but deterministic
                    const duration = 4 + ((i * 0.3) % 3); // Deterministic duration
                    const delay = (i * 0.4) % 5; // Deterministic delay

                    return (
                        <motion.div
                            key={i}
                            className='absolute h-1 w-1 rounded-full bg-[#66B2FF]/20'
                            style={{
                                left: `${left}%`,
                                top: `${top}%`
                            }}
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 0.6, 0]
                            }}
                            transition={{
                                duration: duration,
                                repeat: Infinity,
                                delay: delay
                            }}
                        />
                    );
                })}
            </div>

            {/* Main slide content */}
            <div className='relative z-10 h-full'>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className='h-full'>
                        <CurrentSlideComponent />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation controls */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className='absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center space-x-4 rounded-full bg-black/60 p-4 backdrop-blur-sm'>
                {/* Previous button */}
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className='rounded-full bg-white/10 p-2 transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30'>
                    <ChevronLeft className='h-5 w-5 text-white' />
                </button>

                {/* Play/Pause button */}
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className='rounded-full bg-[#66B2FF]/20 p-2 transition-all hover:bg-[#66B2FF]/30'>
                    {isPlaying ? (
                        <Pause className='h-5 w-5 text-[#66B2FF]' />
                    ) : (
                        <Play className='h-5 w-5 text-[#66B2FF]' />
                    )}
                </button>

                {/* Restart button */}
                <button
                    onClick={() => {
                        setCurrentSlide(0);
                        setIsPlaying(false);
                    }}
                    className='rounded-full bg-white/10 p-2 transition-all hover:bg-white/20'>
                    <RotateCcw className='h-5 w-5 text-white' />
                </button>

                {/* Slide indicator */}
                <div className='flex items-center space-x-2'>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 w-2 rounded-full transition-all ${
                                index === currentSlide ? 'w-8 bg-[#66B2FF]' : 'bg-white/30 hover:bg-white/50'
                            }`}
                        />
                    ))}
                </div>

                {/* Next button */}
                <button
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    className='rounded-full bg-white/10 p-2 transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30'>
                    <ChevronRight className='h-5 w-5 text-white' />
                </button>

                {/* Fullscreen button */}
                <button
                    onClick={toggleFullscreen}
                    className='ml-2 rounded-full bg-white/10 p-2 transition-all hover:bg-white/20'>
                    <span className='font-mono text-xs text-white'>F</span>
                </button>
            </motion.div>

            {/* Slide title and progress */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className='absolute top-6 left-6 z-50'>
                <div className='rounded-lg bg-black/60 p-3 backdrop-blur-sm'>
                    <div className='text-sm font-medium text-[#4ECDC4]'>
                        {currentSlide + 1} / {slides.length}
                    </div>
                    <div className='text-lg font-semibold text-white'>{slides[currentSlide].title}</div>
                </div>
            </motion.div>

            {/* Progress bar */}
            <div className='absolute top-0 right-0 left-0 z-50 h-1 bg-black/20'>
                <motion.div
                    className='h-full bg-gradient-to-r from-[#66B2FF] to-[#4ECDC4]'
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* Keyboard shortcuts help */}
            {!isFullscreen && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className='absolute right-6 bottom-6 z-50 rounded-lg bg-black/60 p-3 text-xs text-white/60 backdrop-blur-sm'>
                    <div>← → Navigate • Space: Next • F: Fullscreen • R: Restart</div>
                </motion.div>
            )}
        </div>
    );
}
