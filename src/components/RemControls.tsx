import React, { useState } from "react";
import StepButton from "../components/common/StepButton";
import { recalculateRem } from "../utils/calculations";

import useGlobalState from "../hooks/useGlobalState";
import useHandleInputKeyDown from "../hooks/useHandleInputKeyDown";

const RemControls: React.FC = () => {
  const {
    remBase,
    isTargetUnitsPx,
    isViewportUnitsPx,
    minTargetValue,
    maxTargetValue,
    minViewportValue,
    maxViewportValue,
    setRemBase,
    setMinTargetValue,
    setMaxTargetValue,
    setMinViewportValue,
    setMaxViewportValue,
  } = useGlobalState();

  //This is holding the local value until the hanldeBlur event is triggered
  const [localRemBase, setLocalRemBase] = useState<number>(remBase);

  const updateValues = (oldRemBase: number, newRemBase: number) => {
    setMinTargetValue(recalculateRem(oldRemBase, newRemBase, isTargetUnitsPx, minTargetValue));
    setMaxTargetValue(recalculateRem(oldRemBase, newRemBase, isTargetUnitsPx, maxTargetValue));
    setMinViewportValue(
      recalculateRem(oldRemBase, newRemBase, isViewportUnitsPx, minViewportValue),
    );
    setMaxViewportValue(
      recalculateRem(oldRemBase, newRemBase, isViewportUnitsPx, maxViewportValue),
    );
  };

  const changeRemBase = (e: React.MouseEvent<HTMLButtonElement>) => {
    const oldRemBase = remBase;
    const type = e.currentTarget.dataset.type;
    if (type === "increment" && remBase <= 1201) {
      const newRemBase = remBase + 1;
      setRemBase(newRemBase);
      setLocalRemBase(newRemBase);
      updateValues(oldRemBase, newRemBase);
    } else if (type === "decrement" && remBase > 1) {
      const newRemBase = remBase - 1;
      setRemBase(newRemBase);
      setLocalRemBase(newRemBase);
      updateValues(oldRemBase, newRemBase);
    }
  };

  const handleRemInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "" : parseInt(e.target.value, 10);
    if (value === "" || (!isNaN(value) && value >= 0 && value <= 1201)) {
      setLocalRemBase(value as number);
    }
  };

  const handleRemInputBlur = () => {
    const oldRemBase = remBase;
    const newRemBase = localRemBase;

    if (newRemBase === null || newRemBase < 1) {
      setRemBase(1);
      updateValues(oldRemBase, 1);
    } else if (newRemBase > 1201) {
      setRemBase(1201);
      updateValues(oldRemBase, 1201);
    } else {
      setRemBase(newRemBase);
      updateValues(oldRemBase, newRemBase);
    }
  };

  const handleRemInputKeyDown = useHandleInputKeyDown();

  return (
    <div className="my-4 flex gap-4">
      <StepButton type="decrement" onClick={changeRemBase} />
      <div className="rounded-2xl bg-c-primary">
        <p className="px-6 pt-2 text-xl font-bold text-c-background">
          1 rem =
          <input
            type="number"
            aria-label="Rem Base Value"
            name="Rem Base Value"
            value={localRemBase}
            onChange={handleRemInputChange}
            onBlur={handleRemInputBlur}
            onKeyDown={handleRemInputKeyDown}
            className="w-14 bg-c-primary text-center text-c-background"
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
