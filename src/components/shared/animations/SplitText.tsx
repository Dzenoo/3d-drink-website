'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

import { cn } from '@/utils';
import { useInView } from '@/hooks/useInView';

interface SplitTextProps {
  children: string;
  className?: string;
  charClassName?: string;
  animation?: 'fade' | 'slide' | 'scale' | 'rotate' | 'wave' | 'glitch';
  stagger?: number;
  delay?: number;
  duration?: number;
  ease?: string;
  inView?: boolean;
  rootMargin?: string;
  once?: boolean;
  hover?: boolean;
}

export function SplitText({
  children,
  className,
  charClassName,
  animation = 'slide',
  stagger = 0.03,
  delay = 0,
  duration = 0.6,
  ease = 'power3.out',
  inView = false,
  rootMargin = '-15% 0px',
  once = true,
  hover = false,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const isInView = useInView(containerRef, { rootMargin, once });
  const hasAnimated = useRef(false);

  const shouldAnimate = inView ? isInView : true;

  const getAnimation = () => {
    switch (animation) {
      case 'fade':
        return {
          from: { opacity: 0 },
          to: { opacity: 1 },
        };
      case 'slide':
        return {
          from: { opacity: 0, y: 50 },
          to: { opacity: 1, y: 0 },
        };
      case 'scale':
        return {
          from: { opacity: 0, scale: 0 },
          to: { opacity: 1, scale: 1 },
        };
      case 'rotate':
        return {
          from: { opacity: 0, rotateX: -90, y: 20 },
          to: { opacity: 1, rotateX: 0, y: 0 },
        };
      case 'wave':
        return {
          from: { opacity: 0, y: 30, rotateZ: 5 },
          to: { opacity: 1, y: 0, rotateZ: 0 },
        };
      case 'glitch':
        return {
          from: {
            opacity: 0,
            x: () => gsap.utils.random(-20, 20),
            skewX: 20,
          },
          to: { opacity: 1, x: 0, skewX: 0 },
        };
    }
  };

  useEffect(() => {
    const chars = charsRef.current;
    if (!chars.length) return;

    const { from } = getAnimation();
    gsap.set(chars, from);
  }, [animation]);

  useEffect(() => {
    const chars = charsRef.current;
    const container = containerRef.current;
    if (!chars.length || !container || !hover) return;

    const { from, to } = getAnimation();

    const handleEnter = () => {
      gsap.to(chars, {
        ...to,
        duration: duration * 0.5,
        stagger: { each: stagger * 0.5, from: 'start' },
      });
    };

    const handleLeave = () => {
      gsap.to(chars, {
        ...from,
        duration: duration * 0.5,
        stagger: { each: stagger * 0.5, from: 'end' },
      });
    };

    container.addEventListener('mouseenter', handleEnter);
    container.addEventListener('mouseleave', handleLeave);

    return () => {
      container.removeEventListener('mouseenter', handleEnter);
      container.removeEventListener('mouseleave', handleLeave);
    };
  }, [hover, animation, duration, stagger]);

  useEffect(() => {
    if (hover) return;
    const chars = charsRef.current;
    if (!chars.length) return;
    if (!shouldAnimate) return;
    if (once && hasAnimated.current) return;

    hasAnimated.current = true;
    const { to } = getAnimation();

    const tween = gsap.to(chars, {
      ...to,
      duration,
      delay,
      ease,
      stagger: {
        each: stagger,
        from: 'start',
      },
    });

    return () => {
      tween.kill();
    };
  }, [shouldAnimate, hover, duration, delay, ease, stagger, once, animation]);

  return (
    <div
      ref={containerRef}
      className={cn('inline-block', className)}
      style={{ perspective: '1000px' }}
    >
      {children.split('').map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            if (el) charsRef.current[i] = el;
          }}
          className={cn(
            'inline-block will-change-transform',
            char === ' ' && 'w-[0.3em]',
            charClassName,
          )}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}
