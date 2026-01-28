'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { TransformControls, useScroll } from '@react-three/drei';
import { useControls, button } from 'leva';

type ObjectRefs = Record<string, React.RefObject<THREE.Group>>;

type DebugToolsProps = {
  objects: ObjectRefs;
  onPauseChange: (paused: boolean) => void;
  onProgressChange: (progress: number | undefined) => void;
};

function getSection(progress: number) {
  if (progress >= 0.8) return 'CTA';
  if (progress >= 0.6) return 'Flavors';
  if (progress >= 0.4) return 'Experience';
  if (progress >= 0.2) return 'Ingredients';
  return 'Hero';
}

function copyPose(obj: THREE.Group, scrollProgress: number) {
  const { x, y, z } = obj.position;
  const { x: rx, y: ry, z: rz } = obj.rotation;
  const s = obj.scale.x;

  const pose = `{
  at: ${scrollProgress.toFixed(2)},
  position: { x: ${x.toFixed(2)}, y: ${y.toFixed(2)}, z: ${z.toFixed(2)} },
  rotation: { x: ${rx.toFixed(2)}, y: ${ry.toFixed(2)}, z: ${rz.toFixed(2)} },
  scale: ${s.toFixed(2)},
},`;

  navigator.clipboard.writeText(pose);
  console.log('%c Pose copied! ', 'background: #4CAF50; color: white');
  console.log(pose);
}

export default function DebugTools({
  objects,
  onPauseChange,
  onProgressChange,
}: DebugToolsProps) {
  const scroll = useScroll();
  const transformRef = useRef<any>(null);
  const progressRef = useRef(0);

  const objectKeys = Object.keys(objects);
  const objectOptions = objectKeys.reduce(
    (acc, key) => ({ ...acc, [key]: key }),
    {} as Record<string, string>,
  );

  const [{ selected, mode, paused, scroll: manualScroll }, set] = useControls(
    'Debug',
    () => ({
      paused: { value: false, label: 'Pause' },
      scroll: { value: 0, min: 0, max: 1, step: 0.01, label: 'Scroll' },
      section: { value: 'Hero', editable: false },
      selected: {
        value: objectKeys[0],
        options: objectOptions,
        label: 'Object',
      },
      mode: {
        value: 'translate',
        options: {
          Move: 'translate',
          Rotate: 'rotate',
          Scale: 'scale',
        } as const,
        label: 'Mode',
      },
      'Copy Pose': button(() => {
        const ref = objects[selected];
        if (ref?.current) copyPose(ref.current, progressRef.current);
      }),
    }),
  );

  useEffect(() => {
    onPauseChange(paused);
    onProgressChange(paused ? manualScroll : undefined);
  }, [paused, onPauseChange, onProgressChange]);

  useEffect(() => {
    if (paused) {
      onProgressChange(manualScroll);
      set({ section: getSection(manualScroll) });
      progressRef.current = manualScroll;
    }
  }, [manualScroll, paused, onProgressChange, set]);

  useEffect(() => {
    const controls = transformRef.current;
    if (!controls) return;

    const onDrag = (e: { value: boolean }) => onPauseChange(e.value || paused);
    controls.addEventListener('dragging-changed', onDrag);
    return () => controls.removeEventListener('dragging-changed', onDrag);
  }, [paused, onPauseChange]);

  useFrame(() => {
    if (paused) return;
    progressRef.current = scroll.offset;
    set({ scroll: parseFloat(scroll.offset.toFixed(2)), section: getSection(scroll.offset) });
  });

  const targetRef = objects[selected];
  if (!targetRef?.current) return null;

  return (
    <TransformControls
      ref={transformRef}
      object={targetRef.current}
      mode={mode as 'translate' | 'rotate' | 'scale'}
      size={0.6}
    />
  );
}
