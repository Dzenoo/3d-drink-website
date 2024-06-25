"use client";
import Apple from "@/components/details/apple/Apple";
import Kiwi from "@/components/details/kiwi/Kiwi";
import Orange from "@/components/details/orange/Orange";
import Strawberry from "@/components/details/strawberry/Strawberry";
import Experience from "@/components/setup/Experience";
import Lights from "@/components/setup/Lights";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const DrinkDetails = ({ params }: { params: { id: string } }) => {
  return (
    <Canvas camera={{ fov: 55 }}>
      <OrbitControls />
      <Experience />

      <Lights />
    </Canvas>
  );
};

export default DrinkDetails;
