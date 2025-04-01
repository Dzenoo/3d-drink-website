"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

import Lights from "@/components/canvas/setup/Lights";
import Experience from "@/components/canvas/setup/Experience";
import HomeOverlay from "@/components/pages/home/HomeOverlay";
import Drink from "./3d-models/Drink";
import LoadingScreen from "../shared/LoadingScreen";

const HomeCanvas: React.FC = () => {
  return (
    <>
      <LoadingScreen />
      <Canvas camera={{ fov: 55, position: [3, 0, 5] }} flat>
        <Lights />
        <Experience />
        <ScrollControls pages={4} damping={0.25}>
          <HomeOverlay />
          <Drink
            position={[0, -2.1, 0]}
            rotation={[0, Math.PI * 0.5 + 0.55, 0]}
          />
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default HomeCanvas;
