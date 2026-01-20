"use client";

import { useControls, folder, button } from "leva";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { scrollTimeline } from "../animations/ScrollAnimationManager";

interface Props {
  drinkRef: React.RefObject<THREE.Group>;
  cameraRef: React.RefObject<THREE.Camera>;
}

const SceneDebug = ({ drinkRef, cameraRef }: Props) => {
  if (process.env.NODE_ENV !== "development") return null;

  useControls("Drink", {
    Position: folder({
      x: {
        value: 0,
        min: -5,
        max: 5,
        step: 0.01,
        onChange: (v) => drinkRef.current?.position.setX(v),
      },
      y: {
        value: 0,
        min: -5,
        max: 5,
        step: 0.01,
        onChange: (v) => drinkRef.current?.position.setY(v),
      },
      z: {
        value: 0,
        min: -5,
        max: 5,
        step: 0.01,
        onChange: (v) => drinkRef.current?.position.setZ(v),
      },
    }),
    Rotation: folder({
      rx: {
        value: 0,
        min: -Math.PI,
        max: Math.PI,
        step: 0.01,
        onChange: (v) => {
          if (!drinkRef.current) return;
          drinkRef.current.rotation.x = v;
        },
      },
      ry: {
        value: 0,
        min: -Math.PI,
        max: Math.PI,
        step: 0.01,
        onChange: (v) => {
          if (!drinkRef.current) return;
          drinkRef.current.rotation.y = v;
        },
      },
      rz: {
        value: 0,
        min: -Math.PI,
        max: Math.PI,
        step: 0.01,
        onChange: (v) => {
          if (!drinkRef.current) return;
          drinkRef.current.rotation.z = v;
        },
      },
    }),
    Scale: folder({
      sx: {
        value: 1,
        min: -Math.PI,
        max: Math.PI,
        step: 0.01,
        onChange: (v) => {
          if (!drinkRef.current) return;
          drinkRef.current.scale.x = v;
        },
      },
      sy: {
        value: 1,
        min: -Math.PI,
        max: Math.PI,
        step: 0.01,
        onChange: (v) => {
          if (!drinkRef.current) return;
          drinkRef.current.scale.y = v;
        },
      },
      sz: {
        value: 1,
        min: -Math.PI,
        max: Math.PI,
        step: 0.01,
        onChange: (v) => {
          if (!drinkRef.current) return;
          drinkRef.current.scale.z = v;
        },
      },
    }),

    logDrink: button(() => {
      if (!drinkRef.current) return;
      console.log("Drink Position:", drinkRef.current.position.toArray());
      console.log("Drink Rotation:", drinkRef.current.rotation.toArray());
    }),
  });

  useControls("Camera", {
    Position: folder({
      x: {
        value: cameraRef.current?.position.x ?? 0,
        min: -10,
        max: 10,
        step: 0.01,
        onChange: (v) => cameraRef.current?.position.setX(v),
      },
      y: {
        value: cameraRef.current?.position.y ?? 0,
        min: -10,
        max: 10,
        step: 0.01,
        onChange: (v) => cameraRef.current?.position.setY(v),
      },
      z: {
        value: cameraRef.current?.position.z ?? 5,
        min: -10,
        max: 10,
        step: 0.01,
        onChange: (v) => cameraRef.current?.position.setZ(v),
      },
    }),
    logCamera: button(() => {
      if (!cameraRef.current) return;
      console.log("Camera Position:", cameraRef.current.position.toArray());
    }),
  });

  useControls("Timeline", {
    progress: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.001,
      onChange: (v) => {
        scrollTimeline.progress(v);
      },
    },
  });

  return null;
};

export default SceneDebug;
