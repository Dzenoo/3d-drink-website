'use client';

import { useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

import { ScrollAnimations } from '../animations';
import DebugTools from '../debug/DebugTools';
import SceneEnvironment from '../setup/SceneEnvironment';
import CameraRig from '../camera/CameraRig';
import { getCameraConfig } from '../camera/cameraConfig';
import HomeModels, { useHomeModels } from './HomeModels';
import HomeOverlay from '@/components/pages/home/HomeOverlay';
import LoadingScreen from '@/components/shared/LoadingScreen';
import {
  DEBUG_MODE,
  SCROLL_MODE,
  SCROLL_SECTIONS,
  SNAP_SCROLL_CONFIG,
} from '@/constants';
import { useResponsive } from '@/hooks/useResponsive';
import { useSnapScroll } from '@/hooks/useSnapScroll';

function SceneContent() {
  const [paused, setPaused] = useState(false);
  const [debugProgress, setDebugProgress] = useState<number | undefined>(
    undefined,
  );
  const onPauseChange = useCallback((p: boolean) => setPaused(p), []);
  const onProgressChange = useCallback(
    (p: number | undefined) => setDebugProgress(p),
    [],
  );

  const responsive = useResponsive();
  const config = getCameraConfig(responsive);
  const { refs, poses } = useHomeModels();

  useSnapScroll({
    sections: SCROLL_SECTIONS,
    duration: SNAP_SCROLL_CONFIG.duration,
    ease: SNAP_SCROLL_CONFIG.ease,
    enabled: SCROLL_MODE === 'snap' && !paused && !debugProgress,
  });

  return (
    <>
      {DEBUG_MODE && (
        <>
          <Perf position="top-left" />
          <DebugTools
            objects={refs}
            onPauseChange={onPauseChange}
            onProgressChange={onProgressChange}
          />
        </>
      )}

      <CameraRig
        config={{
          distance: config.distance,
          height: 0,
          lookAt: [0, 0, 0],
          introFrom: { y: -3 },
          introDuration: 1.5,
          debug: paused,
        }}
      >
        <ScrollAnimations
          debug={paused}
          debugProgress={debugProgress}
          objects={[
            { ref: refs.drink, poses: poses.drink },
            { ref: refs.strawberryLeft, poses: poses.strawberryLeft },
            { ref: refs.strawberryRight, poses: poses.strawberryRight },
            { ref: refs.strawberryTop, poses: poses.strawberryTop },
          ]}
        />

        <SceneEnvironment />
        <HomeModels refs={refs} paused={paused} />
        <HomeOverlay />
      </CameraRig>
    </>
  );
}

export default function HomeScene() {
  const responsive = useResponsive();
  const { fov } = getCameraConfig(responsive);

  return (
    <>
      {!DEBUG_MODE && <LoadingScreen />}
      <Canvas
        camera={{ fov }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{
          powerPreference: 'high-performance',
          antialias: !responsive.isMobile,
        }}
      >
        <ScrollControls
          pages={SCROLL_SECTIONS}
          damping={
            SCROLL_MODE === 'snap' ? 0.2 : responsive.isMobile ? 0.2 : 0.5
          }
        >
          <SceneContent />
        </ScrollControls>
      </Canvas>
    </>
  );
}
