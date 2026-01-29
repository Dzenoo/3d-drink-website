'use client';

import * as THREE from 'three';
import React, { forwardRef, useMemo } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

const MODEL_PATH = '/models/drink.glb';

type DrinkProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
};

const metalMaterial = new THREE.MeshStandardMaterial({
  color: 'lightgray',
  metalness: 0.9,
  roughness: 0.01,
});

const topMaterial = new THREE.MeshStandardMaterial({
  color: '#2b2b2b',
  metalness: 1,
  roughness: 0.01,
});

const Drink = forwardRef<THREE.Group, DrinkProps>(
  ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1] }, ref) => {
    const { nodes } = useGLTF(MODEL_PATH) as any;
    const map = useTexture('/images/strawberry-drink-texture.webp');

    map.flipY = false;
    map.colorSpace = THREE.SRGBColorSpace;
    map.magFilter = THREE.LinearFilter;
    map.minFilter = THREE.LinearMipmapLinearFilter;
    map.generateMipmaps = true;
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.ClampToEdgeWrapping;
    map.repeat.set(1.9, 1);
    map.offset.set(0.05, 0);

    const canMaterial = useMemo(
      () =>
        new THREE.MeshStandardMaterial({
          map,
          roughness: 0.3,
          metalness: 0.7,
        }),
      [],
    );

    return (
      <group ref={ref} position={position} rotation={rotation} scale={scale}>
        <mesh geometry={nodes.Tab.geometry} material={metalMaterial} />
        <mesh geometry={nodes.Top.geometry} material={topMaterial} />
        <mesh geometry={nodes.Can.geometry} material={canMaterial} />
        <mesh geometry={nodes.Bottom.geometry} material={metalMaterial} />
      </group>
    );
  },
);

useGLTF.preload(MODEL_PATH);

export default Drink;
