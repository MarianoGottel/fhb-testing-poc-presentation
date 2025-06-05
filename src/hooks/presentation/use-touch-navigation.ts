'use client'

import { useEffect, useRef } from 'react'
import { usePresentationStore } from '@/lib/presentation/store'

export const useTouchNavigation = () => {
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const { nextSlide, previousSlide } = usePresentationStore()

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartX.current || !touchStartY.current) return

      const touchEndX = e.changedTouches[0].clientX
      const touchEndY = e.changedTouches[0].clientY

      const deltaX = touchEndX - touchStartX.current
      const deltaY = touchEndY - touchStartY.current

      // Check if horizontal swipe is more significant than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Minimum swipe distance threshold
        if (Math.abs(deltaX) > 50) {
          if (deltaX > 0) {
            // Swipe right - previous slide
            previousSlide()
          } else {
            // Swipe left - next slide
            nextSlide()
          }
        }
      }

      // Reset
      touchStartX.current = null
      touchStartY.current = null
    }

    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [nextSlide, previousSlide])
}