import { RigidBody } from "@react-three/rapier";
import React from "react";

const Plane: React.FC = () => {
  return (
    <RigidBody type="fixed">
      <mesh
        receiveShadow
        scale={10}
        position={[0, -Math.PI * 0.5 - 1.5, 0]}
        rotation={[Math.PI * 0.5, 0, 0]}
      >
        <boxGeometry args={[1, 1, 0.1]} />
        <meshBasicMaterial color="white" />
      </mesh>
    </RigidBody>
  );
};

export default Plane;
