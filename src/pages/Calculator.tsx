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
          <div className="flex  gap-8 p-4 ">
            <div className="flex flex-col items-center gap-8 w-96 h-36 bg-c-secondary border border-c-background rounded-2xl drop-shadow-box">
              <div className="flex items-center gap-6 mt-2 h-12">
                <h3 className="pb-1">Target Values</h3>
                <ToggleUnitButton />
              </div>
              <div className="flex gap-4 ">
                <div className="flex gap-2">
                  <p className="text-c-text font-bold text-xl">MIN</p>
                  <span className="flex gap-2 px-2 items-center bg-c-primary text-c-background rounded-md">
                    <input
                      type="number"
                      aria-label="Min Target Value"
                      className="w-14 text-center bg-c-primary text-c-background font-bold"
                      min={1}
                      max={1201}
                    />
                    <p className="text-c-background font-bold">px</p>
                  </span>
                </div>
                <div className="flex gap-2">
                  <p className="text-c-text font-bold text-xl">MAX</p>
                  <span className="flex gap-2 px-2 items-center bg-c-primary text-c-background rounded-md">
                    <input
                      type="number"
                      aria-label="Min Target Value"
                      className="w-14 text-center bg-c-primary text-c-background font-bold"
                      min={1}
                      max={1201}
                    />
                    <p className="text-c-background font-bold">px</p>
                  </span>
                </div>
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
