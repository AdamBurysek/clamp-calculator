import { cn } from "../../utils/classNames";

interface ToggleButtonProps {
  isActive: boolean;
  label: string;
  onClick: () => void;
}

interface ToggleUnitButtonProps {
  isUnitpx: boolean | undefined;
  setUnitpx: ((isUnitpx: boolean) => void) | undefined;
}

const ToggleButton = ({ isActive, label, onClick }: ToggleButtonProps) => (
  <button
    className={cn("px-3 pb-1 rounded-full font-bold", {
      "text-c-background bg-c-primary": isActive,
      "text-c-text bg-c-background": !isActive,
    })}
    onClick={onClick}
  >
    {label}
  </button>
);

const ToggleUnitButton = ({ isUnitpx, setUnitpx }: ToggleUnitButtonProps) => {
  const handleUnitChange = () => {
    if (!setUnitpx) return;
    setUnitpx(!isUnitpx);
  };

  return (
    <div className="flex h-9 items-center px-1 bg-c-background rounded-full shadow-md">
      <ToggleButton isActive={isUnitpx!} label="px" onClick={handleUnitChange} />
      <ToggleButton isActive={!isUnitpx} label="rem" onClick={handleUnitChange} />
    </div>
  );
};

export default ToggleUnitButton;
