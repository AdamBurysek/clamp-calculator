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
  // Wiewport values are always in px
  const minViewportPx = formatNumber(toPx(minViewportValue, isViewportUnitsPx, remBase));
  const maxViewportPx = formatNumber(toPx(maxViewportValue, isViewportUnitsPx, remBase));

  if (useTailwind) {
    return `{/* clamp: ${customTargetValue ? customTargetValue : targetValue} ${formatNumber(minTargetValue)}${isTargetUnitsPx ? "px" : "rem"}, viewport: ${minViewportPx}px -> ${customTargetValue ? customTargetValue : targetValue} ${formatNumber(maxTargetValue)}${isTargetUnitsPx ? "px" : "rem"}, viewport: ${maxViewportPx}px */}`;
  } else {
    return `/* ${customTargetValue ? customTargetValue : targetValue} ${formatNumber(minTargetValue)}${isTargetUnitsPx ? "px" : "rem"}, viewport: ${minViewportPx}px -> ${customTargetValue ? customTargetValue : targetValue} ${formatNumber(maxTargetValue)}${isTargetUnitsPx ? "px" : "rem"}, viewport: ${maxViewportPx}px */`;
  }
};
