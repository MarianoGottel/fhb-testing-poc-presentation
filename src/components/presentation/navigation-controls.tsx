'use client';

import { usePresentationStore } from '@/lib/presentation/store';
import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';

import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';

export function NavigationControls() {
    const {
        currentSlide,
        totalSlides,
        nextSlide,
        previousSlide,
        isFullscreen,
        toggleFullscreen,
        isProcessSlideshowOpen
    } = usePresentationStore();

    return (
        <>
            {/* Progress bar - Hidden when process slideshow is open */}
            {!isProcessSlideshowOpen && (
                <div className='fixed right-0 bottom-0 left-0 h-1 bg-gray-800'>
                    <div
                        className='h-full bg-gradient-to-r from-[#003366] to-[#66B2FF] transition-all duration-500'
                        style={{
                            width: `${((currentSlide + 1) / totalSlides) * 100}%`
                        }}
                    />
                </div>
            )}

            {/* Navigation buttons - Hidden when process slideshow is open */}
            {!isProcessSlideshowOpen && (
                <div className='fixed bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-4'>
                    <Button
                        variant='ghost'
                        size='icon'
                        onClick={previousSlide}
                        disabled={currentSlide === 0}
                        className='text-white hover:bg-white/10'>
                        <ChevronLeft className='h-5 w-5' />
                    </Button>

                    <span className='text-sm text-white/60'>
                        {currentSlide + 1} / {totalSlides}
                    </span>

                    <Button
                        variant='ghost'
                        size='icon'
                        onClick={nextSlide}
                        disabled={currentSlide === totalSlides - 1}
                        className='text-white hover:bg-white/10'>
                        <ChevronRight className='h-5 w-5' />
                    </Button>
                </div>
            )}

            {/* Fullscreen toggle - Hidden when process slideshow is open */}
            {!isProcessSlideshowOpen && (
                <Button
                    variant='ghost'
                    size='icon'
                    onClick={toggleFullscreen}
                    className='fixed right-4 bottom-4 text-white hover:bg-white/10'>
                    {isFullscreen ? <Minimize2 className='h-5 w-5' /> : <Maximize2 className='h-5 w-5' />}
                </Button>
            )}

            {/* Keyboard hints - Hidden when process slideshow is open */}
            {!isProcessSlideshowOpen && (
                <div className='fixed bottom-4 left-4 hidden text-xs text-white/40 lg:block'>
                    <div>← → Navigate</div>
                    <div>F Fullscreen</div>
                    <div>1-9 Jump to slide</div>
                </div>
            )}
        </>
    );
}
