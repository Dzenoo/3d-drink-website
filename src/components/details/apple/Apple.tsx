import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

const Apple: React.FC = () => {
  const { nodes: appleNodes } = useGLTF("./models/apple.glb");
  const nodes: any = appleNodes;

  return (
    <>
      <group>
        <mesh
          scale={0.09}
          geometry={nodes.Apple_Peduncle.geometry}
          material={
            new THREE.MeshStandardMaterial({
              color: new THREE.Color("#7B3F00"),
              roughness: 0.5,
              metalness: 0.7,
            })
          }
        />
        <mesh
          geometry={nodes.Apple.geometry}
          material={
            new THREE.MeshStandardMaterial({
              color: new THREE.Color("red"),
              roughness: 0.5,
              metalness: 0.7,
            })
          }
        />
      </group>
    </>
  );
};

export default Apple;
