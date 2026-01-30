import { Pose } from '../types';
import { ResponsivePoses } from './responsive';

const DRINK_POSES_DESKTOP: Pose[] = [
  {
    at: 0,
    position: { x: 4, y: -0.3, z: 1 },
    rotation: { x: 0, y: -0.4, z: 0 },
    scale: 1,
  },
  {
    at: 0.25,
    position: { x: 1.5, y: -0.3, z: 1.5 },
    rotation: { x: 0.6, y: 3, z: 0.4 },
    scale: 0.7,
  },
  {
    at: 0.5,
    position: { x: 0.01, y: -2.8, z: 1.0 },
    rotation: { x: 0.02, y: -0.01, z: 0.01 },
    scale: 0.8,
  },
  {
    at: 0.75,
    position: { x: -1.19, y: -0.1, z: 2.0 },
    rotation: { x: 3.12, y: -0.53, z: 3.09 },
    scale: 0.7,
  },
  {
    at: 1.0,
    position: { x: -0.05, y: 2.69, z: -1.46 },
    rotation: { x: 0.17, y: -0.17, z: -1.58 },
    scale: 0.8,
  },
];

const DRINK_POSES_MOBILE: Pose[] = [
  {
    at: 0,
    position: { x: 0, y: 0, z: 2 },
    rotation: { x: 0.1, y: -0.3, z: 0 },
    scale: 0.75,
  },
  {
    at: 0.25,
    position: { x: 0.04, y: -2.36, z: 2.02 },
    rotation: { x: 0.4, y: 2.5, z: 0.2 },
    scale: 0.78,
  },
  {
    at: 0.5,
    position: { x: 0.06, y: -0.22, z: 1.94 },
    rotation: { x: 0.03, y: -0.08, z: -0.02 },
    scale: 0.6,
  },
  {
    at: 0.75,
    position: { x: 0.04, y: -2.47, z: 2.35 },
    rotation: { x: 0.0, y: 0.06, z: 0.0 },
    scale: 0.8,
  },
  {
    at: 1.0,
    position: { x: 0, y: 4, z: 0 },
    rotation: { x: 0, y: Math.PI * 3.5, z: 0 },
    scale: 0.6,
  },
];

const DRINK_POSES_TABLET: Pose[] = [
  {
    at: 0,
    position: { x: 2.5, y: -0.5, z: 1.5 },
    rotation: { x: 0, y: -0.4, z: 0 },
    scale: 0.85,
  },
  {
    at: 0.25,
    position: { x: 0.26, y: -1.88, z: 1.58 },
    rotation: { x: 0.5, y: 3.0, z: 0.3 },
    scale: 0.6,
  },
  {
    at: 0.5,
    position: { x: 0.17, y: -2.96, z: 1.52 },
    rotation: { x: 0.06, y: 0.08, z: 0.0 },
    scale: 0.7,
  },
  {
    at: 0.75,
    position: { x: 1.22, y: -1.77, z: 2.06 },
    rotation: { x: -0.0, y: -0.07, z: -0.03 },
    scale: 0.6,
  },
  {
    at: 1.0,
    position: { x: 0, y: 3.8, z: -0.5 },
    rotation: { x: 0, y: Math.PI * 3.5, z: 0 },
    scale: 0.7,
  },
];

export const DRINK_POSES_RESPONSIVE: ResponsivePoses = {
  desktop: DRINK_POSES_DESKTOP,
  tablet: DRINK_POSES_TABLET,
  mobile: DRINK_POSES_MOBILE,
};

export const DRINK_POSES = DRINK_POSES_DESKTOP;
