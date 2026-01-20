"use client";

import * as THREE from "three";
import React, { forwardRef, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useStore } from "@/store";

interface DrinkProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  droplets?: boolean;
  textureId?: string;
}

const Drink = forwardRef<THREE.Group, DrinkProps>(
  (
    {
      position = [0, 0, 0],
      rotation = [0, 0, 0],
      scale = [1, 1, 1],
      droplets = true,
      textureId,
    },
    ref,
  ) => {
    const { drinkTexture } = useStore();

    const { nodes } = useGLTF("/models/drink.glb") as any;

    const texture = useTexture(`/images/${textureId ?? drinkTexture}.png`);
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

        {/* {droplets && (
          <mesh geometry={nodes.Droplets.geometry}>
            <meshPhysicalMaterial
              transmission={1}
              roughness={0.05}
              clearcoat={1}
              transparent
              opacity={0.5}
            />
          </mesh>
        )} */}

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
