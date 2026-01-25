"use client";

import { useZoomLevel } from "@/hooks/useZoomLevel";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const isZoomedOut = useZoomLevel();

  return (
    <main
      className={`w-screen h-screen ${isZoomedOut ? "m-auto max-w-screen-2xl" : ""}`}
    >
      {children}
    </main>
  );
};

export default LayoutWrapper;
