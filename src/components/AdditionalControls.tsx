import useGlobalState from '../hooks/useGlobalState'
import CustomInput from './common/CustomInput'

import OptionInput from './common/OptionInput'
import ToggleOption from './common/ToggleOption'

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

  const targetOptions = [
    { label: 'none', value: '' },
    { label: 'Font size', value: 'font-size:' },
    { label: 'Width', value: 'width:' },
    { label: 'Padding left', value: 'padding-left:' },
    { label: 'Padding right', value: 'padding-right:' },
    { label: 'Margin left', value: 'margin-left:' },
    { label: 'Margin right', value: 'margin-right:' },
  ]

  return (
    <div className="gap max-m: flex flex-col">
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
    </div>
  )
}

export default AdditionalControls
