"use client";

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { useStore } from "@/store";

interface DrinkProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  droplets?: boolean;
  enableScroll?: boolean;
  textureId?: string;
}

const Drink: React.FC<DrinkProps> = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  droplets = true,
  enableScroll = true,
  textureId,
}) => {
  const { drinkTexture } = useStore();  

  const { nodes } = useGLTF("./models/drink.glb") as unknown as {
    nodes: {
      Lid: THREE.Mesh;
      Top: THREE.Mesh;
      Can: THREE.Mesh;
      Bottom: THREE.Mesh;
      Droplets: THREE.Mesh;
    };
  };

  const energyTexture = useTexture(`/images/${textureId ?? drinkTexture}.png`);
  energyTexture.flipY = false;
  energyTexture.colorSpace = THREE.SRGBColorSpace;
  energyTexture.magFilter = THREE.LinearFilter;
  energyTexture.minFilter = THREE.LinearFilter;
  energyTexture.repeat.set(2, 2);

  const ref = useRef<any>();
  const tl = useRef<any>();

  const scroll = useScroll();

  useFrame(() => {
    if (enableScroll) {
      tl.current!.seek(scroll.offset * tl.current!.duration());
    }
  });

  useEffect(() => {
    if (enableScroll) {
      tl.current = gsap.timeline();

      tl.current.to(ref.current!.position, {
        duration: 0.1,
        y: -0.1,
      });

      tl.current!.to(
        ref.current!.rotation,
        {
          duration: 0.5,
          y: 2.8,
          z: 0.5,
        },
        0,
      );
      tl.current!.to(
        ref.current!.rotation,
        {
          duration: 0.5,
          y: Math.PI * 0.5 + 0.55,
          z: 0,
        },
        1,
      );
      tl.current!.to(
        ref.current!.position,
        {
          duration: 0.5,
          x: 1.5,
          z: -1.5,
        },
        0,
      );
      tl.current!.to(
        ref.current!.position,
        {
          duration: 0.5,
          x: -1,
          z: 1,
        },
        0.5,
      );
      tl.current!.to(
        ref.current!.position,
        {
          duration: 0.5,
          x: 0,
          z: 0,
        },
        1,
      );
    }
  }, [enableScroll]);

  return (
    <group
      position={position}
      rotation={rotation}
      scale={scale}
      dispose={null}
      ref={ref}
    >
      <mesh
        geometry={nodes.Lid.geometry}
        material={
          new THREE.MeshStandardMaterial({
            color: "lightgray",
            roughness: 0.01,
            metalness: 0.8,
          })
        }
        position={[0.1, 2.45, -0.01]}
        rotation={[0, -1.5, 0]}
      />
      <mesh
        geometry={nodes.Top.geometry}
        material={
          new THREE.MeshStandardMaterial({
            color: "#2b2b2b",
            roughness: 0.01,
            metalness: 1,
          })
        }
      />
      <mesh
        geometry={nodes.Can.geometry}
        material={
          new THREE.MeshStandardMaterial({
            map: energyTexture,
            roughness: 0.2,
            metalness: 0.7,
          })
        }
      />
      {droplets && (
        <mesh
          rotation={[3.37, 3.95, 4.8]}
          scale={0.027}
          position={[0.91, 0.86, -0.81]}
          geometry={nodes.Droplets.geometry}
          material={
            new THREE.MeshPhysicalMaterial({
              color: 0xffffff,
              roughness: 0.05,
              transmission: 1,
              thickness: 1,
              clearcoat: 1,
              clearcoatRoughness: 0.05,
              metalness: 0,
              opacity: 0.5,
              transparent: true,
            })
          }
        />
      )}
      <mesh
        geometry={nodes.Bottom.geometry}
        material={
          new THREE.MeshStandardMaterial({
            color: "lightgray",
            roughness: 0.01,
            metalness: 1,
          })
        }
      />
    </group>
  );
};

export default Drink;
