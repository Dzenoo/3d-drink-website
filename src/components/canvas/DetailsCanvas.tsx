"use client";

import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";

import { DrinkTexture } from "@/types";

import Lights from "./setup/Lights";
import Experience from "./setup/Experience";
import DetailsOverlay from "../pages/details/DetailsOverlay";
import FruitsManager from "../pages/details/FruitsManager";
import Plane from "../pages/details/Plane";
import Drink from "./3d-models/Drink";
import LoadingScreen from "../shared/LoadingScreen";

interface DetailsCanvasProps {
  id: DrinkTexture;
}

const DetailsCanvas: React.FC<DetailsCanvasProps> = ({ id }) => {
  return (
    <>
      <LoadingScreen />
      <Canvas camera={{ fov: 75 }} flat>
        <Lights />
        <Experience />
        <Physics gravity={[0, -9.08, 0]}>
          <RigidBody restitution={0.5} type="fixed">
            <Drink
              position={[0, -0.5, 0]}
              rotation={[0, 1.55, 0]}
              droplets={false}
              enableScroll={false}
            />
          </RigidBody>
          <Plane />
          <FruitsManager fruitType={id} count={50} />
        </Physics>
      </Canvas>
      <DetailsOverlay flavor={id} />
    </>
  );
};

export default DetailsCanvas;
