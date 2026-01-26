import { Pose } from "../types";
import { Breakpoint } from "@/hooks/useResponsive";

export type ResponsivePoses = {
  desktop: Pose[];
  tablet?: Pose[];
  mobile: Pose[];
};

export function getResponsivePoses(
  responsivePoses: ResponsivePoses,
  breakpoint: Breakpoint
): Pose[] {
  if (breakpoint === "mobile") {
    return responsivePoses.mobile;
  }
  if (breakpoint === "tablet") {
    return responsivePoses.tablet ?? responsivePoses.desktop;
  }
  return responsivePoses.desktop;
}
