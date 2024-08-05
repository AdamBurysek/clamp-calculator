export const convertUnits = (value: number, isPx: boolean, remBase: number) => {
  const result = isPx ? value * remBase : value / remBase;
  return parseFloat(result.toFixed(3));
};

export const recalculateRem = (
  oldRemBase: number,
  newRemBase: number,
  isPx: boolean,
  value: number
) => {
  if (isPx) return value;
  const newValue = (value * oldRemBase) / newRemBase;
  return parseFloat(newValue.toFixed(3));
};

const toRem = (value: number, isPx: boolean, remBase: number): number => {
  return isPx ? value / remBase : value;
};

const formatNumber = (value: number): string => {
  if (value === 0) return "0";
  return parseFloat(value.toFixed(3)).toString();
};

export const generateClamp = (
  minTargetValue: number,
  maxTargetValue: number,
  minWindowValue: number,
  maxWindowValue: number,
  isTargetUnitsPx: boolean,
  isWindowUnitsPx: boolean,
  remBase: number
): string => {
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
};
