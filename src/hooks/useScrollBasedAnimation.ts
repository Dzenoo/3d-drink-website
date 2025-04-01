import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

interface AnimationKeyframe {
  position?: THREE.Vector3;
  rotation?: THREE.Euler;
  scale?: THREE.Vector3;
  duration?: number;
}

interface AnimateProps {
  keyframes: AnimationKeyframe[];
}

const useScrollBasedAnimation = (
  ref: React.RefObject<THREE.Object3D>,
  { keyframes }: AnimateProps
) => {
  const tl = useRef<gsap.core.Timeline | null>(null);
  const scroll = useScroll();
  const initialValues = useRef<{
    position: THREE.Vector3;
    rotation: THREE.Euler;
    scale: THREE.Vector3;
  } | null>(null);

  useFrame(() => {
    if (tl.current) {
      tl.current.progress(scroll.offset);
    }
  });

  useEffect(() => {
    if (!ref.current) return;

    initialValues.current = {
      position: ref.current.position.clone(),
      rotation: ref.current.rotation.clone(),
      scale: ref.current.scale.clone(),
    };

    const timeline = gsap.timeline({ paused: true });
    tl.current = timeline;

    keyframes.forEach((keyframe, index) => {
      const { position, rotation, scale, duration = 0.5 } = keyframe;
      const obj = ref.current!;
      const initVals = initialValues.current!;

      timeline.to(
        obj.position,
        {
          x: position?.x ?? initVals.position.x,
          y: position?.y ?? initVals.position.y,
          z: position?.z ?? initVals.position.z,
          duration,
          ease: "power1.inOut",
        },
        index > 0 ? ">=" : 0
      );

      timeline.to(
        obj.rotation,
        {
          x: rotation?.x ?? initVals.rotation.x,
          y: rotation?.y ?? initVals.rotation.y,
          z: rotation?.z ?? initVals.rotation.z,
          duration,
          ease: "power1.inOut",
        },
        index > 0 ? ">=" : 0
      );

      timeline.to(
        obj.scale,
        {
          x: scale?.x ?? initVals.scale.x,
          y: scale?.y ?? initVals.scale.y,
          z: scale?.z ?? initVals.scale.z,
          duration,
          ease: "power1.inOut",
        },
        index > 0 ? ">=" : 0
      );
    });

    return () => {
      timeline.kill();
    };
  }, [ref, keyframes]);

  return null;
};

export { useScrollBasedAnimation };
