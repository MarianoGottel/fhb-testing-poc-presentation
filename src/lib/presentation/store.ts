import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface PollResult {
    option: string;
    votes: number;
}

export interface PresentationState {
    // Navigation
    currentSlide: number;
    totalSlides: number;
    isPresenterMode: boolean;
    isFullscreen: boolean;

    // Process Slideshow state
    isProcessSlideshowOpen: boolean;

    // Poll data
    pollResults: PollResult[];
    hasVoted: boolean;

    // Phoenix Challenge
    phoenixSignups: number;

    // Animation states
    isTransitioning: boolean;
    slideDirection: 'forward' | 'backward';

    // Actions
    nextSlide: () => void;
    previousSlide: () => void;
    goToSlide: (slideNumber: number) => void;
    togglePresenterMode: () => void;
    toggleFullscreen: () => void;
    submitPollVote: (option: string) => void;
    incrementPhoenixSignups: () => void;
    setTransitioning: (value: boolean) => void;
    setProcessSlideshowOpen: (isOpen: boolean) => void;
    resetPresentation: () => void;
}

const TOTAL_SLIDES = 10; // 0-9 (including opening, closing, and skills)

export const usePresentationStore = create<PresentationState>()(
    persist(
        (set, get) => ({
            // Initial state
            currentSlide: 0,
            totalSlides: TOTAL_SLIDES,
            isPresenterMode: false,
            isFullscreen: false,
            isProcessSlideshowOpen: false,
            pollResults: [
                { option: 'Too many tools, too fast', votes: 0 },
                { option: "Don't know where to start", votes: 0 },
                { option: 'Concerned about job security', votes: 0 },
                { option: 'Pride in my craft', votes: 0 },
                { option: 'All of the above', votes: 0 }
            ],
            hasVoted: false,
            phoenixSignups: 0,
            isTransitioning: false,
            slideDirection: 'forward',

            // Actions
            nextSlide: () => {
                const { currentSlide, totalSlides } = get();
                if (currentSlide < totalSlides - 1) {
                    set({
                        currentSlide: currentSlide + 1,
                        slideDirection: 'forward',
                        isTransitioning: true
                    });
                }
            },

            previousSlide: () => {
                const { currentSlide } = get();
                if (currentSlide > 0) {
                    set({
                        currentSlide: currentSlide - 1,
                        slideDirection: 'backward',
                        isTransitioning: true
                    });
                }
            },

            goToSlide: (slideNumber: number) => {
                const { currentSlide, totalSlides } = get();
                if (slideNumber >= 0 && slideNumber < totalSlides && slideNumber !== currentSlide) {
                    set({
                        currentSlide: slideNumber,
                        slideDirection: slideNumber > currentSlide ? 'forward' : 'backward',
                        isTransitioning: true
                    });
                }
            },

            togglePresenterMode: () => {
                set((state) => ({ isPresenterMode: !state.isPresenterMode }));
            },

            toggleFullscreen: () => {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen();
                    set({ isFullscreen: true });
                } else {
                    document.exitFullscreen();
                    set({ isFullscreen: false });
                }
            },

            submitPollVote: (option: string) => {
                const { hasVoted, pollResults } = get();
                if (!hasVoted) {
                    const updatedResults = pollResults.map((result) =>
                        result.option === option ? { ...result, votes: result.votes + 1 } : result
                    );
                    set({ pollResults: updatedResults, hasVoted: true });
                }
            },

            incrementPhoenixSignups: () => {
                set((state) => ({ phoenixSignups: state.phoenixSignups + 1 }));
            },

            setTransitioning: (value: boolean) => {
                set({ isTransitioning: value });
            },

            setProcessSlideshowOpen: (isOpen: boolean) => {
                set({ isProcessSlideshowOpen: isOpen });
            },

            resetPresentation: () => {
                set({
                    currentSlide: 0,
                    isPresenterMode: false,
                    isFullscreen: false,
                    isTransitioning: false,
                    slideDirection: 'forward'
                });
            }
        }),
        {
            name: 'presentation-storage',
            partialize: (state) => ({
                hasVoted: state.hasVoted,
                pollResults: state.pollResults,
                phoenixSignups: state.phoenixSignups
            })
        }
    )
);
