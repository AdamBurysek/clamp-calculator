import { cn } from '../../utils/classNames'

interface ToggleButtonProps {
  isActive: boolean
  label: string
  onClick: () => void
}

interface ToggleUnitButtonProps {
  isUnitpx: boolean | undefined
  setUnitpx: ((isUnitpx: boolean) => void) | undefined
}

const ToggleButton = ({ isActive, label, onClick }: ToggleButtonProps) => (
  <button
    className={cn('rounded-full px-3 pb-1 font-bold', {
      'bg-c-primary text-c-background': isActive,
      'bg-c-background text-c-text': !isActive,
    })}
    onClick={onClick}
  >
    {label}
  </button>
)

const ToggleUnitButton = ({ isUnitpx, setUnitpx }: ToggleUnitButtonProps) => {
  const handleUnitChange = () => {
    if (!setUnitpx) return
    setUnitpx(!isUnitpx)
  }

  return (
    <div className="flex h-9 items-center rounded-full bg-c-background px-1 shadow-md">
      <ToggleButton isActive={isUnitpx!} label="px" onClick={handleUnitChange} />
      <ToggleButton isActive={!isUnitpx} label="rem" onClick={handleUnitChange} />
    </div>
  )
}

export default ToggleUnitButton
