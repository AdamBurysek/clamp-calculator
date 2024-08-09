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
      <p className="text-c-text font-bold text-xl">{type === "min" ? "MIN" : "MAX"}</p>
      <span className="flex gap-2 px-2 items-center bg-c-primary text-c-background rounded-md">
        <input
          type="number"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleInputKeyDown}
          aria-label={ariaLabel}
          name={ariaLabel}
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
  header,
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
        <h3 className="pb-1">{header}</h3>
        <ToggleUnitButton isUnitpx={isUnitpx} setUnitpx={setUnitpx} />
      </div>
      <div className="flex gap-4">
        <InputForm
          type="min"
          min={0.01}
          max={9999}
          isUnitpx={isUnitpx}
          value={minValue}
          setValue={setMinValue}
          ariaLabel="Min Value"
        />
        <InputForm
          type="max"
          min={0.01}
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
