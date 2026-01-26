import { Pose } from "../types";
import { ResponsivePoses } from "./responsive";

// ============================================
// LEFT STRAWBERRY - Desktop
// ============================================
const STRAWBERRY_LEFT_POSES_DESKTOP: Pose[] = [
  // HERO - Bottom left corner, subtle
  {
    at: 0,
    position: { x: -3.5, y: -1.5, z: -2 },
    rotation: { x: 0, y: 0, z: 0.5 },
    scale: 1.2,
  },
  // INGREDIENTS - Move up and left (text is left, we stay far left)
  {
    at: 0.2,
    position: { x: 0.2, y: -1, z: -4.5 },
    rotation: { x: 0, y: 0, z: 0.8 },
    scale: 1,
  },
  // EXPERIENCE - Center section, move to left edge
  {
    at: 0.4,
    position: { x: -2.9, y: -0.5, z: 0.4 },
    rotation: { x: 0, y: 0, z: -0.4 },
    scale: 1.2,
  },
  // FLAVORS - Text right, strawberry prominent on left with drink
  {
    at: 0.6,
    position: { x: -3.1, y: -0.5, z: -0.5 },
    rotation: { x: 0, y: 0, z: 0.4 },
    scale: 0.5,
  },
  // CTA - Fade back
  {
    at: 0.8,
    position: { x: -4, y: -1, z: -2 },
    rotation: { x: 0, y: 0, z: -2 },
    scale: 0.8,
  },
  {
    at: 1.0,
    position: { x: -3.5, y: -1, z: -3 },
    rotation: { x: 0, y: 0, z: 0.75 },
    scale: 1.5,
  },
];

// LEFT STRAWBERRY - Mobile (reduced horizontal range)
const STRAWBERRY_LEFT_POSES_MOBILE: Pose[] = [
  {
    at: 0,
    position: { x: -1.5, y: -2, z: -1 },
    rotation: { x: 0, y: 0, z: 0.5 },
    scale: 0.8,
  },
  {
    at: 0.2,
    position: { x: -0.5, y: -1.5, z: -2 },
    rotation: { x: 0, y: 0, z: 0.8 },
    scale: 0.7,
  },
  {
    at: 0.4,
    position: { x: -1.2, y: -0.8, z: -0.5 },
    rotation: { x: 0, y: 0, z: -0.4 },
    scale: 0.8,
  },
  {
    at: 0.6,
    position: { x: -1.3, y: -0.8, z: -0.8 },
    rotation: { x: 0, y: 0, z: 0.4 },
    scale: 0.4,
  },
  {
    at: 0.8,
    position: { x: -1.5, y: -1.2, z: -1 },
    rotation: { x: 0, y: 0, z: -2 },
    scale: 0.6,
  },
  {
    at: 1.0,
    position: { x: -1.2, y: -1.2, z: -1.5 },
    rotation: { x: 0, y: 0, z: 0.75 },
    scale: 1,
  },
];

// LEFT STRAWBERRY - Tablet
const STRAWBERRY_LEFT_POSES_TABLET: Pose[] = [
  {
    at: 0,
    position: { x: -2.5, y: -1.5, z: -1.5 },
    rotation: { x: 0, y: 0, z: 0.5 },
    scale: 1,
  },
  {
    at: 0.2,
    position: { x: 0, y: -1, z: -3 },
    rotation: { x: 0, y: 0, z: 0.8 },
    scale: 0.85,
  },
  {
    at: 0.4,
    position: { x: -2, y: -0.5, z: 0 },
    rotation: { x: 0, y: 0, z: -0.4 },
    scale: 1,
  },
  {
    at: 0.6,
    position: { x: -2.2, y: -0.5, z: -0.5 },
    rotation: { x: 0, y: 0, z: 0.4 },
    scale: 0.45,
  },
  {
    at: 0.8,
    position: { x: -2.8, y: -1, z: -1.5 },
    rotation: { x: 0, y: 0, z: -2 },
    scale: 0.7,
  },
  {
    at: 1.0,
    position: { x: -2.5, y: -1, z: -2 },
    rotation: { x: 0, y: 0, z: 0.75 },
    scale: 1.2,
  },
];

// ============================================
// RIGHT STRAWBERRY - Desktop
// ============================================
const STRAWBERRY_RIGHT_POSES_DESKTOP: Pose[] = [
  // HERO - Near drink on right
  {
    at: 0,
    position: { x: 4, y: 0.5, z: -1.5 },
    rotation: { x: 0, y: 0, z: -0.5 },
    scale: 1,
  },
  // INGREDIENTS - Stay right with drink
  {
    at: 0.2,
    position: { x: 5, y: 1, z: -1 },
    rotation: { x: 0, y: 0, z: 1.5 },
    scale: 1.4,
  },
  // EXPERIENCE - Move to right (drink goes left)
  {
    at: 0.4,
    position: { x: 4, y: 0.5, z: -0.5 },
    rotation: { x: 0, y: 0, z: -3 },
    scale: 1.2,
  },
  // FLAVORS - Move right (drink is left)
  {
    at: 0.5,
    position: { x: 3, y: -0.5, z: -2.5 },
    rotation: { x: 0, y: 0, z: 1.1 },
    scale: 1,
  },
  {
    at: 0.7,
    position: { x: -1, y: -0.5, z: -6.5 },
    rotation: { x: 0, y: 0, z: 1.1 },
    scale: 0.7,
  },
  // CTA - Center fade
  {
    at: 0.9,
    position: { x: 1, y: 0.1, z: -1 },
    rotation: { x: 0, y: 0, z: 0.5 },
    scale: 0.7,
  },
  {
    at: 1.0,
    position: { x: 4, y: 0.5, z: -1.5 },
    rotation: { x: 0, y: 0, z: 1.9 },
    scale: 1,
  },
];

// RIGHT STRAWBERRY - Mobile
const STRAWBERRY_RIGHT_POSES_MOBILE: Pose[] = [
  {
    at: 0,
    position: { x: 1.5, y: 0.8, z: -1 },
    rotation: { x: 0, y: 0, z: -0.5 },
    scale: 0.7,
  },
  {
    at: 0.2,
    position: { x: 1.8, y: 1.2, z: -0.8 },
    rotation: { x: 0, y: 0, z: 1.5 },
    scale: 0.9,
  },
  {
    at: 0.4,
    position: { x: 1.5, y: 0.8, z: -0.5 },
    rotation: { x: 0, y: 0, z: -3 },
    scale: 0.8,
  },
  {
    at: 0.5,
    position: { x: 1.2, y: -0.3, z: -1.5 },
    rotation: { x: 0, y: 0, z: 1.1 },
    scale: 0.7,
  },
  {
    at: 0.7,
    position: { x: -0.3, y: -0.5, z: -3 },
    rotation: { x: 0, y: 0, z: 1.1 },
    scale: 0.5,
  },
  {
    at: 0.9,
    position: { x: 0.5, y: 0.3, z: -0.8 },
    rotation: { x: 0, y: 0, z: 0.5 },
    scale: 0.5,
  },
  {
    at: 1.0,
    position: { x: 1.5, y: 0.8, z: -1 },
    rotation: { x: 0, y: 0, z: 1.9 },
    scale: 0.7,
  },
];

// RIGHT STRAWBERRY - Tablet
const STRAWBERRY_RIGHT_POSES_TABLET: Pose[] = [
  {
    at: 0,
    position: { x: 2.8, y: 0.5, z: -1.2 },
    rotation: { x: 0, y: 0, z: -0.5 },
    scale: 0.85,
  },
  {
    at: 0.2,
    position: { x: 3.5, y: 1, z: -0.8 },
    rotation: { x: 0, y: 0, z: 1.5 },
    scale: 1.1,
  },
  {
    at: 0.4,
    position: { x: 2.8, y: 0.5, z: -0.4 },
    rotation: { x: 0, y: 0, z: -3 },
    scale: 1,
  },
  {
    at: 0.5,
    position: { x: 2.2, y: -0.4, z: -2 },
    rotation: { x: 0, y: 0, z: 1.1 },
    scale: 0.85,
  },
  {
    at: 0.7,
    position: { x: -0.5, y: -0.5, z: -5 },
    rotation: { x: 0, y: 0, z: 1.1 },
    scale: 0.6,
  },
  {
    at: 0.9,
    position: { x: 0.8, y: 0.1, z: -0.8 },
    rotation: { x: 0, y: 0, z: 0.5 },
    scale: 0.6,
  },
  {
    at: 1.0,
    position: { x: 2.8, y: 0.5, z: -1.2 },
    rotation: { x: 0, y: 0, z: 1.9 },
    scale: 0.85,
  },
];

// ============================================
// TOP STRAWBERRY - Desktop
// ============================================
const STRAWBERRY_TOP_POSES_DESKTOP: Pose[] = [
  // HERO - Top area, floating
  {
    at: 0,
    position: { x: 1, y: 2, z: -2 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.25 },
    scale: 0.7,
  },
  // INGREDIENTS - Float toward right
  {
    at: 0.2,
    position: { x: 2, y: 1.5, z: -1.5 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.4 },
    scale: 1,
  },
  // EXPERIENCE - Move left with drink
  {
    at: 0.4,
    position: { x: -1, y: 2, z: -1 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.6 },
    scale: 0.6,
  },
  // FLAVORS - Stay left area
  {
    at: 0.6,
    position: { x: -2, y: 1.5, z: -0.5 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.8 },
    scale: 1.3,
  },
  // CTA - Float to center top
  {
    at: 0.8,
    position: { x: 0, y: 2, z: -1.5 },
    rotation: { x: 0, y: 0, z: Math.PI },
    scale: 1,
  },
  {
    at: 1.0,
    position: { x: -2.5, y: 1.5, z: -2.5 },
    rotation: { x: 0, y: 0, z: Math.PI * 1.2 },
    scale: 0.8,
  },
];

// TOP STRAWBERRY - Mobile
const STRAWBERRY_TOP_POSES_MOBILE: Pose[] = [
  {
    at: 0,
    position: { x: 0.5, y: 1.8, z: -1 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.25 },
    scale: 0.5,
  },
  {
    at: 0.2,
    position: { x: 0.8, y: 1.5, z: -1 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.4 },
    scale: 0.7,
  },
  {
    at: 0.4,
    position: { x: -0.4, y: 1.8, z: -0.8 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.6 },
    scale: 0.45,
  },
  {
    at: 0.6,
    position: { x: -0.8, y: 1.5, z: -0.5 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.8 },
    scale: 0.9,
  },
  {
    at: 0.8,
    position: { x: 0, y: 1.8, z: -1 },
    rotation: { x: 0, y: 0, z: Math.PI },
    scale: 0.7,
  },
  {
    at: 1.0,
    position: { x: -1, y: 1.5, z: -1.5 },
    rotation: { x: 0, y: 0, z: Math.PI * 1.2 },
    scale: 0.55,
  },
];

// TOP STRAWBERRY - Tablet
const STRAWBERRY_TOP_POSES_TABLET: Pose[] = [
  {
    at: 0,
    position: { x: 0.8, y: 2, z: -1.5 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.25 },
    scale: 0.6,
  },
  {
    at: 0.2,
    position: { x: 1.5, y: 1.5, z: -1.2 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.4 },
    scale: 0.85,
  },
  {
    at: 0.4,
    position: { x: -0.7, y: 2, z: -0.8 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.6 },
    scale: 0.5,
  },
  {
    at: 0.6,
    position: { x: -1.4, y: 1.5, z: -0.4 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.8 },
    scale: 1.1,
  },
  {
    at: 0.8,
    position: { x: 0, y: 2, z: -1.2 },
    rotation: { x: 0, y: 0, z: Math.PI },
    scale: 0.85,
  },
  {
    at: 1.0,
    position: { x: -1.8, y: 1.5, z: -2 },
    rotation: { x: 0, y: 0, z: Math.PI * 1.2 },
    scale: 0.65,
  },
];

// ============================================
// RESPONSIVE EXPORTS
// ============================================
export const STRAWBERRY_LEFT_POSES_RESPONSIVE: ResponsivePoses = {
  desktop: STRAWBERRY_LEFT_POSES_DESKTOP,
  tablet: STRAWBERRY_LEFT_POSES_TABLET,
  mobile: STRAWBERRY_LEFT_POSES_MOBILE,
};

export const STRAWBERRY_RIGHT_POSES_RESPONSIVE: ResponsivePoses = {
  desktop: STRAWBERRY_RIGHT_POSES_DESKTOP,
  tablet: STRAWBERRY_RIGHT_POSES_TABLET,
  mobile: STRAWBERRY_RIGHT_POSES_MOBILE,
};

export const STRAWBERRY_TOP_POSES_RESPONSIVE: ResponsivePoses = {
  desktop: STRAWBERRY_TOP_POSES_DESKTOP,
  tablet: STRAWBERRY_TOP_POSES_TABLET,
  mobile: STRAWBERRY_TOP_POSES_MOBILE,
};

// Backwards compatibility exports
export const STRAWBERRY_LEFT_POSES = STRAWBERRY_LEFT_POSES_DESKTOP;
export const STRAWBERRY_RIGHT_POSES = STRAWBERRY_RIGHT_POSES_DESKTOP;
export const STRAWBERRY_TOP_POSES = STRAWBERRY_TOP_POSES_DESKTOP;
