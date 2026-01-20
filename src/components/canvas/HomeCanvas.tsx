"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import SceneDebug from "./debug/SceneDebug";

import Lights from "./setup/Lights";
import Experience from "./setup/Experience";
import HomeOverlay from "@/components/pages/home/HomeOverlay";
import Drink from "./models/Drink";
import LoadingScreen from "@/components/shared/LoadingScreen";
import { ScrollAnimationManager } from "./animations/ScrollAnimationManager";
import DrinkAnimations from "./animations/DrinkAnimations";
import CameraAnimations from "./animations/CameraAnimations";

const HomeCanvas = () => {
  const drinkRef = useRef<THREE.Group>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  return (
    <>
      {/* <LoadingScreen /> */}

      {/* <SceneDebug drinkRef={drinkRef} cameraRef={cameraRef} /> */}

      <Canvas
        camera={{ fov: 55, position: [3, 0, 5] }}
        onCreated={({ camera }) => {
          // @ts-ignore
          cameraRef.current = camera as THREE.PerspectiveCamera;
        }}
      >
        <ScrollControls pages={4} damping={0.4}>
          <ScrollAnimationManager />

          <Lights />
          <Experience />

          <Drink
            ref={drinkRef}
            position={[0, -3.1, 0]}
            rotation={[0, Math.PI * 0.5 + 0.55, 0]}
          />

          <DrinkAnimations drinkRef={drinkRef} />
          <CameraAnimations />

          <HomeOverlay />
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default HomeCanvas;
