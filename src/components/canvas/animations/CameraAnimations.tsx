"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { scrollTimeline } from "./ScrollAnimationManager";

const CameraAnimations = () => {
  const { camera } = useThree();
  const [mouseCoordinates, setMouseCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const initialValuesRef = useRef<{
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
  }>();

  useEffect(() => {
    scrollTimeline.to(camera.position, { x: 3, y: 1, z: 4 }, "ingredients");
    scrollTimeline.to(camera.position, { x: 0, y: 0, z: 3 }, "flavors");
  }, [camera]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseCoordinates({
        x: (e.clientX / window.innerWidth - 0.5) * 0.05,
        y: (e.clientY / window.innerHeight - 0.5) * 0.05,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    const camera = state.camera;

    if (!initialValuesRef.current) {
      initialValuesRef.current = {
        position: {
          x: camera.position.x,
          y: camera.position.y,
          z: camera.position.z,
        },
        rotation: {
          x: camera.rotation.x,
          y: camera.rotation.y,
          z: camera.rotation.z,
        },
      };
    }

    // Add smooth mouse follow with damping
    const targetRotationX =
      initialValuesRef.current.rotation.x - mouseCoordinates.y; // Note: y mouse affects x rotation
    const targetRotationY =
      initialValuesRef.current.rotation.y - mouseCoordinates.x;

    const damping = 5;
    camera.rotation.x +=
      (targetRotationX - camera.rotation.x) * delta * damping;
    camera.rotation.y +=
      (targetRotationY - camera.rotation.y) * delta * damping;
  });

  return null;
};

export default CameraAnimations;
