import InputControls from "../components/InputControls/InputControls";
import RemControls from "../components/RemControls";
import { GlobalStateProvider } from "../context/GlobalStateContext";

const Calculator = () => {
  return (
    <GlobalStateProvider>
      <div className="w-full max-w-content flex flex-col items-center ">
        <h1 className="py-4 bg-gradient-to-r from-c-grey-nine from-20% via-c-primary via-85% to-c-grey-nine to-50% inline-block text-transparent bg-clip-text">
          Easy Clamp Calculation Tool
        </h1>
        <div className="flex flex-col items-center bg-c-secondary rounded-2xl ">
          <h2 className="pt-2">Calculator Settings</h2>
          <RemControls />
          <InputControls />
        </div>
      </div>
    </GlobalStateProvider>
  );
};

export default Calculator;
