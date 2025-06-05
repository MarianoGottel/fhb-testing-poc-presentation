'use client'

import { useEffect } from 'react'
import { usePresentationStore } from '@/lib/presentation/store'

export const useKeyboardNavigation = () => {
  const {
    nextSlide,
    previousSlide,
    goToSlide,
    toggleFullscreen,
    togglePresenterMode,
    currentSlide,
  } = usePresentationStore()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return
      }

      switch (event.key) {
        case 'ArrowRight':
        case ' ': // Spacebar
          event.preventDefault()
          nextSlide()
          break
        case 'ArrowLeft':
          event.preventDefault()
          previousSlide()
          break
        case 'ArrowUp':
          event.preventDefault()
          goToSlide(0) // Go to first slide
          break
        case 'ArrowDown':
          event.preventDefault()
          goToSlide(8) // Go to last slide
          break
        case 'f':
        case 'F':
          event.preventDefault()
          toggleFullscreen()
          break
        case 'p':
        case 'P':
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault()
            togglePresenterMode()
          }
          break
        case 'Escape':
          event.preventDefault()
          if (document.fullscreenElement) {
            document.exitFullscreen()
          }
          break
        // Number keys for direct navigation
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          event.preventDefault()
          const slideNumber = parseInt(event.key) - 1
          goToSlide(slideNumber)
          break
        case '0':
          event.preventDefault()
          goToSlide(0)
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [nextSlide, previousSlide, goToSlide, toggleFullscreen, togglePresenterMode])

  return { currentSlide }
}