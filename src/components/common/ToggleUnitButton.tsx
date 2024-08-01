import { useState } from "react";
import { cn } from "../../utils/classNames";

interface ToggleButtonProps {
  isActive: boolean;
  label: string;
  onClick: () => void;
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

const ToggleUnitButton = () => {
  const [usePx, setUsePx] = useState(true);

  const handleUnitChange = () => {
    setUsePx(!usePx);
  };

  return (
    <div className="flex h-9 items-center px-1 bg-c-background rounded-full shadow-md">
      <ToggleButton isActive={usePx} label="px" onClick={handleUnitChange} />
      <ToggleButton isActive={!usePx} label="rem" onClick={handleUnitChange} />
    </div>
  );
};

export default ToggleUnitButton;
