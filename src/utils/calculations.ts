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
