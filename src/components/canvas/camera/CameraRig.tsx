'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';

import { useResponsive } from '@/hooks/useResponsive';

export type CameraRigConfig = {
  distance?: number;
  height?: number;
  lookAt?: [number, number, number];
  introFrom?: { x?: number; y?: number; z?: number };
  introDuration?: number;
  introEase?: string;
  debug?: boolean;
};

const CameraRig: React.FC<{
  children: React.ReactNode;
  config?: CameraRigConfig;
}> = ({ children, config = {} }) => {
  const {
    distance = 8,
    height = 0,
    lookAt = [0, 0, 0],
    introFrom = { y: -3 },
    introDuration = 1.5,
    introEase = 'power2.out',
    debug = false,
  } = config;

  const group = useRef<THREE.Group>(null);
  const { camera: threeCamera } = useThree();
  const scroll = useScroll();
  const introDone = useRef(false);

  const responsive = useResponsive();

  const getResponsiveDistance = useCallback(() => {
    if (responsive.isMobile) {
      return responsive.isPortrait ? distance * 1.5 : distance * 1.25;
    }
    if (responsive.isTablet) {
      return distance * 1.15;
    }
    return distance;
  }, [responsive.isMobile, responsive.isTablet, responsive.isPortrait, distance]);

  // Intro animation — camera flies in from introFrom to its resting position
  useEffect(() => {
    if (debug) return;

    const responsiveDistance = getResponsiveDistance();

    threeCamera.position.set(
      introFrom.x ?? 0,
      introFrom.y ?? height,
      introFrom.z ?? responsiveDistance,
    );
    threeCamera.lookAt(...lookAt);

    const tween = gsap.to(threeCamera.position, {
      x: 0,
      y: height,
      z: responsiveDistance,
      duration: introDuration,
      ease: introEase,
      onComplete: () => {
        introDone.current = true;
      },
    });

    return () => {
      tween.kill();
    };
  }, [
    threeCamera,
    debug,
    height,
    lookAt,
    introFrom,
    introDuration,
    introEase,
    getResponsiveDistance,
  ]);

  // Block scroll during intro
  useEffect(() => {
    if (debug) return;

    const scrollContainer = scroll.el;

    const blockScroll = (e: Event) => {
      if (!introDone.current) {
        e.preventDefault();
        scroll.el.scrollTop = 0;
      }
    };

    scrollContainer.addEventListener('scroll', blockScroll);
    return () => scrollContainer.removeEventListener('scroll', blockScroll);
  }, [debug, scroll]);

  // Per-frame camera lookAt
  useFrame(() => {
    if (debug) return;

    if (!introDone.current) {
      threeCamera.lookAt(...lookAt);
      return;
    }

    threeCamera.lookAt(...lookAt);
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
