'use client';

import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

import Drink from '../models/Drink';
import Strawberry from '../models/Strawberry';
import { useResponsive } from '@/hooks/useResponsive';
import { getCameraConfig } from '../camera/cameraConfig';
import { getResponsivePoses } from '../animations/poses/responsive';
import { DRINK_POSES_RESPONSIVE } from '../animations/poses/drink';
import {
  STRAWBERRY_LEFT_POSES_RESPONSIVE,
  STRAWBERRY_RIGHT_POSES_RESPONSIVE,
  STRAWBERRY_TOP_POSES_RESPONSIVE,
} from '../animations/poses/strawberries';

export type ModelRefs = {
  drink: React.RefObject<THREE.Group>;
  strawberryLeft: React.RefObject<THREE.Group>;
  strawberryRight: React.RefObject<THREE.Group>;
  strawberryTop: React.RefObject<THREE.Group>;
};

/**
 * Hook that creates refs and resolves responsive poses for all models.
 * Refs are created here so they can be shared with ScrollAnimations and DebugTools.
 */
export function useHomeModels() {
  const refs: ModelRefs = {
    drink: useRef<THREE.Group>(null),
    strawberryLeft: useRef<THREE.Group>(null),
    strawberryRight: useRef<THREE.Group>(null),
    strawberryTop: useRef<THREE.Group>(null),
  };

  const responsive = useResponsive();

  const poses = useMemo(
    () => ({
      drink: getResponsivePoses(DRINK_POSES_RESPONSIVE, responsive.breakpoint),
      strawberryLeft: getResponsivePoses(
        STRAWBERRY_LEFT_POSES_RESPONSIVE,
        responsive.breakpoint,
      ),
      strawberryRight: getResponsivePoses(
        STRAWBERRY_RIGHT_POSES_RESPONSIVE,
        responsive.breakpoint,
      ),
      strawberryTop: getResponsivePoses(
        STRAWBERRY_TOP_POSES_RESPONSIVE,
        responsive.breakpoint,
      ),
    }),
    [responsive.breakpoint],
  );

  return { refs, poses };
}

/**
 * Renders all 3D models (drink + strawberries) with Float wrappers.
 * Receives refs from useHomeModels so animations can target them.
 */
export default function HomeModels({
  refs,
  paused,
}: {
  refs: ModelRefs;
  paused: boolean;
}) {
  const responsive = useResponsive();
  const config = getCameraConfig(responsive);
  const floatStrength = paused ? 0 : config.floatIntensity;
  const rotStrength = paused ? 0 : config.rotationIntensity;

  return (
    <>
      {[
        {
          ref: refs.strawberryLeft,
          position: [-2, -1, -2] as [number, number, number],
          rotation: [0, 0, 0] as [number, number, number],
          scale: 2,
        },
        {
          ref: refs.strawberryRight,
          position: [2.5, -1, -2] as [number, number, number],
          rotation: [0, 0, 3] as [number, number, number],
          scale: 2,
        },
        {
          ref: refs.strawberryTop,
          position: [1, responsive.isDesktop ? 1 : 1.5, -3] as [
            number,
            number,
            number,
          ],
          rotation: [0, 0, 1] as [number, number, number],
          scale: 1.5,
        },
      ].map((strawberry, index) => (
        <Float
          key={index}
          floatIntensity={floatStrength}
          rotationIntensity={rotStrength}
        >
          <Strawberry
            ref={strawberry.ref}
            position={strawberry.position}
            rotation={strawberry.rotation}
            scale={strawberry.scale}
          />
        </Float>
      ))}

      <Float
        floatIntensity={floatStrength}
        rotationIntensity={paused ? 0 : config.drinkRotationIntensity}
      >
        <Drink
          ref={refs.drink}
          position={[0, responsive.isDesktop ? -1.2 : -0.5, 0]}
        />
      </Float>
    </>
  );
}
