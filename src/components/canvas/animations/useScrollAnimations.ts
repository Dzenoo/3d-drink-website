"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

import { AnimationConfig } from "./types";
import { scrollTimeline } from "./index";

export function useScrollAnimations(config: AnimationConfig) {
  const { debug = false, camera = {}, objects = [] } = config;
  const { camera: threeCamera } = useThree();
  const scroll = useScroll();
  const introDone = useRef(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const {
    distance = 8,
    height = 0,
    lookAt = [0, 0, 0],
    mouseFactor = 0.05,
    introFrom = { y: -3 },
    introDuration = 1.5,
    introEase = "power2.out",
  } = camera;

  // Camera intro
  useEffect(() => {
    if (debug) return;

    threeCamera.position.set(
      introFrom.x ?? 0,
      introFrom.y ?? height,
      introFrom.z ?? distance,
    );
    threeCamera.lookAt(...lookAt);

    const tween = gsap.to(threeCamera.position, {
      x: 0,
      y: height,
      z: distance,
      duration: introDuration,
      ease: introEase,
      onComplete: () => {
        introDone.current = true;
        scrollTimeline.progress(0);
      },
    });

    return () => {
      tween.kill();
    };
  }, [
    threeCamera,
    debug,
    distance,
    height,
    lookAt,
    introFrom,
    introDuration,
    introEase,
  ]);

  // Object animations
  useEffect(() => {
    if (debug) return;

    const tweens: gsap.core.Tween[] = [];

    objects.forEach(({ ref, poses }) => {
      if (!ref.current) return;

      poses.forEach((pose) => {
        if (pose.position) {
          const tween = gsap.to(ref.current!.position, {
            ...pose.position,
            duration: pose.duration ?? 0.25,
            ease: pose.ease ?? "power1.inOut",
          });
          scrollTimeline.add(tween, pose.at);
          tweens.push(tween);
        }

        if (pose.rotation) {
          const tween = gsap.to(ref.current!.rotation, {
            ...pose.rotation,
            duration: pose.duration ?? 0.25,
            ease: pose.ease ?? "power1.inOut",
          });
          scrollTimeline.add(tween, pose.at);
          tweens.push(tween);
        }
      });
    });

    return () => {
      tweens.forEach((t) => t.kill());
    };
  }, [debug, objects]);

  // Mouse tracking
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

  // Frame loop
  useFrame(() => {
    if (debug) return;

    if (introDone.current && scroll.offset !== scrollTimeline.progress()) {
      scrollTimeline.progress(scroll.offset);
    }

    if (introDone.current) {
      threeCamera.lookAt(
        lookAt[0] + mouse.x * 2,
        lookAt[1] - mouse.y * 2,
        lookAt[2],
      );
    } else {
      threeCamera.lookAt(...lookAt);
    }
  });

  return { introDone: introDone.current };
}
