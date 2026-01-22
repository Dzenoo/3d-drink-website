import { Pose } from "../types";

export const DRINK_POSES: Pose[] = [
  {
    at: 0,
    position: { x: 2, y: 0, z: 0 },
    rotation: { x: 0.9, y: Math.PI * 2.5, z: -1.0 },
  },
  {
    at: 0.25,
    position: { x: -1, y: 0, z: 0 },
    rotation: { x: 0.9, y: -0.3, z: -1.0 },
  },
  {
    at: 0.5,
    position: { x: 0, y: 0, z: 1 },
    rotation: { x: 1.7, y: 0, z: 4.7 },
  },
  {
    at: 0.75,
    position: { x: 0, y: 0, z: 1.5 },
    rotation: { x: 0, y: -4.7, z: -0.1 },
  },
];
