import * as THREE from "three";
import { gsap } from "gsap";
import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { DrinkTexture } from "@/app/page";

interface DrinkProps {
  enableScroll?: boolean;
  texture?: DrinkTexture;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

const Drink: React.FC<DrinkProps> = ({
  enableScroll = true,
  texture = "apple",
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
}) => {
  const { nodes: bottleNodes } = useGLTF("./models/drink.glb");
  const nodes: any = bottleNodes;

  const energyTexture = useTexture(`/images/${texture}.png`);
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
        0
      );
      tl.current!.to(
        ref.current!.rotation,
        {
          duration: 0.5,
          y: Math.PI * 0.5 + 0.55,
          z: 0,
        },
        1
      );
      tl.current!.to(
        ref.current!.position,
        {
          duration: 0.5,
          x: 1.5,
          z: -1.5,
        },
        0
      );
      tl.current!.to(
        ref.current!.position,
        {
          duration: 0.5,
          x: -1,
          z: 1,
        },
        0.5
      );
      tl.current!.to(
        ref.current!.position,
        {
          duration: 0.5,
          x: 0,
          z: 0,
        },
        1
      );
    }
  }, [enableScroll]);

  return (
    <>
      <group
        scale={scale}
        rotation={rotation}
        dispose={null}
        ref={ref}
        castShadow
        position={position}
      >
        <mesh
          castShadow
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
          castShadow
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
          castShadow
          geometry={nodes.Can.geometry}
          material={
            new THREE.MeshStandardMaterial({
              map: energyTexture,
              roughness: 0.5,
              metalness: 0.7,
            })
          }
        />
        <mesh
          rotation={[3.37, 3.95, 4.8]}
          scale={0.027}
          receiveShadow
          position={[0.91, 0.86, -0.81]}
          castShadow
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
        <mesh
          castShadow
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
    </>
  );
};

export default Drink;
