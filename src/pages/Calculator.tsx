import AdditionalControls from "../components/AdditionalControls";
import ClampOutputBox from "../components/ClampOutput/ClampOutputBox";
import InputControls from "../components/InputControls/InputControls";
import RemControls from "../components/RemControls";

const Calculator = () => {
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
          <AdditionalControls />
        </div>
        <ClampOutputBox />
      </div>
      {/* clamp: 32px, viewport: 320px -> 960px, viewport: 1500px */}
      <div className="w-[clamp(2rem,-13.729rem+78.644vw,60rem)] h-20 bg-c-secondary"></div>
    </div>
  );
};

export default Calculator;
