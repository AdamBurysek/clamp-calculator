import { useGlobalState } from "../context/GlobalStateContext";
import InputControlWindow from "./common/InputControlWindow";

const InputControls = () => {
  const { isTargetUnitsPx, setIsTargetUnitsPx } = useGlobalState();
  const { isWindowUnitsPx, setIsWindowUnitsPx } = useGlobalState();
  const { minTargetValue, setMinTargetValue } = useGlobalState();
  const { maxTargetValue, setMaxTargetValue } = useGlobalState();
  const { minWindowValue, setMinWindowValue } = useGlobalState();
  const { maxWindowValue, setMaxWindowValue } = useGlobalState();

  return (
    <div className="flex  gap-8 p-4 ">
      <InputControlWindow
        isUnitpx={isTargetUnitsPx}
        setUnitpx={setIsTargetUnitsPx}
        minValue={minTargetValue}
        maxValue={maxTargetValue}
      />
      <InputControlWindow
        isUnitpx={isWindowUnitsPx}
        setUnitpx={setIsWindowUnitsPx}
        minValue={minWindowValue}
        maxValue={maxWindowValue}
      />
    </div>
  );
};

export default InputControls;
