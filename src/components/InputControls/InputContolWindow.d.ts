interface InputControlWindowProps {
  header: string
  isUnitpx?: boolean
  setUnitpx?: (isUnitpx: boolean) => void
  minValue?: number
  setMinValue?: (minValue: number) => void
  maxValue?: number
  setMaxValue?: (maxValue: number) => void
}

interface InputFormProps {
  type?: 'min' | 'max'
  min: number
  max: number
  isUnitpx: boolean | undefined
  value: number | undefined
  setValue: ((value: number) => void) | undefined
  ariaLabel: string
}
