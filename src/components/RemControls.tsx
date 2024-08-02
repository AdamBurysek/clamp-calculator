import React from "react";
import StepButton from "../components/common/StepButton";
import { useGlobalState } from "../context/GlobalStateContext";
import { recalculateRem } from "../utils/calculations";

const RemControls: React.FC = () => {
  const {
    remBase,
    isTargetUnitsPx,
    isWindowUnitsPx,
    minTargetValue,
    maxTargetValue,
    minWindowValue,
    maxWindowValue,
    setRemBase,
    setMinTargetValue,
    setMaxTargetValue,
    setMinWindowValue,
    setMaxWindowValue,
  } = useGlobalState();

  const updateValues = (oldRemBase: number, newRemBase: number) => {
    setMinTargetValue(recalculateRem(oldRemBase, newRemBase, isTargetUnitsPx, minTargetValue));
    setMaxTargetValue(recalculateRem(oldRemBase, newRemBase, isTargetUnitsPx, maxTargetValue));
    setMinWindowValue(recalculateRem(oldRemBase, newRemBase, isWindowUnitsPx, minWindowValue));
    setMaxWindowValue(recalculateRem(oldRemBase, newRemBase, isWindowUnitsPx, maxWindowValue));
  };

  const changeRemBase = (e: React.MouseEvent<HTMLButtonElement>) => {
    const oldRemBase = remBase;
    const type = e.currentTarget.dataset.type;
    if (type === "increment" && remBase <= 1201) {
      const newRemBase = remBase + 1;
      setRemBase(newRemBase);
      updateValues(oldRemBase, newRemBase);
    } else if (type === "decrement" && remBase > 1) {
      const newRemBase = remBase - 1;
      setRemBase(newRemBase);
      updateValues(oldRemBase, newRemBase);
    }
  };

  const handleRemInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const oldRemBase = remBase;
    const value = e.target.value === "" ? "" : parseInt(e.target.value, 10);
    if (value === "" || (!isNaN(value) && value >= 0 && value <= 1201)) {
      const newRemBase = value as number;
      setRemBase(newRemBase);
      updateValues(oldRemBase, newRemBase);
    }
  };

  const handleRemInputBlur = () => {
    const oldRemBase = remBase;
    if (remBase === null || remBase < 1) {
      setRemBase(1);
      updateValues(oldRemBase, 1);
    } else if (remBase > 1201) {
      setRemBase(1201);
      updateValues(oldRemBase, 1201);
    }
  };

  const handleRemInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "Escape") {
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <div className="flex gap-4 my-4">
      <StepButton type="decrement" onClick={changeRemBase} />
      <div className="bg-c-primary rounded-2xl">
        <p className="pt-2 px-6 text-c-background text-xl font-bold ">
          1 rem =
          <input
            type="number"
            aria-label="Rem Base Value"
            value={remBase}
            onChange={handleRemInputChange}
            onBlur={handleRemInputBlur}
            onKeyDown={handleRemInputKeyDown}
            className="w-14 text-center bg-c-primary text-c-background"
            min={1}
            max={1201}
          />
          px
        </p>
      </div>
      <StepButton type="increment" onClick={changeRemBase} />
    </div>
  );
};

export default RemControls;
