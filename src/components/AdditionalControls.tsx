import { useState } from 'react'
import useGlobalState from '../hooks/useGlobalState'
import CustomInput from './common/CustomInput'
import OptionInput from './common/OptionInput'
import ToggleOption from './common/ToggleOption'
import { Arrow } from './Icons'
import { motion } from 'framer-motion'

const AdditionalControls = () => {
  const {
    outputInPx,
    setOutputInPx,
    targetValue,
    setTargetValue,
    addComment,
    setAddComment,
    useTailwind,
    setUseTailwind,
    customTargetValue,
    setCustomTargetValue,
  } = useGlobalState()

  const [isOpen, setIsOpen] = useState(false)

  const targetOptions = [
    { label: 'none', value: '' },
    { label: 'Font size', value: 'font-size:' },
    { label: 'Width', value: 'width:' },
    { label: 'Min width', value: 'min-width:' },
    { label: 'Max width', value: 'max-width:' },
    { label: 'Padding left', value: 'padding-left:' },
    { label: 'Padding right', value: 'padding-right:' },
    { label: 'Margin left', value: 'margin-left:' },
    { label: 'Margin right', value: 'margin-right:' },
  ]

  return (
    <div className='flex flex-col items-center'>
      <motion.div
        className="gap max-m: flex flex-col overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.3 },
          opacity: { duration: isOpen ? 0.3 : 0.1, delay: isOpen ? 0.3 : 0 },
        }}
      >
        <div className="flex items-center justify-center gap-4 max-m:flex-col max-m:items-start max-m:pb-3">
          <OptionInput
            options={targetOptions}
            label="Target"
            name="clamp-options"
            setValue={setTargetValue}
            value={targetValue}
          />
          <CustomInput
            label="Custom Target"
            name="custom-target"
            value={customTargetValue}
            setValue={setCustomTargetValue}
          />
        </div>
        <div className="flex items-center max-m:flex-col max-m:items-start m:gap-4">
          <ToggleOption
            label="Add comment"
            onClick={() => setAddComment(!addComment)}
            value={addComment}
          />
          <ToggleOption
            label="Output in pixels"
            onClick={() => setOutputInPx(!outputInPx)}
            value={outputInPx}
          />
          <ToggleOption
            label="Use Tailwind CSS"
            onClick={() => setUseTailwind(!useTailwind)}
            value={useTailwind}
          />
        </div>
      </motion.div>
      <button
        className='group flex flex-col items-center'
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.p
          initial={{ opacity: 1, height: "auto" }}
          animate={{ opacity: isOpen ? 0 : 1, height: !isOpen ? "auto" : 0 }}
          transition={{
            height: { duration: 0.2 },
            opacity: { duration: 0.2, delay: isOpen ? 0 : 0.2 },
          }}
        >
          Advanced Settings
        </motion.p>
        <span className='bg-c-primary w-8 h-8 rounded-full flex items-center justify-center m-2 duration-300 group-hover:scale-105'>
          <Arrow direction={isOpen ? 'top' : 'bottom'} />
        </span>
      </button>
    </div>
  )
}

export default AdditionalControls
