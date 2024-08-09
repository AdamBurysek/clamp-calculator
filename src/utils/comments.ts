import { formatNumber, toPx } from "./calculations";

export const generateComment = (
  minTargetValue: number,
  maxTargetValue: number,
  minViewportValue: number,
  maxViewportValue: number,
  isTargetUnitsPx: boolean,
  isViewportUnitsPx: boolean,
  remBase: number,
  targetValue: string
): string => {
  const minTargetPx = formatNumber(toPx(minTargetValue, isTargetUnitsPx, remBase));
  const maxTargetPx = formatNumber(toPx(maxTargetValue, isTargetUnitsPx, remBase));
  const minViewportPx = formatNumber(toPx(minViewportValue, isViewportUnitsPx, remBase));
  const maxViewportPx = formatNumber(toPx(maxViewportValue, isViewportUnitsPx, remBase));

  return `/* ${targetValue} ${minTargetPx}px, viewport: ${minViewportPx}px -> ${targetValue} ${maxTargetPx}px, viewport: ${maxViewportPx}px */`;
};
