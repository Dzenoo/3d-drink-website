import { CuboidCollider, RigidBody } from "@react-three/rapier";
import React from "react";

const Plane: React.FC = () => {
  return (
    <>
      <RigidBody friction={1.0} restitution={0.5} type="fixed">
        <mesh
          scale={[50, 20, 1]}
          position={[0, -Math.PI * 0.5 - 1.5, 0]}
          rotation={[Math.PI * 0.5, 0, 0]}
        >
          <boxGeometry args={[1, 1, 0.1]} />
          <meshBasicMaterial color="#f0f1f3" />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed">
        <CuboidCollider args={[25.0, 1.0, 0.5]} position={[0.0, -1.95, 10.5]} />
        <CuboidCollider
          args={[25.0, 1.0, 0.5]}
          position={[0.0, -1.95, -10.5]}
        />
        <CuboidCollider
          rotation={[0, Math.PI * 0.5, 0]}
          args={[10.5, 1.0, 0.5]}
          position={[-Math.PI * 8.1, -1.95, 0]}
        />
        <CuboidCollider
          rotation={[0, Math.PI * 0.5, 0]}
          args={[10.5, 1.0, 0.5]}
          position={[Math.PI * 8.1, -1.95, 0]}
        />
      </RigidBody>
    </>
  );
};

export default Plane;
