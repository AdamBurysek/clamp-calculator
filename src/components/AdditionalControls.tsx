import useGlobalState from "../hooks/useGlobalState";

import OptionInput from "./common/OptionInput";
import ToggleOption from "./common/ToggleOption";

const AdditionalControls = () => {
  const { outputInPx, setOutputInPx } = useGlobalState();

  const targetOptions = [
    { label: "Font size", value: "font-size" },
    { label: "Width", value: "width" },
    { label: "Padding left", value: "padding-left" },
    { label: "Padding right", value: "padding-right" },
    { label: "Margin left", value: "margin-left" },
    { label: "Margin right", value: "margin-right" },
  ];

  return (
    <div>
      <OptionInput options={targetOptions} label="Target" name="clamp-options" />
      {/* <CheckboxInput
        onChange={() => setOutputInPx(!outputInPx)}
        checked={!outputInPx}
        label="Output in pixels"
      /> */}
      <ToggleOption
        label="Output in pixels"
        onClick={() => setOutputInPx(!outputInPx)}
        value={!outputInPx}
      />
    </div>
  );
};

export default AdditionalControls;
