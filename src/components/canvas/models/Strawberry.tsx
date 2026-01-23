"use client";

import { forwardRef, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

type StrawberryProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
};

const Strawberry = forwardRef<THREE.Group, StrawberryProps>(
  ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }, ref) => {
    const [aspect, setAspect] = useState(1);
    const innerRef = useRef<THREE.Mesh>(null);
    const texture = useTexture("/images/strawberry.png");

    useEffect(() => {
      if (texture.image) {
        const { width, height } = texture.image;
        setAspect(width / height);
      }
    }, [texture]);

    return (
      <group ref={ref} position={position} rotation={rotation}>
        <mesh ref={innerRef}>
          <planeGeometry args={[scale * aspect, scale]} />
          <meshBasicMaterial
            map={texture}
            transparent
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    );
  },
);

export default Strawberry;
