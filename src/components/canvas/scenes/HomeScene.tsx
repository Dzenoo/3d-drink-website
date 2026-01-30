'use client';

import { useRef, useMemo, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Float, ScrollControls } from '@react-three/drei';

import { Perf } from 'r3f-perf';
import { ScrollAnimations } from '../animations';
import DebugTools from '../debug/DebugTools';
import Lights from '../setup/Lights';
import Experience from '../setup/Experience';
import Drink from '../models/Drink';
import Strawberry from '../models/Strawberry';
import HomeOverlay from '@/components/pages/home/HomeOverlay';
import LoadingScreen from '@/components/shared/LoadingScreen';
import {
  DEBUG_MODE,
  SCROLL_MODE,
  SCROLL_SECTIONS,
  SNAP_SCROLL_CONFIG,
} from '@/constants';
import { useResponsive } from '@/hooks/useResponsive';
import { useSnapScroll } from '@/hooks/useSnapScroll';
import { getCameraConfig } from '../config/camera';
import { getResponsivePoses } from '../animations/poses/responsive';
import { DRINK_POSES_RESPONSIVE } from '../animations/poses/drink';
import {
  STRAWBERRY_LEFT_POSES_RESPONSIVE,
  STRAWBERRY_RIGHT_POSES_RESPONSIVE,
  STRAWBERRY_TOP_POSES_RESPONSIVE,
} from '../animations/poses/strawberries';

function SceneContent() {
  const refs = {
    drink: useRef<THREE.Group>(null),
    strawberryLeft: useRef<THREE.Group>(null),
    strawberryRight: useRef<THREE.Group>(null),
    strawberryTop: useRef<THREE.Group>(null),
  };

  const [paused, setPaused] = useState(false);
  const [debugProgress, setDebugProgress] = useState<number | undefined>(
    undefined,
  );
  const onPauseChange = useCallback((p: boolean) => setPaused(p), []);
  const onProgressChange = useCallback(
    (p: number | undefined) => setDebugProgress(p),
    [],
  );

  const responsive = useResponsive();
  const config = getCameraConfig(responsive);
  const floatStrength = paused ? 0 : config.floatIntensity;
  const rotStrength = paused ? 0 : config.rotationIntensity;

  useSnapScroll({
    sections: SCROLL_SECTIONS,
    duration: SNAP_SCROLL_CONFIG.duration,
    ease: SNAP_SCROLL_CONFIG.ease,
    enabled: SCROLL_MODE === 'snap' && !paused && !debugProgress,
  });

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

  return (
    <>
      {DEBUG_MODE && (
        <>
          <Perf position="top-left" />
          <DebugTools
            objects={refs}
            onPauseChange={onPauseChange}
            onProgressChange={onProgressChange}
          />
        </>
      )}

      <ScrollAnimations
        debug={paused}
        debugProgress={debugProgress}
        camera={{
          distance: config.distance,
          height: 0,
          lookAt: [0, 0, 0],
          introFrom: { y: -3 },
          introDuration: 1.5,
        }}
        objects={[
          { ref: refs.drink, poses: poses.drink },
          { ref: refs.strawberryLeft, poses: poses.strawberryLeft },
          { ref: refs.strawberryRight, poses: poses.strawberryRight },
          { ref: refs.strawberryTop, poses: poses.strawberryTop },
        ]}
      />

      <Lights />
      <Experience />

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

      <HomeOverlay />
    </>
  );
}

export default function HomeScene() {
  const responsive = useResponsive();
  const { fov } = getCameraConfig(responsive);

  return (
    <>
      {!DEBUG_MODE && <LoadingScreen />}
      <Canvas
        camera={{ fov }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{
          powerPreference: 'high-performance',
          antialias: !responsive.isMobile,
        }}
      >
        <ScrollControls
          pages={SCROLL_SECTIONS}
          damping={
            SCROLL_MODE === 'snap' ? 0.2 : responsive.isMobile ? 0.2 : 0.5
          }
        >
          <SceneContent />
        </ScrollControls>
      </Canvas>
    </>
  );
}
