import useGlobalState from "../hooks/useGlobalState";

import OptionInput from "./common/OptionInput";
import ToggleOption from "./common/ToggleOption";

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
  } = useGlobalState();

  const targetOptions = [
    { label: "none", value: "" },
    { label: "Font size", value: "font-size:" },
    { label: "Width", value: "width:" },
    { label: "Padding left", value: "padding-left:" },
    { label: "Padding right", value: "padding-right:" },
    { label: "Margin left", value: "margin-left:" },
    { label: "Margin right", value: "margin-right:" },
  ];

  return (
    <div>
      <OptionInput
        options={targetOptions}
        label="Target"
        name="clamp-options"
        setValue={setTargetValue}
        value={targetValue}
      />
      <ToggleOption
        label="Output in pixels"
        onClick={() => setOutputInPx(!outputInPx)}
        value={outputInPx}
      />
      <ToggleOption
        label="Add comment"
        onClick={() => setAddComment(!addComment)}
        value={addComment}
      />
      <ToggleOption
        label="Use TailwindCSS"
        onClick={() => setUseTailwind(!useTailwind)}
        value={useTailwind}
      />
    </div>
  );
};

export default AdditionalControls;
