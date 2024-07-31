import { useState } from "react";
import StepButton from "../components/common/StepButton";

const Calculator = () => {
  const [remBase, setRemBase] = useState(16);

  const changeRemBase = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = e.currentTarget.dataset.type;
    if (type === "increment" && remBase <= 1201) {
      setRemBase(remBase + 1);
    } else if (type === "decrement" && remBase > 1) {
      setRemBase(remBase - 1);
    }
  };

  return (
    <div className="w-full max-w-content flex flex-col items-center pt-4">
      <h1 className="bg-gradient-to-r from-c-text from-20% via-c-primary via-65% to-c-text to-50% inline-block text-transparent bg-clip-text">
        Your Trusted Clamp Calculator
      </h1>
      <div className="bg-c-secondary">
        <h2> Calculator Settings</h2>
        <div className="flex gap-4 my-4">
          <StepButton type={"decrement"} onClick={changeRemBase} />
          <p>{remBase}</p>
          <StepButton type={"increment"} onClick={changeRemBase} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
