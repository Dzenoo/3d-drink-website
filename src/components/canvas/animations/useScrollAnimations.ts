'use client';

import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';

import { AnimationConfig } from './types';

export function useScrollAnimations(config: AnimationConfig) {
  const { debug = false, debugProgress, objects = [] } = config;
  const scroll = useScroll();
  const timeline = useRef<gsap.core.Timeline | null>(null);

  const buildTimeline = useCallback(() => {
    if (timeline.current) {
      timeline.current.kill();
      timeline.current = null;
    }

    const tl = gsap.timeline({ paused: true });

    objects.forEach(({ ref, poses }) => {
      if (!ref.current) return;

      const object = ref.current;
      const sortedPoses = [...poses].sort((a, b) => a.at - b.at);

      for (let i = 0; i < sortedPoses.length - 1; i++) {
        const from = sortedPoses[i];
        const to = sortedPoses[i + 1];
        const ease = to.ease ?? 'power1.inOut';

        const startAt = from.at;
        const duration = to.at - from.at;

        if (to.position) {
          tl.to(
            object.position,
            {
              x: to.position.x,
              y: to.position.y,
              z: to.position.z,
              duration,
              ease,
            },
            startAt,
          );
        }

        if (to.rotation) {
          tl.to(
            object.rotation,
            {
              x: to.rotation.x,
              y: to.rotation.y,
              z: to.rotation.z,
              duration,
              ease,
            },
            startAt,
          );
        }

        if (to.scale !== undefined) {
          const scaleValue =
            typeof to.scale === 'number'
              ? { x: to.scale, y: to.scale, z: to.scale }
              : to.scale;

          tl.to(
            object.scale,
            {
              x: scaleValue.x,
              y: scaleValue.y,
              z: scaleValue.z,
              duration,
              ease,
            },
            startAt,
          );
        }
      }
    });

    tl.totalDuration(1);

    timeline.current = tl;

    return tl;
  }, [objects]);

  useEffect(() => {
    const tl = buildTimeline();

    return () => {
      tl.kill();
    };
  }, [buildTimeline]);

  useFrame(() => {
    if (debugProgress !== undefined && timeline.current) {
      timeline.current.progress(debugProgress);
      return;
    }

    if (debug) return;

    if (timeline.current) {
      timeline.current.progress(scroll.offset);
    }
  });
}
