import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

interface KiwiProps {
  position: [number, number, number];
}

const Kiwi: React.FC<KiwiProps> = ({ position }) => {
  const { nodes: kiwiNodes } = useGLTF("./models/kiwi.glb");
  const nodes: any = kiwiNodes;

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
    </RigidBody>
  );
};

export default Kiwi;
