import { formatNumber, toPx } from "./calculations";

export const generateComment = (
  minTargetValue: number,
  maxTargetValue: number,
  minWindowValue: number,
  maxWindowValue: number,
  isTargetUnitsPx: boolean,
  isWindowUnitsPx: boolean,
  remBase: number
): string => {
  if (!(minTargetValue && maxTargetValue && minWindowValue && maxWindowValue)) {
    return "";
  } else {
    const minTargetPx = formatNumber(toPx(minTargetValue, isTargetUnitsPx, remBase));
    const maxTargetPx = formatNumber(toPx(maxTargetValue, isTargetUnitsPx, remBase));
    const minWindowPx = formatNumber(toPx(minWindowValue, isWindowUnitsPx, remBase));
    const maxWindowPx = formatNumber(toPx(maxWindowValue, isWindowUnitsPx, remBase));

    return `/* width: ${minTargetPx}px, window: ${minWindowPx}px -> width: ${maxTargetPx}px, window: ${maxWindowPx}px */`;
  }
};
