"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useFrame, useThree } from "@react-three/fiber";

import { DEBUG_MODE } from "@/constants";

type CameraControllerProps = {
  distance?: number;
  height?: number;
  lookAt?: [number, number, number];
  mouseFactor?: number;
  introFrom?: { x?: number; y?: number; z?: number };
  introDuration?: number;
  introEase?: string;
};

const CameraController: React.FC<CameraControllerProps> = ({
  distance = 8,
  height = 0,
  lookAt = [0, 0, 0],
  mouseFactor = 0.05,
  introFrom = { y: -3 },
  introDuration = 1.5,
  introEase = "power2.out",
}) => {
  const { camera } = useThree();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const introDone = useRef(false);

  useEffect(() => {
    camera.position.set(
      introFrom.x ?? 0,
      introFrom.y ?? height,
      introFrom.z ?? distance,
    );
    camera.lookAt(...lookAt);

    const tween = gsap.to(camera.position, {
      x: 0,
      y: height,
      z: distance,
      duration: introDuration,
      ease: introEase,
      onComplete: () => {
        introDone.current = true;
      },
    });

    return () => {
      tween.kill();
    };
  }, [camera, distance, height, lookAt, introFrom, introDuration, introEase]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * mouseFactor,
        y: (e.clientY / window.innerHeight - 0.5) * mouseFactor,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseFactor]);

  useFrame(() => {
    if (DEBUG_MODE) return;

    if (introDone.current) {
      camera.lookAt(
        lookAt[0] + mouse.x * 2,
        lookAt[1] - mouse.y * 2,
        lookAt[2],
      );
    } else {
      camera.lookAt(...lookAt);
    }
  });

  return null;
};

export default CameraController;
