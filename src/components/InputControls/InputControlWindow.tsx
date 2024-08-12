import ToggleUnitButton from "../common/ToggleUnitButton";

const InputForm = ({ type, min, max, isUnitpx, value, setValue, ariaLabel }: InputFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "" : parseFloat(e.target.value);
    setValue!(value as number);
  };

  const handleBlur = () => {
    if (value === null || value! < min) {
      setValue!(min);
    } else if (value! > max) {
      setValue!(max);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "Escape") {
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <div className="flex gap-2">
      <p className="text-xl font-bold text-c-text">{type === "min" ? "MIN" : "MAX"}</p>
      <span className="flex items-center gap-2 rounded-md bg-c-primary px-2 text-c-background">
        <input
          type="number"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleInputKeyDown}
          aria-label={ariaLabel}
          name={ariaLabel}
          className="w-14 bg-c-primary text-center font-bold text-c-background"
          min={min}
          max={max}
        />
        <p className="font-bold text-c-background">{isUnitpx ? "px" : "rem"}</p>
      </span>
    </div>
  );
};

const InputControlWindow = ({
  header,
  isUnitpx,
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  setUnitpx,
}: InputControlWindowProps) => {
  return (
    <div className="flex h-36 w-96 flex-col items-center gap-8 rounded-2xl border border-c-background bg-c-secondary drop-shadow-box">
      <div className="mt-2 flex h-12 items-center gap-6">
        <h3 className="pb-1">{header}</h3>
        <ToggleUnitButton isUnitpx={isUnitpx} setUnitpx={setUnitpx} />
      </div>
      <div className="flex gap-4">
        <InputForm
          type="min"
          min={-9999}
          max={9999}
          isUnitpx={isUnitpx}
          value={minValue}
          setValue={setMinValue}
          ariaLabel="Min Value"
        />
        <InputForm
          type="max"
          min={-9999}
          max={9999}
          isUnitpx={isUnitpx}
          value={maxValue}
          setValue={setMaxValue}
          ariaLabel="Max Value"
        />
      </div>
    </div>
  );
};

export default InputControlWindow;
