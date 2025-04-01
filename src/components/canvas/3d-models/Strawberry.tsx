import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

interface StrawberryProps {
  position: [number, number, number];
  physics?: boolean;
}

const Strawberry: React.FC<StrawberryProps> = ({
  position,
  physics = true,
}) => {
  const { nodes } = useGLTF("./models/strawberry.glb") as unknown as {
    nodes: {
      List: THREE.Mesh;
      Strawberry: THREE.Mesh;
    };
  };

  const group = (
    <group position={[0, 0, 0]}>
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
  );

  if (physics) {
    return (
      <RigidBody
        position={position}
        colliders="ball"
        type="dynamic"
        angularDamping={0.9}
        linearDamping={0.1}
        scale={0.5}
      >
        {group}
      </RigidBody>
    );
  } else {
    return group;
  }
};

export default Strawberry;
