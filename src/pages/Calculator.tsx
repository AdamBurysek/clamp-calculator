import ClampOutputBox from "../components/ClampOutputBox";
import InputControls from "../components/InputControls/InputControls";
import RemControls from "../components/RemControls";
import useGlobalState from "../hooks/useGlobalState";

const Calculator = () => {
  const { outputInPx, setOutputInPx } = useGlobalState();

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
          <div className="flex items-center">
            <div className="relative flex cursor-pointer items-center rounded-full p-3">
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-c-background transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-c-background before:opacity-0 before:transition-opacity checked:border-c-primary checked:bg-c-primary checked:before:bg-c-primary hover:before:opacity-10"
                onChange={() => setOutputInPx(!outputInPx)}
                checked={!outputInPx}
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-c-background opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <label>Output in pixels</label>
          </div>
        </div>
        <ClampOutputBox />
      </div>
    </div>
  );
};

export default Calculator;
