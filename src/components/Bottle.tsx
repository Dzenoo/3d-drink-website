import * as THREE from "three";
import { gsap } from "gsap";
import { useGLTF, useScroll } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Bottle: React.FC = () => {
  const { nodes: bottleNodes } = useGLTF("./models/bottle.glb");
  const nodes: any = bottleNodes;

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
        z: 2,
      },
      0
    );
    tl.current!.to(
      ref.current!.position,
      {
        duration: 0.5,
        x: 2,
        z: -2,
      },
      1
    );

    tl.current!.to(
      ref.current!.position,
      {
        duration: 0.5,
        x: -1,
        z: 2,
      },
      1.5
    );

    tl.current!.to(
      ref.current!.position,
      {
        duration: 0.5,
        x: 2,
        z: -2,
      },
      2
    );

    tl.current!.to(
      ref.current!.position,
      {
        duration: 1,
        x: 0,
        z: 0,
      },
      2.5
    );
  }, []);

  return (
    <>
      <group dispose={null} ref={ref} position={[Math.PI * 0.5, 0, 0]}>
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Lid.geometry}
          material={
            new THREE.MeshStandardMaterial({
              color: "gray",
              roughness: 0.01,
              metalness: 0.3,
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
              color: "gray",
              roughness: 0.01,
              metalness: 0.3,
            })
          }
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Can.geometry}
          material={
            new THREE.MeshStandardMaterial({
              color: "red",
              roughness: 0.01,
              metalness: 0.3,
            })
          }
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Bottom.geometry}
          material={
            new THREE.MeshStandardMaterial({
              color: "gray",
              roughness: 0.01,
              metalness: 0.3,
            })
          }
        />
      </group>
    </>
  );
};

export default Bottle;
