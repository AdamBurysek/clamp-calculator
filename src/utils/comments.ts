import { formatNumber, toPx } from "./calculations";

export const generateComment = (
  minTargetValue: number,
  maxTargetValue: number,
  minViewportValue: number,
  maxViewportValue: number,
  isTargetUnitsPx: boolean,
  isViewportUnitsPx: boolean,
  remBase: number,
  targetValue: string,
  customTargetValue: string,
  useTailwind: boolean,
): string => {
  const minTargetPx = formatNumber(toPx(minTargetValue, isTargetUnitsPx, remBase));
  const maxTargetPx = formatNumber(toPx(maxTargetValue, isTargetUnitsPx, remBase));
  const minViewportPx = formatNumber(toPx(minViewportValue, isViewportUnitsPx, remBase));
  const maxViewportPx = formatNumber(toPx(maxViewportValue, isViewportUnitsPx, remBase));

  if (useTailwind) {
    return `{/* clamp: ${customTargetValue ? customTargetValue : targetValue} ${minTargetPx}px, viewport: ${minViewportPx}px -> ${customTargetValue ? customTargetValue : targetValue} ${maxTargetPx}px, viewport: ${maxViewportPx}px */}`;
  } else {
    return `/* ${customTargetValue ? customTargetValue : targetValue} ${minTargetPx}px, viewport: ${minViewportPx}px -> ${customTargetValue ? customTargetValue : targetValue} ${maxTargetPx}px, viewport: ${maxViewportPx}px */`;
  }
};
