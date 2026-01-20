"use client";

import React, { useEffect } from "react";
import * as THREE from "three";
import { useControls } from "leva";

type SceneDebugProps = {
  targetRef: React.RefObject<THREE.Object3D>;
  name?: string;
};

const SceneDebug: React.FC<SceneDebugProps> = ({
  targetRef,
  name = "Object",
}) => {
  const controls = useControls(name, {
    // Position
    x: { value: 0, min: -10, max: 10, step: 0.1 },
    y: { value: 0, min: -10, max: 10, step: 0.1 },
    z: { value: 0, min: -10, max: 10, step: 0.1 },

    // Rotation
    rotX: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.1 },
    rotY: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.1 },
    rotZ: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.1 },
  });

  useEffect(() => {
    if (!targetRef.current) return;

    targetRef.current.position.set(controls.x, controls.y, controls.z);
    targetRef.current.rotation.set(controls.rotX, controls.rotY, controls.rotZ);
  }, [controls, targetRef]);

  return null;
};

export default SceneDebug;
