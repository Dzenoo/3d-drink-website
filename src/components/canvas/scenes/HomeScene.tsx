"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

import { ScrollAnimations } from "../animations";
import SceneDebug from "../debug/SceneDebug";
import Lights from "../setup/Lights";
import Experience from "../setup/Experience";
import Drink from "../models/Drink";
import { DEBUG_MODE } from "@/constants";
import HomeOverlay from "@/components/pages/home/HomeOverlay";
import { DRINK_POSES } from "../animations/poses/drink";

const SceneContent: React.FC = () => {
  const drinkRef = useRef<THREE.Group>(null);

  return (
    <>
      {DEBUG_MODE && <SceneDebug targetRef={drinkRef} name="Drink" />}

      <ScrollAnimations
        debug={DEBUG_MODE}
        camera={{
          distance: 8,
          height: 0,
          lookAt: [0, 0, 0],
          introFrom: { y: -3 },
          introDuration: 1.5,
        }}
        objects={[{ ref: drinkRef, poses: DRINK_POSES }]}
      />

      <Lights />
      <Experience />

      <Drink ref={drinkRef} position={[0, -1.2, 0]} />

      <HomeOverlay />
    </>
  );
};

const HomeScene: React.FC = () => {
  return (
    <Canvas camera={{ fov: 30 }}>
      <ScrollControls pages={4} damping={0.5}>
        <SceneContent />
      </ScrollControls>
    </Canvas>
  );
};

export default HomeScene;
