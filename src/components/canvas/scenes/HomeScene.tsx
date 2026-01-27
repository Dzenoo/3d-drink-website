'use client';

import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Float, ScrollControls } from '@react-three/drei';

import { ScrollAnimations } from '../animations';
import ScrollDebug from '../debug/ScrollDebug';
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
  const drinkRef = useRef<THREE.Group>(null);
  const strawberryLeftRef = useRef<THREE.Group>(null);
  const strawberryRightRef = useRef<THREE.Group>(null);
  const strawberryTopRef = useRef<THREE.Group>(null);

  const responsive = useResponsive();
  const {
    distance,
    floatIntensity,
    rotationIntensity,
    drinkRotationIntensity,
  } = getCameraConfig(responsive);

  const drinkPoses = useMemo(
    () => getResponsivePoses(DRINK_POSES_RESPONSIVE, responsive.breakpoint),
    [responsive.breakpoint],
  );

  const strawberryLeftPoses = useMemo(
    () =>
      getResponsivePoses(
        STRAWBERRY_LEFT_POSES_RESPONSIVE,
        responsive.breakpoint,
      ),
    [responsive.breakpoint],
  );

  const strawberryRightPoses = useMemo(
    () =>
      getResponsivePoses(
        STRAWBERRY_RIGHT_POSES_RESPONSIVE,
        responsive.breakpoint,
      ),
    [responsive.breakpoint],
  );

  const strawberryTopPoses = useMemo(
    () =>
      getResponsivePoses(
        STRAWBERRY_TOP_POSES_RESPONSIVE,
        responsive.breakpoint,
      ),
    [responsive.breakpoint],
  );

  return (
    <>
      {DEBUG_MODE && <ScrollDebug targetRef={drinkRef} />}

      <ScrollAnimations
        debug={DEBUG_MODE}
        camera={{
          distance,
          height: 0,
          lookAt: [0, 0, 0],
          introFrom: { y: -3 },
          introDuration: 1.5,
        }}
        objects={[
          { ref: drinkRef, poses: drinkPoses },
          { ref: strawberryLeftRef, poses: strawberryLeftPoses },
          { ref: strawberryRightRef, poses: strawberryRightPoses },
          { ref: strawberryTopRef, poses: strawberryTopPoses },
        ]}
      />

      <Lights />
      <Experience />

      <Float
        floatIntensity={floatIntensity}
        rotationIntensity={rotationIntensity}
      >
        <Strawberry ref={strawberryLeftRef} position={[-2, -1, -2]} scale={2} />
      </Float>

      <Float
        floatIntensity={floatIntensity}
        rotationIntensity={rotationIntensity}
      >
        <Strawberry
          ref={strawberryRightRef}
          position={[2.5, -1, -2]}
          rotation={[0, 0, 3]}
          scale={2}
        />
      </Float>

      <Float
        floatIntensity={floatIntensity}
        rotationIntensity={rotationIntensity}
      >
        <Strawberry
          ref={strawberryTopRef}
          position={[1, responsive.isDesktop ? 1 : 1.5, -3]}
          rotation={[0, 0, 1]}
          scale={1.5}
        />
      </Float>

      <Float
        floatIntensity={floatIntensity}
        rotationIntensity={drinkRotationIntensity}
      >
        <Drink
          ref={drinkRef}
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
    <Canvas camera={{ fov }}>
      <ScrollControls pages={5} damping={0.5}>
        <SceneContent />
      </ScrollControls>
    </Canvas>
  );
}
