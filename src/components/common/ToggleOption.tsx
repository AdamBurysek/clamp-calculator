import { cn } from "../../utils/classNames";
import { motion } from "framer-motion";

interface Props {
  label: string;
  onClick: () => void;
  value: boolean;
}

const ToggleOption = ({ label, onClick, value }: Props) => {
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <div className="flex items-center gap-4">
      <button
        className={cn("w-12 h-8 rounded-full bg-c-background flex justify-start my-2 p-1", {
          "bg-c-primary justify-end": value,
        })}
        onClick={onClick}
        aria-label={label}
        name={label}
        id={label}
      >
        <motion.div
          className={cn("w-6 h-6 rounded-full bg-c-primary", { "bg-c-secondary": value })}
          layout
          transition={spring}
        />
      </button>
      <label htmlFor={label}>{label}</label>
      <p>{value}</p>
    </div>
  );
};

export default ToggleOption;
