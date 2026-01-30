'use client';

import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { useScroll } from '@react-three/drei';

interface UseSnapScrollOptions {
  /**
   * Number of sections to snap between
   */
  sections: number;
  /**
   * Duration of the snap animation in seconds
   */
  duration?: number;
  /**
   * Easing function for the snap animation
   */
  ease?: string;
  /**
   * Whether snap scrolling is enabled
   */
  enabled?: boolean;
}

export function useSnapScroll({
  sections,
  duration = 2.5,
  ease = 'power2.inOut',
  enabled = true,
}: UseSnapScrollOptions) {
  const scroll = useScroll();
  const isAnimating = useRef(false);
  const currentSection = useRef(0);
  const scrollAccumulator = useRef(0);
  const lastWheelTime = useRef(0);

  // Calculate section positions (0 to 1)
  const sectionPositions = Array.from({ length: sections }, (_, i) => i / (sections - 1));

  const snapToSection = useCallback(
    (targetSection: number, immediate = false) => {
      if (targetSection < 0 || targetSection >= sections) return;
      if (isAnimating.current && !immediate) return;

      const targetOffset = sectionPositions[targetSection];
      const scrollContainer = scroll.el;

      if (!scrollContainer) return;

      isAnimating.current = true;
      currentSection.current = targetSection;

      const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const targetScroll = targetOffset * maxScroll;

      if (immediate) {
        scrollContainer.scrollTop = targetScroll;
        isAnimating.current = false;
        return;
      }

      gsap.to(scrollContainer, {
        scrollTop: targetScroll,
        duration,
        ease,
        onComplete: () => {
          isAnimating.current = false;
        },
      });
    },
    [sections, sectionPositions, scroll, duration, ease],
  );

  const getNearestSection = useCallback(
    (offset: number): number => {
      let nearest = 0;
      let minDistance = Math.abs(offset - sectionPositions[0]);

      for (let i = 1; i < sectionPositions.length; i++) {
        const distance = Math.abs(offset - sectionPositions[i]);
        if (distance < minDistance) {
          minDistance = distance;
          nearest = i;
        }
      }

      return nearest;
    },
    [sectionPositions],
  );

  /**
   * Calculate the next section based on scroll direction
   */
  const getNextSection = useCallback(
    (direction: number): number => {
      return Math.max(0, Math.min(sections - 1, currentSection.current + direction));
    },
    [sections],
  );

  useEffect(() => {
    if (!enabled) return;

    const scrollContainer = scroll.el;
    if (!scrollContainer) return;

    // Initialize to first section
    const initialSection = getNearestSection(scroll.offset);
    currentSection.current = initialSection;
    
    // Snap to first section on initial load if not already there
    if (scroll.offset > 0.1) {
      snapToSection(0, true);
    }

    const handleWheel = (e: WheelEvent) => {
      if (isAnimating.current) {
        e.preventDefault();
        return;
      }

      e.preventDefault();

      const now = Date.now();
      const timeDelta = now - lastWheelTime.current;
      lastWheelTime.current = now;

      // Reset accumulator if too much time has passed (allows for quick successive scrolls)
      const WHEEL_RESET_TIME = 200;
      if (timeDelta > WHEEL_RESET_TIME) {
        scrollAccumulator.current = 0;
      }

      // Accumulate scroll delta (normalize to -1 or 1)
      const normalizedDelta = e.deltaY > 0 ? 1 : -1;
      scrollAccumulator.current += normalizedDelta;

      // Check if we've accumulated enough to trigger a snap
      const WHEEL_THRESHOLD = 2;
      if (Math.abs(scrollAccumulator.current) >= WHEEL_THRESHOLD) {
        const direction = scrollAccumulator.current > 0 ? 1 : -1;
        const nextSection = getNextSection(direction);

        // Only snap if we're moving to a different section
        if (nextSection !== currentSection.current) {
          scrollAccumulator.current = 0;
          snapToSection(nextSection);
        } else {
          // Reset accumulator if we're at the boundary
          scrollAccumulator.current = 0;
        }
      }
    };

    // Use passive: false to allow preventDefault
    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    // Also handle touch events for mobile
    let touchStartY = 0;
    let touchAccumulator = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (isAnimating.current) return;
      touchStartY = e.touches[0].clientY;
      touchAccumulator = 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isAnimating.current) {
        e.preventDefault();
        return;
      }

      const touchY = e.touches[0].clientY;
      const delta = touchStartY - touchY;
      touchAccumulator += delta;
      touchStartY = touchY;

      const TOUCH_THRESHOLD = 50;
      if (Math.abs(touchAccumulator) > TOUCH_THRESHOLD) {
        const direction = touchAccumulator > 0 ? 1 : -1;
        const nextSection = getNextSection(direction);

        if (nextSection !== currentSection.current) {
          touchAccumulator = 0;
          snapToSection(nextSection);
        }
      }
    };

    scrollContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    scrollContainer.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchmove', handleTouchMove);
    };
  }, [enabled, scroll, sections, snapToSection, getNearestSection, getNextSection]);

  // Update current section based on scroll position (for external scroll changes)
  useEffect(() => {
    if (!enabled || isAnimating.current) return;

    const nearestSection = getNearestSection(scroll.offset);
    if (nearestSection !== currentSection.current) {
      currentSection.current = nearestSection;
    }
  }, [scroll.offset, enabled, getNearestSection]);

  return {
    currentSection: currentSection.current,
    snapToSection,
    isAnimating: isAnimating.current,
  };
}
