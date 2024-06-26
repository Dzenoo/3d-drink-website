import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

interface OrangeProps {
  position: [number, number, number];
}

const Orange: React.FC<OrangeProps> = ({ position }) => {
  const { nodes: orangeNodes } = useGLTF("./models/orange.glb");
  const nodes: any = orangeNodes;

  return (
    <RigidBody
      position={position}
      colliders="ball"
      type="dynamic"
      angularDamping={0.9}
      linearDamping={0.1}
    >
      <group position={[0, 0, 0]} scale={0.5}>
        <mesh
          position={[0.1, 1.5, 0]}
          scale={0.05}
          geometry={nodes.Orange_Peduncle.geometry}
          material={
            new THREE.MeshStandardMaterial({
              color: new THREE.Color("#7B3F00"),
              roughness: 0.5,
              metalness: 0.7,
            })
          }
        />
        <mesh
          geometry={nodes.Orange.geometry}
          material={
            new THREE.MeshStandardMaterial({
              color: new THREE.Color("#ED7014"),
              roughness: 0.5,
              metalness: 0.1,
            })
          }
        />
      </group>
    </RigidBody>
  );
};

export default Orange;
