import { cn } from '../../utils/classNames'
import { motion } from 'motion/react'

interface Props {
  label: string
  onClick: () => void
  value: boolean
}

const ToggleOption = ({ label, onClick, value }: Props) => {
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  }
  return (
    <div className="flex items-center gap-4">
      <button
        className={cn('my-2 flex h-8 w-12 justify-start rounded-full bg-c-background p-1', {
          'justify-end bg-c-primary': value,
        })}
        onClick={onClick}
        aria-label={label}
        name={label}
        id={label}
      >
        <motion.div
          className={cn('h-6 w-6 rounded-full bg-c-primary', { 'bg-c-secondary': value })}
          layout
          transition={spring}
        />
      </button>
      <label htmlFor={label}>{label}</label>
      <p>{value}</p>
    </div>
  )
}

export default ToggleOption
