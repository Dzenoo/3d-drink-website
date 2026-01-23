"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Float, ScrollControls } from "@react-three/drei";

import { ScrollAnimations } from "../animations";
import SceneDebug from "../debug/SceneDebug";
import Lights from "../setup/Lights";
import Experience from "../setup/Experience";
import Drink from "../models/Drink";
import Strawberry from "../models/Strawberry";
import { DEBUG_MODE } from "@/constants";
import HomeOverlay from "@/components/pages/home/HomeOverlay";
import { DRINK_POSES } from "../animations/poses/drink";
import {
  STRAWBERRY_LEFT_POSES,
  STRAWBERRY_RIGHT_POSES,
  STRAWBERRY_TOP_POSES,
} from "../animations/poses/strawberries";

const SceneContent: React.FC = () => {
  const drinkRef = useRef<THREE.Group>(null);
  const strawberryLeftRef = useRef<THREE.Group>(null);
  const strawberryRightRef = useRef<THREE.Group>(null);
  const strawberryTopRef = useRef<THREE.Group>(null);

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
        objects={[
          { ref: drinkRef, poses: DRINK_POSES },
          { ref: strawberryLeftRef, poses: STRAWBERRY_LEFT_POSES },
          { ref: strawberryRightRef, poses: STRAWBERRY_RIGHT_POSES },
          { ref: strawberryTopRef, poses: STRAWBERRY_TOP_POSES },
        ]}
      />

      <Lights />
      <Experience />

      <Float>
        <Strawberry ref={strawberryLeftRef} position={[-2, -1, -2]} scale={2} />
      </Float>

      <Float>
        <Strawberry
          ref={strawberryRightRef}
          position={[2.5, -1, -2]}
          rotation={[0, 0, 3]}
          scale={2}
        />
      </Float>

      <Float>
        <Strawberry
          ref={strawberryTopRef}
          position={[1, 1, -3]}
          rotation={[0, 0, 1]}
          scale={1.5}
        />
      </Float>

      <Float>
        <Drink ref={drinkRef} position={[0, -1.2, 0]} />
      </Float>

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
