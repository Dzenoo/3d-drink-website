"use client";
import Apple from "@/components/details/apple/Apple";
import Kiwi from "@/components/details/kiwi/Kiwi";
import Orange from "@/components/details/orange/Orange";
import Strawberry from "@/components/details/strawberry/Strawberry";
import React, { Suspense } from "react";
import Drink from "@/components/home/3d/Drink";
import Experience from "@/components/setup/Experience";
import DetailsOverlay from "@/components/details/DetailsOverlay";
import Lights from "@/components/setup/Lights";
import { Canvas } from "@react-three/fiber";
import { DrinkTexture } from "../page";
import Plane from "@/components/details/plane/Plane";
import { Physics, RigidBody } from "@react-three/rapier";

const DrinkDetails = ({ params }: { params: { id: DrinkTexture } }) => {
  return (
    <Canvas shadows camera={{ fov: 75 }} flat>
      <Experience />
      <Lights />
      <Suspense>
        <Physics>
          <Drink
            position={[0, -0.5, 0]}
            rotation={[0, 1.55, 0]}
            enableScroll={false}
            texture={params?.id}
          />
          <Apple />
          <Plane />
        </Physics>
      </Suspense>
    </Canvas>
  );
};

export default DrinkDetails;
