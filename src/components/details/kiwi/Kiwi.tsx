import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

const Kiwi: React.FC = () => {
  const { nodes: kiwiNodes } = useGLTF("./models/kiwi.glb");
  const nodes: any = kiwiNodes;

  return (
    <>
      <group>
        <mesh
          geometry={nodes.Kiwi.geometry}
          material={
            new THREE.MeshStandardMaterial({
              color: new THREE.Color("#bc7a21"),
              roughness: 0.5,
              metalness: 0.7,
            })
          }
        />
      </group>
    </>
  );
};

export default Kiwi;
