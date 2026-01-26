"use client";

import { useState, useEffect } from "react";

export type Breakpoint = "mobile" | "tablet" | "desktop";

export interface ResponsiveState {
  breakpoint: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
  isPortrait: boolean;
}

const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
};

function getBreakpoint(width: number): Breakpoint {
  if (width < BREAKPOINTS.mobile) return "mobile";
  if (width < BREAKPOINTS.tablet) return "tablet";
  return "desktop";
}

function getResponsiveState(width: number, height: number): ResponsiveState {
  const breakpoint = getBreakpoint(width);
  return {
    breakpoint,
    isMobile: breakpoint === "mobile",
    isTablet: breakpoint === "tablet",
    isDesktop: breakpoint === "desktop",
    width,
    height,
    isPortrait: height > width,
  };
}

export function useResponsive(): ResponsiveState {
  const [state, setState] = useState<ResponsiveState>(() => {
    if (typeof window === "undefined") {
      return getResponsiveState(1920, 1080);
    }
    return getResponsiveState(window.innerWidth, window.innerHeight);
  });

  useEffect(() => {
    const handleResize = () => {
      setState(getResponsiveState(window.innerWidth, window.innerHeight));
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return state;
}
