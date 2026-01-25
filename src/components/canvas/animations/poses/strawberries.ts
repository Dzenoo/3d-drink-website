import { Pose } from "../types";

// ============================================
// STRAWBERRY LEFT - Decorative accent
// Moves opposite to drink, adds depth
// ============================================
export const STRAWBERRY_LEFT_POSES: Pose[] = [
  // HERO - Bottom left corner, subtle
  {
    at: 0,
    position: { x: -3.5, y: -1.5, z: -2 },
    rotation: { x: 0.2, y: 0, z: 0.5 },
    scale: 1.2,
  },
  // INGREDIENTS - Move up and left (text is left, we stay far left)
  {
    at: 0.2,
    position: { x: -0.5, y: -1, z: -1.5 },
    rotation: { x: 0.3, y: 0, z: 0.8 },
    scale: 1,
  },
  // EXPERIENCE - Center section, move to left edge
  {
    at: 0.4,
    position: { x: -4.5, y: 0.5, z: -1 },
    rotation: { x: 0.2, y: 0, z: 1.2 },
    scale: 0.9,
  },
  // FLAVORS - Text right, strawberry prominent on left with drink
  {
    at: 0.6,
    position: { x: -4, y: -0.5, z: -0.5 },
    rotation: { x: 0.1, y: 0, z: 1.5 },
    scale: 1.3,
  },
  // CTA - Fade back
  {
    at: 0.8,
    position: { x: -3, y: -1, z: -2 },
    rotation: { x: 0, y: 0, z: 1.8 },
    scale: 0.8,
  },
  {
    at: 1.0,
    position: { x: -2.5, y: -1.5, z: -3 },
    rotation: { x: 0, y: 0, z: 2 },
    scale: 0.6,
  },
];

// ============================================
// STRAWBERRY RIGHT - Complementary accent
// Stays on opposite side of drink
// ============================================
export const STRAWBERRY_RIGHT_POSES: Pose[] = [
  // HERO - Near drink on right
  {
    at: 0,
    position: { x: 4, y: 0.5, z: -1.5 },
    rotation: { x: 0.3, y: 0, z: -0.5 },
    scale: 1,
  },
  // INGREDIENTS - Stay right with drink
  {
    at: 0.2,
    position: { x: 4.5, y: 1, z: -1 },
    rotation: { x: 0.4, y: 0, z: -0.8 },
    scale: 1.1,
  },
  // EXPERIENCE - Move to right (drink goes left)
  {
    at: 0.4,
    position: { x: 4, y: 0.5, z: -0.5 },
    rotation: { x: 0.2, y: 0, z: -1 },
    scale: 1.2,
  },
  // FLAVORS - Move right (drink is left)
  {
    at: 0.6,
    position: { x: 4.5, y: -0.5, z: -1 },
    rotation: { x: 0.1, y: 0, z: -1.3 },
    scale: 0.9,
  },
  // CTA - Center fade
  {
    at: 0.8,
    position: { x: 3, y: 0, z: -1.5 },
    rotation: { x: 0, y: 0, z: -1.5 },
    scale: 0.7,
  },
  {
    at: 1.0,
    position: { x: 2, y: -1, z: -3 },
    rotation: { x: 0, y: 0, z: -1.8 },
    scale: 0.5,
  },
];

// ============================================
// STRAWBERRY TOP - Floating accent above
// Adds vertical interest and depth
// ============================================
export const STRAWBERRY_TOP_POSES: Pose[] = [
  // HERO - Top area, floating
  {
    at: 0,
    position: { x: 1, y: 2, z: -2 },
    rotation: { x: 0.5, y: 0, z: Math.PI * 0.25 },
    scale: 0.7,
  },
  // INGREDIENTS - Float toward right
  {
    at: 0.2,
    position: { x: 2, y: 2.5, z: -1.5 },
    rotation: { x: 0.6, y: 0, z: Math.PI * 0.4 },
    scale: 0.8,
  },
  // EXPERIENCE - Move left with drink
  {
    at: 0.4,
    position: { x: -1, y: 2, z: -1 },
    rotation: { x: 0.4, y: 0, z: Math.PI * 0.6 },
    scale: 0.6,
  },
  // FLAVORS - Stay left area
  {
    at: 0.6,
    position: { x: -2, y: 1.5, z: -0.5 },
    rotation: { x: 0.3, y: 0, z: Math.PI * 0.8 },
    scale: 0.9,
  },
  // CTA - Float to center top
  {
    at: 0.8,
    position: { x: 0, y: 2, z: -1.5 },
    rotation: { x: 0.2, y: 0, z: Math.PI },
    scale: 0.7,
  },
  {
    at: 1.0,
    position: { x: 0, y: 1.5, z: -2.5 },
    rotation: { x: 0.1, y: 0, z: Math.PI * 1.2 },
    scale: 0.5,
  },
];
