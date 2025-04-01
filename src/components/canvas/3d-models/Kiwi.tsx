import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

interface KiwiProps {
  position: [number, number, number];
  physics?: boolean;
}

const Kiwi: React.FC<KiwiProps> = ({ position, physics = true }) => {
  const { nodes } = useGLTF("./models/kiwi.glb") as unknown as {
    nodes: {
      Kiwi: THREE.Mesh;
    };
  };

  const group = (
    <group position={[0, 0, 0]}>
      <mesh
        geometry={nodes.Kiwi.geometry}
        material={
          new THREE.MeshStandardMaterial({
            color: new THREE.Color("lightgreen"),
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
      >
        {group}
      </RigidBody>
    );
  } else {
    return group;
  }
};

export default Kiwi;
