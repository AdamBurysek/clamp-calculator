import useGlobalState from "../hooks/useGlobalState";
import CheckboxInput from "./common/CheckboxInput";
import OptionInput from "./common/OptionInput";

const AdditionalControls = () => {
  const { outputInPx, setOutputInPx } = useGlobalState();

  return (
    <div>
      <OptionInput />
      <CheckboxInput
        onChange={() => setOutputInPx(!outputInPx)}
        checked={!outputInPx}
        label="Output in pixels"
      />
    </div>
  );
};

export default AdditionalControls;
