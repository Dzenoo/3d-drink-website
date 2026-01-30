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
    at: 0.25,
    position: { x: 0.2, y: -1, z: -4.5 },
    rotation: { x: 0, y: 0, z: 0.8 },
    scale: 1,
  },
  {
    at: 0.5,
    position: { x: -2.9, y: -0.5, z: 0.4 },
    rotation: { x: 0, y: 0, z: -0.4 },
    scale: 1.2,
  },
  {
    at: 0.75,
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
    at: 0.25,
    position: { x: 5, y: 1, z: -1 },
    rotation: { x: 0, y: 0, z: 1.5 },
    scale: 1.4,
  },
  {
    at: 0.5,
    position: { x: 3, y: -0.5, z: -2.5 },
    rotation: { x: 0, y: 0, z: 1.1 },
    scale: 1,
  },
  {
    at: 0.75,
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
    at: 0.25,
    position: { x: 2, y: 1.5, z: -1.5 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.4 },
    scale: 1,
  },
  {
    at: 0.5,
    position: { x: -2, y: 1.5, z: -0.5 },
    rotation: { x: 0, y: 0, z: Math.PI * 0.8 },
    scale: 1.3,
  },
  {
    at: 0.75,
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
    at: 0.25,
    position: { x: -3.21, y: -3.56, z: -2.85 },
    rotation: { x: 0.0, y: 0.0, z: 0.8 },
    scale: 0.85,
  },
  {
    at: 0.5,
    position: { x: -3.11, y: -0.86, z: -0.47 },
    rotation: { x: 0.0, y: 0.0, z: 0.4 },
    scale: 0.6,
  },
  {
    at: 0.75,
    position: { x: -2.82, y: -2.9, z: -1.5 },
    rotation: { x: 0.0, y: 0.0, z: -2.0 },
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
    at: 0.25,
    position: { x: 3.17, y: -2.58, z: -0.81 },
    rotation: { x: 0.0, y: 0.0, z: 1.5 },
    scale: 1.1,
  },
  {
    at: 0.5,
    position: { x: 3.31, y: -0.55, z: -2.02 },
    rotation: { x: 0.0, y: 0.0, z: 1.1 },
    scale: 0.85,
  },
  {
    at: 0.75,
    position: { x: 3.25, y: -1.71, z: -0.89 },
    rotation: { x: 0.0, y: 0.0, z: 0.5 },
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
    at: 0.25,
    position: { x: -1.34, y: -1.73, z: -1.29 },
    rotation: { x: 0.0, y: 0.0, z: 1.26 },
    scale: 0.85,
  },
  {
    at: 0.5,
    position: { x: -1.56, y: 1.9, z: 0.5 },
    rotation: { x: 0.0, y: 0.0, z: 1.88 },
    scale: 0.65,
  },
  {
    at: 0.75,
    position: { x: 0.06, y: 2.69, z: -1.19 },
    rotation: { x: 0.0, y: 0.0, z: 3.14 },
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
    at: 0.25,
    position: { x: -1.99, y: -3.17, z: -1.52 },
    rotation: { x: 0.0, y: 0.0, z: 0.65 },
    scale: 0.71,
  },
  {
    at: 0.5,
    position: { x: -1.48, y: -0.57, z: 6.27 },
    rotation: { x: 0.0, y: 0.0, z: 0.94 },
    scale: 0.71,
  },
  {
    at: 0.75,
    position: { x: -1.78, y: -2.82, z: 1.42 },
    rotation: { x: 0.0, y: 0.0, z: -2.0 },
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
    at: 0.25,
    position: { x: 1.87, y: -2.55, z: -0.74 },
    rotation: { x: 0.0, y: 0.0, z: 0.93 },
    scale: 0.89,
  },
  {
    at: 0.5,
    position: { x: 2.23, y: 0.04, z: -0.83 },
    rotation: { x: 0.0, y: 0.0, z: 2.83 },
    scale: 0.89,
  },
  {
    at: 0.75,
    position: { x: 1.96, y: -3.57, z: -2.78 },
    rotation: { x: 0.0, y: 0.0, z: 1.1 },
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
    at: 0.25,
    position: { x: -0.0, y: -1.09, z: -0.98 },
    rotation: { x: 0.0, y: 0.0, z: 1.26 },
    scale: 0.7,
  },
  {
    at: 0.5,
    position: { x: -2.04, y: 2.48, z: -0.84 },
    rotation: { x: 0.0, y: 0.0, z: 1.88 },
    scale: 0.7,
  },
  {
    at: 0.75,
    position: { x: -1.31, y: -2.24, z: -1.44 },
    rotation: { x: 0.0, y: 0.0, z: 3.14 },
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
