"use client";

import * as THREE from "three";
import React, { forwardRef, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useStore } from "@/store";

type DrinkProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  textureName?: "apple" | "kiwi" | "orange" | "strawberry";
};

const Drink = forwardRef<THREE.Group, DrinkProps>(
  (
    {
      position = [0, 0, 0],
      rotation = [0, 0, 0],
      scale = [1, 1, 1],
      textureName,
    },
    ref,
  ) => {
    const { drinkTexture: defaultTextureName } = useStore();

    const { nodes } = useGLTF("/models/drink.glb") as any;

    const texture = useTexture(
      `/images/${textureName ?? defaultTextureName}.png`,
    );
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearFilter;
    texture.repeat.set(2, 2);

    const canMaterial = useMemo(
      () =>
        new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.2,
          metalness: 0.7,
        }),
      [texture],
    );

    return (
      <group ref={ref} position={position} rotation={rotation} scale={scale}>
        <mesh geometry={nodes.Lid.geometry}>
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
