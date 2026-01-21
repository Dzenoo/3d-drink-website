"use client";

import { useEffect, useRef } from "react";
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
  const mouse = useRef({ x: 0, y: 0 }); // Changed to ref

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

      const object = ref.current;

      poses.forEach((pose) => {
        const { at, duration = 0.25, ease = "power1.inOut" } = pose;

        if (pose.position) {
          const tween = gsap.to(object.position, {
            ...pose.position,
            duration,
            ease,
          });
          scrollTimeline.add(tween, at);
          tweens.push(tween);
        }

        if (pose.rotation) {
          const tween = gsap.to(object.rotation, {
            ...pose.rotation,
            duration,
            ease,
          });
          scrollTimeline.add(tween, at);
          tweens.push(tween);
        }

        if (pose.scale !== undefined) {
          const scaleValue =
            typeof pose.scale === "number"
              ? { x: pose.scale, y: pose.scale, z: pose.scale }
              : pose.scale;

          const tween = gsap.to(object.scale, {
            ...scaleValue,
            duration,
            ease,
          });
          scrollTimeline.add(tween, at);
          tweens.push(tween);
        }
      });
    });

    return () => {
      tweens.forEach((t) => t.kill());
    };
  }, [debug, objects]);

  // Mouse tracking (no re-renders now)
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * mouseFactor;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * mouseFactor;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseFactor]);

  // Block scroll during intro
  useEffect(() => {
    if (debug) return;

    const scrollContainer = scroll.el;

    const blockScroll = (e: Event) => {
      if (!introDone.current) {
        e.preventDefault();
        scroll.el.scrollTop = 0;
      }
    };

    scrollContainer.addEventListener("scroll", blockScroll);
    return () => scrollContainer.removeEventListener("scroll", blockScroll);
  }, [debug, scroll]);

  // Frame loop
  useFrame(() => {
    if (debug) return;

    if (!introDone.current) {
      scrollTimeline.progress(0);
      threeCamera.lookAt(...lookAt);
      return;
    }

    if (scroll.offset !== scrollTimeline.progress()) {
      scrollTimeline.progress(scroll.offset);
    }

    threeCamera.lookAt(
      lookAt[0] + mouse.current.x * 2,
      lookAt[1] - mouse.current.y * 2,
      lookAt[2],
    );
  });

  return { introDone: introDone.current };
}
