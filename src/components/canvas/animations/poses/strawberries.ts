import { Pose } from "../types";

export const STRAWBERRY_LEFT_POSES: Pose[] = [
  {
    at: 0,
    position: { x: 0.2, y: -1, z: -2 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: 1,
  },
  {
    at: 0.25,
    position: { x: -5, y: 0, z: -1 },
    rotation: { x: 0, y: 0, z: 0.5 },
    scale: 1.2,
  },
  {
    at: 0.5,
    position: { x: -3, y: 1, z: 0 },
    rotation: { x: 0, y: 0, z: 1 },
    scale: 0.8,
  },
  {
    at: 0.75,
    position: { x: -4, y: -1, z: -2 },
    rotation: { x: 0, y: 0, z: 1.5 },
    scale: 1,
  },
];

export const STRAWBERRY_RIGHT_POSES: Pose[] = [
  {
    at: 0,
    position: { x: 4, y: -1, z: -2 },
    rotation: { x: 0, y: 0, z: 0.5 },
    scale: 0.8,
  },
  {
    at: 0.25,
    position: { x: 5, y: 1, z: -1 },
    rotation: { x: 0, y: 0, z: 1 },
    scale: 1,
  },
  {
    at: 0.5,
    position: { x: 3, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 1.5 },
    scale: 1.1,
  },
  {
    at: 0.75,
    position: { x: 4, y: -1, z: -2 },
    rotation: { x: 0, y: 0, z: 2 },
    scale: 0.8,
  },
];

export const STRAWBERRY_TOP_POSES: Pose[] = [
  {
    at: 0,
    position: { x: 0.5, y: 1, z: -3 },
    rotation: { x: 0, y: 0, z: Math.PI },
    scale: 0.5,
  },
  {
    at: 0.25,
    position: { x: 1, y: 1.5, z: -2 },
    rotation: { x: 0, y: 0, z: Math.PI + 0.5 },
    scale: 0.6,
  },
  {
    at: 0.5,
    position: { x: -1, y: -1.5, z: -1 },
    rotation: { x: 0, y: 0, z: Math.PI + 1 },
    scale: 0.4,
  },
  {
    at: 0.75,
    position: { x: 2, y: 0.4, z: -3 },
    rotation: { x: 0, y: 0, z: Math.PI + 1.5 },
    scale: 1,
  },
];
