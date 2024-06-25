"use client";
import Drink from "@/components/home/3d/Drink";
import { Canvas } from "@react-three/fiber";
import Lights from "@/components/setup/Lights";
import Experience from "@/components/setup/Experience";
import { ScrollControls } from "@react-three/drei";
import HomeOverlay from "@/components/home/HomeOverlay";
import { Suspense, useState } from "react";

export type DrinkTexture = "apple" | "orange" | "strawberry" | "kiwi";

export default function Home() {
  const [drinkTexture, setdrinkTexture] = useState<DrinkTexture>("apple");

  return (
    <Canvas camera={{ fov: 55, position: [3, 0, 5] }} flat>
      <Experience />
      <Suspense fallback={null}>
        <ScrollControls pages={4} damping={0.25}>
          <HomeOverlay
            drinkTexture={drinkTexture}
            setdrinkTexture={setdrinkTexture}
          />
          <Drink
            position={[0, -2.1, 0]}
            rotation={[0, Math.PI * 0.5 + 0.55, 0]}
            texture={drinkTexture}
          />
        </ScrollControls>
      </Suspense>
      <Lights />
    </Canvas>
  );
}
