'use client';

import { useState, useEffect } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const manager = THREE.DefaultLoadingManager;

    manager.onProgress = (_url, loaded, total) => {
      setProgress((loaded / total) * 100);
    };

    manager.onLoad = () => {
      setProgress(100);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h1 className="text-4xl font-bold uppercase tracking-wider sm:text-5xl">
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              ENERGY
            </span>
          </h1>

          <div className="mt-8 w-48">
            <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-pink-500 to-orange-400"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.3 }}
              />
            </div>
          </div>

          <p className="mt-3 text-xs tracking-widest text-white/40">
            {Math.round(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
