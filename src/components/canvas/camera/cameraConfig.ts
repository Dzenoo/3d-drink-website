import { ResponsiveState } from '@/hooks/useResponsive';

export function getCameraConfig(responsive: ResponsiveState) {
  const { isMobile, isTablet, isPortrait } = responsive;

  const fov = isMobile ? (isPortrait ? 25 : 38) : isTablet ? 35 : 30;

  const distance = isMobile ? (isPortrait ? 12 : 10) : isTablet ? 9 : 8;

  const floatIntensity = isMobile ? 0.05 : 0.1;
  const rotationIntensity = isMobile ? 0.15 : 0.3;
  const drinkRotationIntensity = isMobile ? 0.25 : 0.5;

  return {
    fov,
    distance,
    floatIntensity,
    rotationIntensity,
    drinkRotationIntensity,
  };
}
