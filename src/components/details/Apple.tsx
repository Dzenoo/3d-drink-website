import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

interface AppleProps {
  position: [number, number, number];
}

const Apple: React.FC<AppleProps> = ({ position }) => {
  const { nodes: appleNodes } = useGLTF("./models/apple.glb");
  const nodes: any = appleNodes;

  return (
    <RigidBody
      position={position}
      colliders="ball"
      type="dynamic"
      angularDamping={0.9}
      linearDamping={0.1}
    >
      <group position={[0, 0, 0]}>
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
    </RigidBody>
  );
};

export default Apple;
