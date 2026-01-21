"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

import { ScrollAnimations, Pose } from "../animations";
import SceneDebug from "../debug/SceneDebug";
import Lights from "../setup/Lights";
import Experience from "../setup/Experience";
import Drink from "../models/Drink";
import { DEBUG_MODE } from "@/constants";
import HomeOverlay from "@/components/pages/home/HomeOverlay";

const MODEL_POSES: Pose[] = [
  {
    at: 0,
    position: { x: 4, y: 0, z: 0 },
    rotation: { x: 0.9, y: Math.PI * 2.5, z: -1.0 },
  },
  {
    at: 0.25,
    position: { x: -1, y: 0, z: 0 },
    rotation: { x: 0.9, y: 0.6, z: -1.0 },
  },
  {
    at: 0.5,
    position: { x: 0, y: 0, z: 1 },
    rotation: { x: 1.7, y: 0, z: 4.7 },
  },
  {
    at: 0.75,
    position: { x: 0, y: 0, z: 1.5 },
    rotation: { x: 0, y: -4.7, z: -0.1 },
  },
];

function SceneContent({
  modelRef,
}: {
  modelRef: React.RefObject<THREE.Group>;
}) {
  return (
    <>
      <ScrollAnimations
        debug={DEBUG_MODE}
        camera={{
          distance: 8,
          height: 0,
          lookAt: [0, 0, 0],
          introFrom: { y: -3 },
          introDuration: 1.5,
        }}
        objects={[{ ref: modelRef, poses: MODEL_POSES }]}
      />
      <Lights />
      <Experience />
      <Drink
        ref={modelRef}
        position={[0, -2.1, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      />
      <HomeOverlay />
    </>
  );
}

export default function HomeScene() {
  const modelRef = useRef<THREE.Group>(null);

  return (
    <>
      {DEBUG_MODE && <SceneDebug targetRef={modelRef} name="Model" />}

      <Canvas camera={{ fov: 55 }}>
        <ScrollControls pages={4} damping={0.5}>
          <SceneContent modelRef={modelRef} />
        </ScrollControls>
      </Canvas>
    </>
  );
}
