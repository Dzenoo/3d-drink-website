import * as THREE from "three";
import { gsap } from "gsap";
import {
  MeshReflectorMaterial,
  useGLTF,
  useScroll,
  useTexture,
} from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Bottle: React.FC = () => {
  const { nodes: bottleNodes } = useGLTF("./models/drink.glb");
  const nodes: any = bottleNodes;

  const energyTexture = useTexture("/images/energy.png");
  energyTexture.flipY = false;
  energyTexture.colorSpace = THREE.SRGBColorSpace;
  energyTexture.wrapS = THREE.RepeatWrapping;
  energyTexture.wrapT = THREE.RepeatWrapping;

  const ref = useRef<any>();
  const tl = useRef<any>();

  const scroll = useScroll();

  useFrame(() => {
    tl.current!.seek(scroll.offset * tl.current!.duration());
  });

  useEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(ref.current!.position, {
      duration: 2,
      y: -0.5,
    });

    tl.current!.to(
      ref.current!.position,
      {
        duration: 0.5,
        x: -1,
      },
      0
    );
    tl.current!.to(
      ref.current!.position,
      {
        duration: 0.5,
        x: 0,
      },
      1
    );
    tl.current!.to(
      ref.current!.rotation,
      {
        duration: 0.5,
        x: -1,
      },
      0
    );
    tl.current!.to(
      ref.current!.rotation,
      {
        duration: 0.5,
        x: 0,
      },
      1
    );
    tl.current!.to(
      ref.current!.rotation,
      {
        duration: 0.5,
        z: 0,
      },
      1.5
    );
  }, []);

  return (
    <>
      <group
        rotation={[0, 0.9, -0.48]}
        dispose={null}
        ref={ref}
        position={[1.9, 0, 0]}
      >
        <mesh
          receiveShadow
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
          receiveShadow
          castShadow
          geometry={nodes.Top.geometry}
          material={
            new THREE.MeshStandardMaterial({
              color: "lightgray",
              roughness: 0.01,
              metalness: 0.9,
            })
          }
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Can.geometry}
          material={
            new THREE.MeshStandardMaterial({
              map: energyTexture,
              roughness: 0.01,
              metalness: 0.5,
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
              opacity: 1,
              transparent: true,
            })
          }
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Bottom.geometry}
          material={
            new THREE.MeshStandardMaterial({
              color: "lightgray",
              roughness: 0.01,
              metalness: 0.9,
            })
          }
        />
      </group>
    </>
  );
};

export default Bottle;
