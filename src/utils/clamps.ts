import { toPx, formatNumber, toRem } from "./calculations";

export const generateClamp = (
  minTargetValue: number,
  maxTargetValue: number,
  minViewportValue: number,
  maxViewportValue: number,
  isTargetUnitsPx: boolean,
  isViewportUnitsPx: boolean,
  remBase: number,
  outputInPx: boolean
): string => {
  if (!(minTargetValue && maxTargetValue && minViewportValue && maxViewportValue)) {
    return "";
  }

  if (outputInPx) {
    const minTargetPx = toPx(minTargetValue, isTargetUnitsPx, remBase);
    const maxTargetPx = toPx(maxTargetValue, isTargetUnitsPx, remBase);
    const minViewportPx = toPx(minViewportValue, isViewportUnitsPx, remBase);
    const maxViewportPx = toPx(maxViewportValue, isViewportUnitsPx, remBase);

    const slope = (maxTargetPx - minTargetPx) / (maxViewportPx - minViewportPx);
    const intercept = minTargetPx - slope * minViewportPx;
    const slopePercentage = slope * 100;

    return `clamp(${formatNumber(minTargetPx)}px, ${formatNumber(intercept)}px + ${formatNumber(
      slopePercentage
    )}vw, ${formatNumber(maxTargetPx)}px)`;
  } else {
    const minTargetRem = toRem(minTargetValue, isTargetUnitsPx, remBase);
    const maxTargetRem = toRem(maxTargetValue, isTargetUnitsPx, remBase);
    const minViewportRem = toRem(minViewportValue, isViewportUnitsPx, remBase);
    const maxViewportRem = toRem(maxViewportValue, isViewportUnitsPx, remBase);

    const slope = (maxTargetRem - minTargetRem) / (maxViewportRem - minViewportRem);
    const intercept = minTargetRem - slope * minViewportRem;
    const slopePercentage = slope * 100;

    return `clamp(${formatNumber(minTargetRem)}rem, ${formatNumber(intercept)}rem + ${formatNumber(
      slopePercentage
    )}vw, ${formatNumber(maxTargetRem)}rem)`;
  }
};
