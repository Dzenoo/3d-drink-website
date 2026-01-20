"use client";

import { useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { scrollTimeline } from "./ScrollAnimationManager";

interface Props {
  drinkRef: React.RefObject<THREE.Group>;
}

const DrinkAnimations = ({ drinkRef }: Props) => {
  useEffect(() => {
    if (!drinkRef.current) return;

    const drink = drinkRef.current;

    // entrance
    gsap.fromTo(
      drink.position,
      { y: -3.1 },
      {
        y: -2.1,
        duration: 2,
        ease: "power3.out",
        delay: 0.5, // Add delay for better sync
      },
    );

    // Set labels to match 4 sections: 0, 0.25, 0.5, 0.75
    scrollTimeline.addLabel("hero", 0);
    scrollTimeline.addLabel("ingredients", 0.25);
    scrollTimeline.addLabel("refreshing", 0.5);
    scrollTimeline.addLabel("flavors", 0.75);

    // HERO SECTION
    scrollTimeline.to(
      drink.position,
      { x: 2.43, y: -1.59, z: -2.99, duration: 0.25 },
      "hero",
    );
    scrollTimeline.to(
      drink.rotation,
      { x: -0.35, y: "+=6.28319", z: 0.41, duration: 0.25 },
      "hero",
    );

    // INGREDIENTS SECTION
    scrollTimeline.to(
      drink.position,
      { x: -0.21, y: -0.28, z: -1.3, duration: 0.25 },
      "ingredients",
    );
    scrollTimeline.to(
      drink.rotation,
      { x: -1.57, y: 3.13, z: 1.11, duration: 0.25 },
      "ingredients",
    );

    // REFRESHING SECTION
    scrollTimeline.to(
      drink.position,
      {
        x: -2.0,
        y: -0.4,
        z: -2.0,
        duration: 0.25,
      },
      "refreshing",
    );
    scrollTimeline.to(
      drink.rotation,
      {
        x: -2.0,
        y: 2.0,
        z: -2.0,
        duration: 0.25,
      },
      "refreshing",
    );

    // FLAVORS SECTION
    scrollTimeline.to(
      drink.position,
      { x: -3.59, y: -0.56, z: -2.82, duration: 0.25 },
      "flavors",
    );
    scrollTimeline.to(
      drink.rotation,
      { x: -3.14, y: 1, z: -3.14, duration: 0.25 },
      "flavors",
    );
  }, []);

  return null;
};

export default DrinkAnimations;
