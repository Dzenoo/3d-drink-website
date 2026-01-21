import * as THREE from "three";

export type Pose = {
  at: number;
  position?: { x: number; y: number; z: number };
  rotation?: { x: number; y: number; z: number };
  duration?: number;
  ease?: string;
};

export type CameraConfig = {
  distance?: number;
  height?: number;
  lookAt?: [number, number, number];
  mouseFactor?: number;
  introFrom?: { x?: number; y?: number; z?: number };
  introDuration?: number;
  introEase?: string;
};

export type AnimatedObject = {
  ref: React.RefObject<THREE.Object3D>;
  poses: Pose[];
};

export type AnimationConfig = {
  debug?: boolean;
  camera?: CameraConfig;
  objects?: AnimatedObject[];
};
