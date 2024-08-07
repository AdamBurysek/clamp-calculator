import useGlobalState from "../hooks/useGlobalState";
import CheckboxInput from "./common/CheckboxInput";

const AdditionalControls = () => {
  const { outputInPx, setOutputInPx } = useGlobalState();

  return (
    <CheckboxInput
      onChange={() => setOutputInPx(!outputInPx)}
      checked={!outputInPx}
      label="Output in pixels"
    />
  );
};

export default AdditionalControls;
