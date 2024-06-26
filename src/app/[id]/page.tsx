"use client";
import React, { Suspense } from "react";
import Drink from "@/components/home/3d/Drink";
import Experience from "@/components/setup/Experience";
import DetailsOverlay from "@/components/details/DetailsOverlay";
import Lights from "@/components/setup/Lights";
import { Canvas } from "@react-three/fiber";
import { DrinkTexture } from "../page";
import { Physics, RigidBody } from "@react-three/rapier";
import FruitsManager from "@/components/details/FruitsManager";
import Plane from "@/components/details/Plane";

const DrinkDetails = ({ params }: { params: { id: DrinkTexture } }) => {
  return (
    <>
      <Canvas camera={{ fov: 75 }} flat>
        <Experience />
        <Lights />
        <Suspense>
          <Physics gravity={[0, -9.08, 0]}>
            <RigidBody restitution={0.5} type="fixed">
              <Drink
                droplets={false}
                position={[0, -0.5, 0]}
                rotation={[0, 1.55, 0]}
                enableScroll={false}
                texture={params?.id}
              />
            </RigidBody>
            <Plane />
            <FruitsManager fruitType={params.id} count={50} />
          </Physics>
        </Suspense>
      </Canvas>
      <DetailsOverlay flavor={params.id} />
    </>
  );
};

export default DrinkDetails;
