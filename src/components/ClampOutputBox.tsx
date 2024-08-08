import { useState } from "react";
import useGlobalState from "../hooks/useGlobalState";
import { CheckIcon } from "./Icons";
import { cn } from "../utils/classNames";

const ClampOutputBox = () => {
  const { clampValue, targetValue } = useGlobalState();
  const [showIcon, setShowIcon] = useState(false);

  const handleCopy = () => {
    if (clampValue) {
      navigator.clipboard.writeText(targetValue + clampValue);
      setShowIcon(true);
      setTimeout(() => {
        setShowIcon(false);
      }, 1000);
    }
  };

  return (
    <div className="flex my-4 py-4 pl-4 bg-c-secondary rounded-2xl ">
      <div className="w-full text-center py-4 bg-c-grey-one rounded-l-xl">
        <p>
          {targetValue}
          {clampValue}
        </p>
      </div>
      <button
        className={cn(
          "w-24 bg-c-primary mr-4 text-c-background font-bold flex justify-center items-center rounded-r-xl hover:bg-green-600 active:bg-green-500",
          { "bg-green-600": showIcon }
        )}
        onClick={handleCopy}
      >
        {showIcon ? <CheckIcon /> : "COPY"}
      </button>
    </div>
  );
};

export default ClampOutputBox;
