import { toPx, formatNumber, toRem } from "./calculations";

export const generateClamp = (
  minTargetValue: number,
  maxTargetValue: number,
  minWindowValue: number,
  maxWindowValue: number,
  isTargetUnitsPx: boolean,
  isWindowUnitsPx: boolean,
  remBase: number,
  outputInPx: boolean
): string => {
  if (!(minTargetValue && maxTargetValue && minWindowValue && maxWindowValue)) {
    return "";
  }

  if (outputInPx) {
    const minTargetPx = toPx(minTargetValue, isTargetUnitsPx, remBase);
    const maxTargetPx = toPx(maxTargetValue, isTargetUnitsPx, remBase);
    const minWindowPx = toPx(minWindowValue, isWindowUnitsPx, remBase);
    const maxWindowPx = toPx(maxWindowValue, isWindowUnitsPx, remBase);

    const slope = (maxTargetPx - minTargetPx) / (maxWindowPx - minWindowPx);
    const intercept = minTargetPx - slope * minWindowPx;
    const slopePercentage = slope * 100;

    return `clamp(${formatNumber(minTargetPx)}px, ${formatNumber(intercept)}px + ${formatNumber(
      slopePercentage
    )}vw, ${formatNumber(maxTargetPx)}px)`;
  } else {
    const minTargetRem = toRem(minTargetValue, isTargetUnitsPx, remBase);
    const maxTargetRem = toRem(maxTargetValue, isTargetUnitsPx, remBase);
    const minWindowRem = toRem(minWindowValue, isWindowUnitsPx, remBase);
    const maxWindowRem = toRem(maxWindowValue, isWindowUnitsPx, remBase);

    const slope = (maxTargetRem - minTargetRem) / (maxWindowRem - minWindowRem);
    const intercept = minTargetRem - slope * minWindowRem;
    const slopePercentage = slope * 100;

    return `clamp(${formatNumber(minTargetRem)}rem, ${formatNumber(intercept)}rem + ${formatNumber(
      slopePercentage
    )}vw, ${formatNumber(maxTargetRem)}rem)`;
  }
};
