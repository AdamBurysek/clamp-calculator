import { GlobalStateProvider } from "../context/GlobalStateContext";
import RemControls from "../components/RemControls";

const Calculator = () => {
  return (
    <GlobalStateProvider>
      <div className="w-full max-w-content flex flex-col items-center ">
        <h1 className="py-4 bg-gradient-to-r from-c-text from-20% via-c-primary via-65% to-c-text to-50% inline-block text-transparent bg-clip-text">
          Your Trusted Clamp Calculator
        </h1>
        <div className="flex flex-col items-center bg-c-secondary rounded-2xl ">
          <h2 className="pt-2">Calculator Settings</h2>
          <RemControls />
        </div>
      </div>
    </GlobalStateProvider>
  );
};

export default Calculator;
