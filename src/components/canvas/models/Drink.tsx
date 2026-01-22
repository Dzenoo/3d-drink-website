"use client";

import * as THREE from "three";
import React, { forwardRef, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

type DrinkProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
};

const Drink = forwardRef<THREE.Group, DrinkProps>(
  ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1] }, ref) => {
    const { nodes } = useGLTF("/models/drink.glb") as any;
    const map = useTexture(`/images/strawberry.png`);

    map.flipY = false;
    map.colorSpace = THREE.SRGBColorSpace;
    map.magFilter = THREE.LinearFilter;
    map.minFilter = THREE.LinearFilter;
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.ClampToEdgeWrapping;
    map.repeat.set(1.9, 1);
    map.offset.set(0.05, 0);

    const canMaterial = useMemo(
      () =>
        new THREE.MeshStandardMaterial({
          map: map,
          roughness: 0.3,
          metalness: 0.7,
        }),
      [],
    );

    return (
      <group ref={ref} position={position} rotation={rotation} scale={scale}>
        <mesh geometry={nodes.Tab.geometry}>
          <meshStandardMaterial
            color="lightgray"
            metalness={0.8}
            roughness={0.01}
          />
        </mesh>

        <mesh geometry={nodes.Top.geometry}>
          <meshStandardMaterial
            color="#2b2b2b"
            metalness={1}
            roughness={0.01}
          />
        </mesh>

        <mesh geometry={nodes.Can.geometry} material={canMaterial} />

        <mesh geometry={nodes.Bottom.geometry}>
          <meshStandardMaterial
            color="lightgray"
            metalness={1}
            roughness={0.01}
          />
        </mesh>
      </group>
    );
  },
);

useGLTF.preload("/models/drink.glb");

export default Drink;
