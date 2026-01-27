import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

export function getDirectionOffset(
  direction: Direction,
  distance: number,
): { x: number; y: number } {
  switch (direction) {
    case 'up':
      return { y: distance, x: 0 };
    case 'down':
      return { y: -distance, x: 0 };
    case 'left':
      return { x: distance, y: 0 };
    case 'right':
      return { x: -distance, y: 0 };
    case 'none':
      return { x: 0, y: 0 };
  }
}
