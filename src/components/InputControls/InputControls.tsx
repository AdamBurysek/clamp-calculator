import useGlobalState from "../../hooks/useGlobalState";
import InputControlViewport from "./InputControlWindow";

const InputControls = () => {
  const {
    isTargetUnitsPx,
    setIsTargetUnitsPx,
    isViewportUnitsPx,
    setIsViewportUnitsPx,
    minTargetValue,
    setMinTargetValue,
    maxTargetValue,
    setMaxTargetValue,
    minViewportValue,
    setMinViewportValue,
    maxViewportValue,
    setMaxViewportValue,
  } = useGlobalState();

  return (
    <div className="flex gap-8 p-4 max-m:flex-col">
      <InputControlViewport
        header="Target Values"
        isUnitpx={isTargetUnitsPx}
        setUnitpx={setIsTargetUnitsPx}
        minValue={minTargetValue}
        setMinValue={setMinTargetValue}
        maxValue={maxTargetValue}
        setMaxValue={setMaxTargetValue}
      />
      <InputControlViewport
        header="Viewport Range"
        isUnitpx={isViewportUnitsPx}
        setUnitpx={setIsViewportUnitsPx}
        minValue={minViewportValue}
        setMinValue={setMinViewportValue}
        maxValue={maxViewportValue}
        setMaxValue={setMaxViewportValue}
      />
    </div>
  );
};

export default InputControls;
