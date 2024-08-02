import ToggleUnitButton from "./ToggleUnitButton";

interface InputControlWindowProps {
  isUnitpx?: boolean;
  setUnitpx?: (isUnitpx: boolean) => void;
  minValue?: number;
  maxValue?: number;
}

interface InputFormProps {
  type?: "min" | "max";
  min: number;
  max: number;
  isUnitpx: boolean | undefined;
  value: number | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  ariaLabel: string;
}

const InputForm = ({
  type,
  min,
  max,
  isUnitpx,
  value,
  onKeyDown,
  onChange,
  onBlur,
  ariaLabel,
}: InputFormProps) => {
  return (
    <div className="flex gap-2">
      <p className="text-c-text font-bold text-xl">{type === "min" ? "MIN" : "MAX"}</p>
      <span className="flex gap-2 px-2 items-center bg-c-primary text-c-background rounded-md">
        <input
          type="number"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
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
  maxValue,
  setUnitpx,
}: InputControlWindowProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const value = e.target.value === "" ? "" : parseInt(e.target.value, 10);
    // if (value === "" || (!isNaN(value) && value >= 0 && value <= 9999)) {
    //   setRemBase(value as number);
    // }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "Escape") {
      (e.target as HTMLInputElement).blur();
    }
  };
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
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          ariaLabel="Min Target Value"
        />
        <InputForm
          type="max"
          min={1}
          max={1201}
          isUnitpx={isUnitpx}
          value={maxValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          ariaLabel="Max Target Value"
        />
      </div>
    </div>
  );
};

export default InputControlWindow;
