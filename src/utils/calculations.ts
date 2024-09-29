export const convertUnits = (value: number, isPx: boolean, remBase: number) => {
  const result = isPx ? value * remBase : value / remBase
  return parseFloat(result.toFixed(3))
}

export const recalculateRem = (
  oldRemBase: number,
  newRemBase: number,
  isPx: boolean,
  value: number
) => {
  if (isPx) return value
  const newValue = (value * oldRemBase) / newRemBase
  return parseFloat(newValue.toFixed(3))
}

export const toRem = (value: number, isPx: boolean, remBase: number): number => {
  if (!value) return 0
  return isPx ? value / remBase : value
}

export const toPx = (value: number, isPx: boolean, remBase: number): number => {
  if (!value) return 0
  return isPx ? value : value * remBase
}

// This function returns a nicely formatted string (eg. instead 2.700 it returns 2.7)
export const formatNumber = (value: number): string => {
  if (!value) return '0'
  return parseFloat(value.toFixed(3)).toString()
}
