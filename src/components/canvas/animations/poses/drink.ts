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
    at: 0.2,
    position: { x: 1.5, y: -0.3, z: 1.5 },
    rotation: { x: 0.6, y: 3, z: 0.4 },
    scale: 0.7,
  },
  {
    at: 0.5,
    position: { x: 0, y: -2, z: 1 },
    rotation: { x: 0, y: Math.PI * 1.5, z: 0 },
    scale: 0.8,
  },
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

const DRINK_POSES_MOBILE: Pose[] = [
  {
    at: 0,
    position: { x: 0, y: 0, z: 2 },
    rotation: { x: 0.1, y: -0.3, z: 0 },
    scale: 0.75,
  },
  {
    at: 0.2,
    position: { x: 0.3, y: 0, z: 2 },
    rotation: { x: 0.4, y: 2.5, z: 0.2 },
    scale: 0.55,
  },
  {
    at: 0.5,
    position: { x: 0, y: -2.5, z: 2 },
    rotation: { x: 0, y: Math.PI * 1.5, z: 0 },
    scale: 0.6,
  },
  {
    at: 0.65,
    position: { x: 0, y: -2, z: 2.5 },
    rotation: { x: 0, y: Math.PI * 2.25, z: 0 },
    scale: 0.55,
  },
  {
    at: 0.8,
    position: { x: 0, y: -1.5, z: 2.5 },
    rotation: { x: 0, y: 0.5, z: 0 },
    scale: 0.55,
  },
  {
    at: 0.9,
    position: { x: 0, y: 3, z: 1 },
    rotation: { x: 0, y: Math.PI * 3, z: 0 },
    scale: 0.7,
  },
  {
    at: 1.0,
    position: { x: 0, y: 5, z: 0 },
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
    at: 0.2,
    position: { x: 1, y: -0.4, z: 1.5 },
    rotation: { x: 0.5, y: 3, z: 0.3 },
    scale: 0.6,
  },
  {
    at: 0.5,
    position: { x: 0, y: -2.2, z: 1.5 },
    rotation: { x: 0, y: Math.PI * 1.5, z: 0 },
    scale: 0.7,
  },
  {
    at: 0.65,
    position: { x: -0.5, y: -1.7, z: 2 },
    rotation: { x: 0, y: Math.PI * 2.25, z: 0 },
    scale: 0.6,
  },
  {
    at: 0.8,
    position: { x: -0.8, y: 0, z: 2 },
    rotation: { x: 0, y: 0.5, z: 0 },
    scale: 0.6,
  },
  {
    at: 0.9,
    position: { x: -1, y: 3.5, z: 0.5 },
    rotation: { x: 0, y: Math.PI * 3, z: 0 },
    scale: 0.85,
  },
  {
    at: 1.0,
    position: { x: 0, y: 5.5, z: -0.5 },
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
