"use client";

import * as THREE from "three";
import gsap from "gsap";
import { useEffect } from "react";

import { addLabel, addTweenAt } from "./animationRegistry";
import { DEBUG_MODE } from "@/constants";

type Pose = {
  label: string;
  position?: { x: number; y: number; z: number };
  rotation?: { x: number; y: number; z: number };
  duration?: number;
  ease?: string;
};

type ObjectAnimatorProps = {
  targetRef: React.RefObject<THREE.Object3D>;
  poses: Pose[];
  labels: Array<{ name: string; pos: number }>;
};

const ObjectAnimator: React.FC<ObjectAnimatorProps> = ({
  targetRef,
  poses,
  labels,
}) => {
  useEffect(() => {
    if (DEBUG_MODE) return; // ⬅️ IMPORTANT

    // Register labels first
    labels.forEach((l) => addLabel(l.name, l.pos));

    // Create tweens and add them at their label positions
    const tweens: gsap.core.Tween[] = [];

    poses.forEach((pose) => {
      if (pose.position) {
        const tween = gsap.to(targetRef.current!.position, {
          x: pose.position.x,
          y: pose.position.y,
          z: pose.position.z,
          duration: pose.duration ?? 0.25,
          ease: pose.ease ?? "power1.inOut",
        });
        addTweenAt(tween, pose.label);
        tweens.push(tween);
      }

      if (pose.rotation) {
        const tween = gsap.to(targetRef.current!.rotation, {
          x: pose.rotation.x,
          y: pose.rotation.y,
          z: pose.rotation.z,
          duration: pose.duration ?? 0.25,
          ease: pose.ease ?? "power1.inOut",
        });
        addTweenAt(tween, pose.label);
        tweens.push(tween);
      }
    });

    return () => {
      tweens.forEach((t) => t.kill());
    };
  }, []);

  return null;
};

export default ObjectAnimator;
