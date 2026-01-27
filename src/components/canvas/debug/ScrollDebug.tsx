'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { useControls, folder, button } from 'leva';

type ScrollDebugProps = {
  targetRef: React.RefObject<THREE.Object3D>;
  name?: string;
};

const ScrollDebug: React.FC<ScrollDebugProps> = ({
  targetRef,
  name = 'Object',
}) => {
  const scroll = useScroll();
  const scrollRef = useRef(0);
  const sectionRef = useRef('Hero');

  const position = useControls(name, {
    Position: folder({
      x: { value: 0, min: -10, max: 10, step: 0.1 },
      y: { value: 0, min: -10, max: 10, step: 0.1 },
      z: { value: 0, min: -10, max: 10, step: 0.1 },
    }),
    Rotation: folder({
      rotX: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
      rotY: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
      rotZ: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
    }),
    Scale: folder({
      scale: { value: 1, min: 0.1, max: 5, step: 0.1 },
    }),
    'Copy Pose': button(() => {
      if (!targetRef.current) return;
      const { x, y, z } = targetRef.current.position;
      const rot = targetRef.current.rotation;
      const s = targetRef.current.scale.x;

      const pose = `{
  at: ${scrollRef.current.toFixed(2)},
  position: { x: ${x.toFixed(1)}, y: ${y.toFixed(1)}, z: ${z.toFixed(1)} },
  rotation: { x: ${rot.x.toFixed(2)}, y: ${rot.y.toFixed(2)}, z: ${rot.z.toFixed(2)} },
  scale: ${s.toFixed(1)},
},`;

      navigator.clipboard.writeText(pose);
      console.log('Copied pose:\n', pose);
    }),
  });

  const [scrollControls, setScrollControls] = useControls('Scroll', () => ({
    progress: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.01,
    },
    section: {
      value: 'Hero',
      editable: false,
    },
  }));

  useEffect(() => {
    if (!targetRef.current) return;

    targetRef.current.position.set(position.x, position.y, position.z);
    targetRef.current.rotation.set(position.rotX, position.rotY, position.rotZ);
    targetRef.current.scale.setScalar(position.scale);
  }, [position, targetRef]);

  useFrame(() => {
    const progress = scroll.offset;
    scrollRef.current = progress;

    let section = 'Hero';
    if (progress >= 0.8) section = 'CTA';
    else if (progress >= 0.6) section = 'Flavors';
    else if (progress >= 0.4) section = 'Experience';
    else if (progress >= 0.2) section = 'Ingredients';

    if (
      Math.abs(progress - scrollControls.progress) > 0.005 ||
      section !== sectionRef.current
    ) {
      sectionRef.current = section;
      setScrollControls({ progress, section });
    }
  });

  return null;
};

export default ScrollDebug;
