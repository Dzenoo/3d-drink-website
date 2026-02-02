import * as THREE from 'three';

export type Pose = {
  at: number;
  position?: { x: number; y: number; z: number };
  rotation?: { x: number; y: number; z: number };
  scale?: { x: number; y: number; z: number } | number;
  duration?: number;
  ease?: string;
};

export type AnimatedObject = {
  ref: React.RefObject<THREE.Object3D>;
  poses: Pose[];
  name?: string;
};

export type AnimationConfig = {
  debug?: boolean;
  debugProgress?: number;
  objects?: AnimatedObject[];
};
