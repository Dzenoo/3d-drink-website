"use client";
import Drink from "@/components/home/Drink";
import { Canvas } from "@react-three/fiber";
import Lights from "@/components/setup/Lights";
import Experience from "@/components/setup/Experience";
import { ScrollControls } from "@react-three/drei";
import HomeOverlay from "@/components/home/HomeOverlay";

export default function Home() {
  return (
    <Canvas camera={{ fov: 55, position: [3, 0, 5] }} flat>
      <Experience />

      <ScrollControls pages={5} damping={0.25}>
        <HomeOverlay />

        <Drink />
      </ScrollControls>

      <Lights />
    </Canvas>
  );
}
