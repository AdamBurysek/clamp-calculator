import useGlobalState from "../hooks/useGlobalState";
import CheckboxInput from "./common/CheckboxInput";
import OptionInput from "./common/OptionInput";

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
      <OptionInput options={targetOptions} />
      <CheckboxInput
        onChange={() => setOutputInPx(!outputInPx)}
        checked={!outputInPx}
        label="Output in pixels"
      />
    </div>
  );
};

export default AdditionalControls;
