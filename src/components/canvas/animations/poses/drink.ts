import { Pose } from "../types";

export const DRINK_POSES: Pose[] = [
  // ============================================
  // HERO (0% - 20%)
  // Layout: Text LEFT + CENTER, 3D on RIGHT
  // ============================================
  {
    at: 0,
    position: { x: 2.5, y: -0.3, z: 0 },
    rotation: { x: 0.1, y: -0.5, z: 0.1 },
    scale: 1,
  },

  // ============================================
  // INGREDIENTS (20% - 40%)
  // Layout: Text LEFT, 3D on RIGHT (large area)
  // ============================================
  {
    at: 0.2,
    position: { x: 2.5, y: -0.3, z: 0 },
    rotation: { x: 0.1, y: -0.5, z: 0.1 },
    scale: 1,
  },
  {
    at: 0.35,
    position: { x: 2.8, y: 0, z: 0.5 },
    rotation: { x: 0.2, y: -0.8, z: 0.15 },
    scale: 1.1,
  },

  // ============================================
  // EXPERIENCE (40% - 60%)
  // Layout: Text CENTER, 3D on LEFT side
  // ============================================
  {
    at: 0.4,
    position: { x: 2.8, y: 0, z: 0.5 },
    rotation: { x: 0.2, y: -0.8, z: 0.15 },
    scale: 1.1,
  },
  {
    at: 0.55,
    position: { x: -3, y: -0.2, z: 0 },
    rotation: { x: 0.1, y: 0.8, z: -0.1 },
    scale: 1,
  },

  // ============================================
  // FLAVORS (60% - 80%)
  // Layout: Text RIGHT, 3D on LEFT (large area)
  // ============================================
  {
    at: 0.6,
    position: { x: -3, y: -0.2, z: 0 },
    rotation: { x: 0.1, y: 0.8, z: -0.1 },
    scale: 1,
  },
  {
    at: 0.75,
    position: { x: -2.5, y: 0, z: 0.8 },
    rotation: { x: 0, y: 1.2, z: 0 },
    scale: 1.15,
  },

  // ============================================
  // CTA (80% - 100%)
  // Layout: Text CENTER, 3D subtle/background
  // ============================================
  // {
  //   at: 0.8,
  //   position: { x: 0, y: 4, z: 0.8 },
  //   rotation: { x: 0, y: 1.2, z: 0 },
  //   scale: 1.15,
  // },
  {
    at: 1.0,
    position: { x: -1.5, y: 4, z: 0 },
  },
];
