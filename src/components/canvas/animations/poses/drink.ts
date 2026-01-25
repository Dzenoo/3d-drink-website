import { Pose } from "../types";

export const DRINK_POSES: Pose[] = [
  // ============================================
  // HERO (0% - 20%)
  // HTML: Left text + Center "TOTAL ENERGY"
  // Drink: Far right, angled toward viewer
  // ============================================
  {
    at: 0,
    position: { x: 4, y: -0.3, z: 1 },
    rotation: { x: 0, y: -0.4, z: 0 },
    scale: 1,
  },

  // ============================================
  // INGREDIENTS (20% - 40%)
  // HTML: Content on LEFT
  // Drink: RIGHT side, rotates 180° showing back then front
  // ============================================
  {
    at: 0.2,
    position: { x: 1.5, y: -0.3, z: 1.5 },
    rotation: { x: 0.6, y: 3, z: 0.4 },
    scale: 0.7,
  },
  // {
  //   at: 0.4,
  //   position: { x: 3, y: 0.2, z: 2 },
  //   rotation: { x: 0, y: Math.PI, z: 0 },
  //   scale: 0.9,
  // },

  // ============================================
  // EXPERIENCE (40% - 60%)
  // HTML: CENTERED content
  // Drink: Swings to LEFT, continues rotation
  // ============================================
  {
    at: 0.5,
    position: { x: 0, y: -2, z: 1 },
    rotation: { x: 0, y: Math.PI * 1.5, z: 0 },
    scale: 0.8,
  },
  // {
  //   at: 0.6,
  //   position: { x: -4, y: 0, z: 1.5 },
  //   rotation: { x: 0, y: Math.PI * 2, z: 0 },
  //   scale: 0.6,
  // },

  // ============================================
  // FLAVORS (60% - 80%)
  // HTML: Content on RIGHT
  // Drink: LEFT side, showcase position, full 360° complete
  // ============================================
  {
    at: 0.65,
    position: { x: -0.8, y: -1.5, z: 2 },
    rotation: { x: 0, y: Math.PI * 2.25, z: 0 },
    scale: 0.7,
  },
  {
    at: 0.8,
    position: { x: -1.3, y: 0.3, z: 2 },
    rotation: { x: 0, y: 0.5, z: 0 },
    scale: 0.7,
  },

  // ============================================
  // CTA (80% - 100%)
  // HTML: CENTERED
  // Drink: Exits upward smoothly
  // ============================================
  {
    at: 0.9,
    position: { x: -2, y: 4, z: 0 },
    rotation: { x: 0, y: Math.PI * 3, z: 0 },
    scale: 1,
  },
  {
    at: 1.0,
    position: { x: 0, y: 6, z: -1 },
    rotation: { x: 0, y: Math.PI * 3.5, z: 0 },
    scale: 0.8,
  },
];
