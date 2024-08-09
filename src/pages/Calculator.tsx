import AdditionalControls from "../components/AdditionalControls";
import ClampOutputBox from "../components/ClampOutputBox";
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
      {/* clamp: width: 16px, viewport: 320px -> width: 32px, viewport: 1000px */}
      <div className="w-[clamp(80px,445.714px+-114.286vw,400px)] h-20 bg-c-secondary"></div>
    </div>
  );
};

export default Calculator;
