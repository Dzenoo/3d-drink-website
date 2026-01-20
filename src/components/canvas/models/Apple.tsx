import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

interface AppleProps {
  position: [number, number, number];
  physics?: boolean;
}

const Apple: React.FC<AppleProps> = ({ position, physics = true }) => {
  const { nodes } = useGLTF("./models/apple.glb") as unknown as {
    nodes: {
      Apple_Peduncle: THREE.Mesh;
      Apple: THREE.Mesh;
    };
  };

  const group = (
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
            roughness: 0.2,
            metalness: 0.1,
          })
        }
      />
    </group>
  );

  if (physics) {
    return (
      <RigidBody
        position={position}
        colliders="ball"
        type="dynamic"
        angularDamping={0.9}
        linearDamping={0.1}
      >
        {group}
      </RigidBody>
    );
  } else {
    return group;
  }
};

export default Apple;
