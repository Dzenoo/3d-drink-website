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
import { DEBUG_MODE } from '@/constants';
import { useResponsive } from '@/hooks/useResponsive';
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

      <Float floatIntensity={floatStrength} rotationIntensity={rotStrength}>
        <Strawberry
          ref={refs.strawberryLeft}
          position={[-2, -1, -2]}
          scale={2}
        />
      </Float>

      <Float floatIntensity={floatStrength} rotationIntensity={rotStrength}>
        <Strawberry
          ref={refs.strawberryRight}
          position={[2.5, -1, -2]}
          rotation={[0, 0, 3]}
          scale={2}
        />
      </Float>

      <Float floatIntensity={floatStrength} rotationIntensity={rotStrength}>
        <Strawberry
          ref={refs.strawberryTop}
          position={[1, responsive.isDesktop ? 1 : 1.5, -3]}
          rotation={[0, 0, 1]}
          scale={1.5}
        />
      </Float>

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
    <Canvas
      camera={{ fov }}
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
      gl={{
        powerPreference: 'high-performance',
        antialias: !responsive.isMobile,
      }}
    >
      <ScrollControls pages={5} damping={0.5}>
        <SceneContent />
      </ScrollControls>
    </Canvas>
  );
}
