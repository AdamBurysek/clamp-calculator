import InputControls from "../components/InputControls/InputControls";
import RemControls from "../components/RemControls";
import { useGlobalState } from "../context/GlobalStateContext";

const Calculator = () => {
  const { clampValue, outputInRem, setOutputInRem } = useGlobalState();

  const handleCopy = () => {
    if (clampValue) {
      navigator.clipboard.writeText(clampValue);
    }
  };

  return (
    <div className="w-full max-w-content flex flex-col items-center ">
      <h1 className="py-4 bg-gradient-to-r from-c-grey-nine from-20% via-c-primary via-85% to-c-grey-nine to-50% inline-block text-transparent bg-clip-text">
        Easy Clamp Calculation Tool
      </h1>
      <div className="max-s:scale-75">
        <div className="flex flex-col items-center bg-c-secondary rounded-2xl ">
          <h2 className="pt-2">Calculator Settings</h2>
          <RemControls />
          <InputControls />
          <input
            type="checkbox"
            name="outputInRem"
            value="true"
            onChange={() => setOutputInRem(!outputInRem)}
          />
        </div>
        <div className="flex my-4 py-4 pl-4 bg-c-secondary rounded-2xl ">
          <div className="w-full text-center py-4 bg-c-grey-one rounded-l-xl">
            <p>{clampValue}</p>
          </div>
          <button
            className="w-24 bg-c-primary mr-4 text-c-background font-bold rounded-r-xl hover:bg-green-600 active:bg-green-500"
            onClick={handleCopy}
          >
            COPY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
