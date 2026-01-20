"use client";

import * as THREE from "three";

import ObjectAnimator from "./ObjectAnimator";

type DrinkAnimationsProps = {
  targetRef: React.RefObject<THREE.Group>;
};

const DrinkAnimations: React.FC<DrinkAnimationsProps> = ({ targetRef }) => {
  // Define poses with their label positions and animations
  const poses = [
    {
      label: "hero",
      position: { x: 4, y: 0, z: 0 },
      rotation: { x: 0.9, y: Math.PI * 2.5, z: -1.0 },
      duration: 0.25,
    },
    {
      label: "ingredients",
      position: { x: -1, y: 0, z: 0 },
      rotation: { x: 0.9, y: 0.6, z: -1.0 },
      duration: 0.25,
    },
    {
      label: "refreshing",
      position: { x: 0, y: 0, z: 1 },
      rotation: { x: 1.7, y: 0, z: 4.7 },
      duration: 0.25,
    },
    {
      label: "flavors",
      position: { x: 0, y: 0, z: 1.5 },
      rotation: { x: 0, y: -4.7, z: -0.1 },
      duration: 0.25,
    },
  ];

  // Define labels with their timeline positions
  const labels = [
    { name: "hero", pos: 0 },
    { name: "ingredients", pos: 0.25 },
    { name: "refreshing", pos: 0.5 },
    { name: "flavors", pos: 0.75 },
  ];

  return <ObjectAnimator targetRef={targetRef} poses={poses} labels={labels} />;
};

export default DrinkAnimations;
