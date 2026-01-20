"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

import Lights from "../setup/Lights";
import Experience from "../setup/Experience";
import HomeOverlay from "@/components/pages/home/HomeOverlay";
import Drink from "../models/Drink";
import ScrollController from "../animations/ScrollController";
import DrinkAnimations from "../animations/DrinkAnimations";
import CameraController from "../animations/CameraController";
import LoadingScreen from "@/components/shared/LoadingScreen";

export default function HomeScene() {
  const drinkRef = useRef<THREE.Group>(null);

  return (
    <>
      <LoadingScreen />
      <Canvas camera={{ fov: 55 }}>
        <ScrollControls pages={4} damping={0.5}>
          <ScrollController />
          <Lights />
          <Experience />

          <Drink
            ref={drinkRef}
            position={[0, -2.1, 0]}
            rotation={[0, Math.PI * 0.5, 0]}
          />

          <DrinkAnimations targetRef={drinkRef} />
          <CameraController
            distance={8}
            height={0}
            lookAt={[0, 0, 0]}
            mouseFactor={0.05}
            introFrom={{ y: 3 }}
            introDuration={1.5}
            introEase="power2.out"
          />

          <HomeOverlay />
        </ScrollControls>
      </Canvas>
    </>
  );
}
