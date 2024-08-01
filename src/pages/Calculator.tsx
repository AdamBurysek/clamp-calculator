import { GlobalStateProvider } from "../context/GlobalStateContext";
import RemControls from "../components/RemControls";
import ToggleUnitButton from "../components/common/ToggleUnitButton";

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
          <div className="flex gap-8 p-4 ">
            <div className="flex gap-8 w-96 h-36 bg-c-secondary border border-c-background rounded-2xl drop-shadow-box">
              <div className="flex gap-4 mt-2 h-12">
                <h3>Target Values</h3>
                <ToggleUnitButton />
              </div>
            </div>
            <div className="w-96 h-36 bg-c-secondary border border-c-background rounded-2xl drop-shadow-box">
              <h3>Viewport Range</h3>
            </div>
          </div>
        </div>
      </div>
    </GlobalStateProvider>
  );
};

export default Calculator;
