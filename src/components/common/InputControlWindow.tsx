import ToggleUnitButton from "./ToggleUnitButton";

interface InputControlWindowProps {
  isUnitpx?: boolean;
  setUnitpx?: (isUnitpx: boolean) => void;
  minValue?: number;
  setMinValue?: (minValue: number) => void;
  maxValue?: number;
  setMaxValue?: (maxValue: number) => void;
}

interface InputFormProps {
  type?: "min" | "max";
  min: number;
  max: number;
  isUnitpx: boolean | undefined;
  value: number | undefined;
  setValue: ((value: number) => void) | undefined;
  ariaLabel: string;
}

const InputForm = ({ type, min, max, isUnitpx, value, setValue, ariaLabel }: InputFormProps) => {
  return (
    <div className="flex gap-2">
      <p className="text-c-text font-bold text-xl">{type === "min" ? "MIN" : "MAX"}</p>
      <span className="flex gap-2 px-2 items-center bg-c-primary text-c-background rounded-md">
        <input
          type="number"
          value={value}
          aria-label={ariaLabel}
          className="w-14 text-center bg-c-primary text-c-background font-bold"
          min={min}
          max={max}
        />
        <p className="text-c-background font-bold">{isUnitpx ? "px" : "rem"}</p>
      </span>
    </div>
  );
};

const InputControlWindow = ({
  isUnitpx,
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  setUnitpx,
}: InputControlWindowProps) => {
  return (
    <div className="flex flex-col items-center gap-8 w-96 h-36 bg-c-secondary border border-c-background rounded-2xl drop-shadow-box">
      <div className="flex items-center gap-6 mt-2 h-12">
        <h3 className="pb-1">Target Values</h3>
        <ToggleUnitButton isUnitpx={isUnitpx} setUnitpx={setUnitpx} />
      </div>
      <div className="flex gap-4 ">
        <InputForm
          type="min"
          min={1}
          max={1201}
          isUnitpx={isUnitpx}
          value={minValue}
          setValue={setMinValue}
          ariaLabel="Min Target Value"
        />
        <InputForm
          type="max"
          min={1}
          max={1201}
          isUnitpx={isUnitpx}
          value={maxValue}
          setValue={setMaxValue}
          ariaLabel="Max Target Value"
        />
      </div>
    </div>
  );
};

export default InputControlWindow;
