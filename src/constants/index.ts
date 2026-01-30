export const DEBUG_MODE = false;

export type ScrollMode = 'smooth' | 'snap';

export const SCROLL_MODE: ScrollMode = 'snap';

export const SCROLL_SECTIONS = 5;

export const SECTION_NAMES = [
  'Hero',
  'Ingredients',
  'Experience',
  'Flavors',
  'CTA',
] as const;

export const SNAP_SCROLL_CONFIG = {
  duration: 2.5,
  ease: 'power2.inOut' as const,
  wheelThreshold: 2, // Accumulated scroll delta to trigger snap
  touchThreshold: 50, // Touch movement in pixels to trigger snap
  wheelResetTime: 200, // Time in ms before resetting wheel accumulator
} as const;
