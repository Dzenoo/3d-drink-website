import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

const Strawberry: React.FC = () => {
  const { nodes: strawberryNodes } = useGLTF("./models/strawberry.glb");
  const nodes: any = strawberryNodes;

  return (
    <>
      <group>
        <mesh
          rotation={[-Math.PI * 0.7, 0, 0.1]}
          position={[0, 0.25, 0.8]}
          geometry={nodes.List.geometry}
          material={
            new THREE.MeshStandardMaterial({
              color: new THREE.Color("lightgreen"),
              roughness: 0.9,
              metalness: 0.9,
            })
          }
        />
        <mesh
          geometry={nodes.Strawberry.geometry}
          material={
            new THREE.MeshStandardMaterial({
              color: new THREE.Color("#cf3a45"),
              roughness: 0.5,
              metalness: 0.7,
            })
          }
        />
      </group>
    </>
  );
};

export default Strawberry;
