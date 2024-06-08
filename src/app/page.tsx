"use client";
import * as THREE from "three";
import Bottle from "@/components/Bottle";
import { Canvas } from "@react-three/fiber";
import Lights from "@/components/Lights";
import Experience from "@/components/Experience";
import { ScrollControls } from "@react-three/drei";
import Overlay from "@/components/Overlay";

export default function Home() {
  return (
    <Canvas camera={{ fov: 55, position: [3, 5, 5] }} flat>
      <Experience />

      <ScrollControls pages={5} damping={0.25}>
        <Overlay />
        <Bottle />
      </ScrollControls>

      <Lights />
    </Canvas>
  );
}
