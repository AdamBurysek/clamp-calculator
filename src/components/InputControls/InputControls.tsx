import useGlobalState from "../../hooks/useGlobalState";
import InputControlWindow from "./InputControlWindow";

const InputControls = () => {
  const {
    isTargetUnitsPx,
    setIsTargetUnitsPx,
    isWindowUnitsPx,
    setIsWindowUnitsPx,
    minTargetValue,
    setMinTargetValue,
    maxTargetValue,
    setMaxTargetValue,
    minWindowValue,
    setMinWindowValue,
    maxWindowValue,
    setMaxWindowValue,
  } = useGlobalState();

  return (
    <div className="flex gap-8 p-4 max-m:flex-col">
      <InputControlWindow
        header="Target Values"
        isUnitpx={isTargetUnitsPx}
        setUnitpx={setIsTargetUnitsPx}
        minValue={minTargetValue}
        setMinValue={setMinTargetValue}
        maxValue={maxTargetValue}
        setMaxValue={setMaxTargetValue}
      />
      <InputControlWindow
        header="Window Values"
        isUnitpx={isWindowUnitsPx}
        setUnitpx={setIsWindowUnitsPx}
        minValue={minWindowValue}
        setMinValue={setMinWindowValue}
        maxValue={maxWindowValue}
        setMaxValue={setMaxWindowValue}
      />
    </div>
  );
};

export default InputControls;
