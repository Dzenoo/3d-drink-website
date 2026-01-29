import { Pose } from '../types';
import { ResponsivePoses } from './responsive';

const STRAWBERRY_LEFT_POSES_DESKTOP: Pose[] = [
  {
    at: 0,
    position: { x: -3.5, y: -1.5, z: -2 },
    rotation: { x: 0, y: 0, z: 0.5 },
    scale: 1.2,
  },
  {
    at: 0.2,
    position: { x: 0.2, y: -1, z: -4.5 },
    rotation: { x: 0, y: 0, z: 0.8 },
    scale: 1,
  },
  {
    at: 0.4,
    position: { x: -2.9, y: -0.5, z: 0.4 },
    rotation: { x: 0, y: 0, z: -0.4 },
    scale: 1.2,
  },
  {
    at: 0.6,
    position: { x: -3.1, y: -0.5, z: -0.5 },
    rotation: { x: 0, y: 0, z: 0.4 },
    scale: 0.5,
  },
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

const STRAWBERRY_RIGHT_POSES_DESKTOP: Pose[] = [
  {
    at: 0,
    position: { x: 4, y: 0.5, z: -1.5 },
    rotation: { x: 0, y: 0, z: -0.5 },
    scale: 1,
  },
  {
    at: 0.2,
    position: { x: 5, y: 1, z: -1 },
    rotation: { x: 0, y: 0, z: 1.5 },
    scale: 1.4,
  },
  {
    at: 0.4,
    position: { x: 4, y: 0.5, z: -0.5 },
    rotation: { x: 0, y: 0, z: -3 },
    scale: 1.2,
  },
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

const STRAWBERRY_TOP_POSES_DESKTOP: Pose[] = [
  {
    at: 0,
    position: { x: 1, y: 2, z: -2 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.25 },
    scale: 0.7,
  },
  {
    at: 0.2,
    position: { x: 2, y: 1.5, z: -1.5 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.4 },
    scale: 1,
  },
  {
    at: 0.4,
    position: { x: -1, y: 2, z: -1 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.6 },
    scale: 0.6,
  },
  {
    at: 0.6,
    position: { x: -2, y: 1.5, z: -0.5 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.8 },
    scale: 1.3,
  },
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
    position: { x: -3.23, y: 3.05, z: -2.14 },
    rotation: { x: 0, y: 0, z: 0.75 },
    scale: 1.2,
  },
];

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
    position: { x: 3.37, y: 3.66, z: -3.82 },
    rotation: { x: 0, y: 0, z: 1.9 },
    scale: 0.85,
  },
];

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
    position: { x: -1.94, y: 5, z: -6.38 },
    rotation: { x: 0, y: 0, z: Math.PI * 1.2 },
    scale: 0.65,
  },
];

const STRAWBERRY_LEFT_POSES_MOBILE: Pose[] = [
  {
    at: 0,
    position: { x: -1.5, y: -2, z: -1 },
    rotation: { x: 0, y: 0, z: 0.5 },
    scale: 0.8,
  },
  {
    at: 0.1,
    position: { x: -1.59, y: -1.64, z: -0.96 },
    rotation: { x: 0.0, y: 0.0, z: 0.51 },
    scale: 0.81,
  },
  {
    at: 0.2,
    position: { x: -1.5, y: -4.5, z: -2 },
    rotation: { x: 0, y: 0, z: 0.8 },
    scale: 0.7,
  },
  {
    at: 0.4,
    position: { x: -2.1, y: -2.88, z: 1.65 },
    rotation: { x: 0, y: 0, z: -0.4 },
    scale: 0.8,
  },
  {
    at: 0.5,
    position: { x: -2.4, y: -2.88, z: -0.8 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.3 },
  },
  {
    at: 0.6,
    position: { x: -2.8, y: -2.88, z: -0.8 },
    rotation: { x: 0, y: 0, z: 0.4 },
    scale: 0.4,
  },
  {
    at: 0.8,
    position: { x: -1.38, y: -1.65, z: 1.44 },
    rotation: { x: 0, y: 0, z: -2 },
    scale: 0.6,
  },
  {
    at: 1,
    position: { x: -1.87, y: 2.85, z: -1.19 },
    rotation: { x: 0, y: 0, z: -2 },
    scale: 0.6,
  },
];

const STRAWBERRY_RIGHT_POSES_MOBILE: Pose[] = [
  {
    at: 0,
    position: { x: 1.5, y: 0.8, z: -1 },
    rotation: { x: 0, y: 0, z: -0.5 },
    scale: 0.7,
  },
  {
    at: 0.2,
    position: { x: 1.8, y: -4.5, z: -0.8 },
    rotation: { x: 0, y: 0, z: 1.5 },
    scale: 0.9,
  },
  {
    at: 0.4,
    position: { x: 2.23, y: -2.16, z: -0.39 },
    rotation: { x: 0, y: 0, z: -3 },
    scale: 0.8,
  },
  {
    at: 0.5,
    position: { x: 2.23, y: -2.16, z: -0.8 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.9 },
  },
  {
    at: 0.7,
    position: { x: 2.7, y: -2.16, z: -3 },
    rotation: { x: 0, y: 0, z: 1.1 },
    scale: 0.5,
  },
  {
    at: 0.9,
    position: { x: 1.82, y: -0.3, z: -1.57 },
    rotation: { x: 0, y: 0, z: 0.5 },
    scale: 0.5,
  },
  {
    at: 1.0,
    position: { x: 1.73, y: 2.14, z: 3.45 },
    rotation: { x: 0, y: 0, z: 1.9 },
    scale: 0.7,
  },
];

const STRAWBERRY_TOP_POSES_MOBILE: Pose[] = [
  {
    at: 0,
    position: { x: 0.5, y: 1.8, z: -1 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.25 },
    scale: 0.5,
  },
  {
    at: 0.1,
    position: { x: -0.69, y: 0.31, z: 0.5 },
    rotation: { x: 0.0, y: 0.0, z: 1.21 },
    scale: 0.75,
  },
  {
    at: 0.2,
    position: { x: 0, y: -3.5, z: -1 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.4 },
    scale: 0.7,
  },
  {
    at: 0.4,
    position: { x: -1.9, y: -0.2, z: -0.8 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.9 },
    scale: 0.65,
  },
  {
    at: 0.5,
    position: { x: -1.9, y: -0.2, z: -0.8 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.6 },
  },
  {
    at: 0.6,
    position: { x: -2.8, y: -0.2, z: -0.5 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.8 },
    scale: 0.9,
  },
  {
    at: 0.8,
    position: { x: 1.31, y: -0.99, z: -1.49 },
    rotation: { x: 0, y: 0, z: Math.PI },
    scale: 0.7,
  },
  {
    at: 1.0,
    position: { x: -0.86, y: 3.34, z: 3.07 },
    rotation: { x: 0, y: 0, z: Math.PI * 1.2 },
    scale: 0.55,
  },
];

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

export const STRAWBERRY_LEFT_POSES = STRAWBERRY_LEFT_POSES_DESKTOP;
export const STRAWBERRY_RIGHT_POSES = STRAWBERRY_RIGHT_POSES_DESKTOP;
export const STRAWBERRY_TOP_POSES = STRAWBERRY_TOP_POSES_DESKTOP;
