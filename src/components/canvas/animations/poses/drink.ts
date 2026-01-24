import { Pose } from "../types";

export const DRINK_POSES: Pose[] = [
  // HERO (0% - 20%)
  {
    at: 0,
    position: { x: 2, y: 0, z: 0 },
    rotation: { x: 0.2, y: 2.5, z: 0.5 },
  },
  // INGREDIENTS (20% - 40%)
  {
    at: 0.2,
    position: { x: -2, y: 0, z: 0 },
    rotation: { x: 0.3, y: -0.8, z: 0.1 },
  },
  // EXPERIENCE (40% - 60%)
  {
    at: 0.4,
    position: { x: 0, y: 0, z: 1 },
    rotation: { x: 0, y: Math.PI, z: 0 },
  },
  // FLAVORS (60% - 80%)
  {
    at: 0.6,
    position: { x: 2, y: 0, z: 0 },
    rotation: { x: 0, y: Math.PI * 1.5, z: 0 },
  },
  // CTA (80% - 100%)
  {
    at: 0.8,
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: Math.PI * 2, z: 0 },
  },
];
