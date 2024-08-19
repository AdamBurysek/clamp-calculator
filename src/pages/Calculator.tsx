import AdditionalControls from "../components/AdditionalControls";
import ClampOutputBox from "../components/ClampOutput/ClampOutputBox";
import InputControls from "../components/InputControls/InputControls";
import RemControls from "../components/RemControls";

const Calculator = () => {
  return (
    <div className="flex w-full max-w-content flex-col items-center">
      <span className="bg-c-background">
        <h1 className="inline-block bg-gradient-to-r from-c-grey-nine from-20% via-c-primary via-85% to-c-grey-nine to-50% bg-clip-text py-4 text-transparent">
          Easy Clamp Calculation Tool
        </h1>
      </span>
      <div className="max-s:scale-75">
        <div className="flex flex-col items-center rounded-2xl bg-c-secondary">
          <h2 className="pt-2">Calculator Settings</h2>
          <RemControls />
          <InputControls />
          <AdditionalControls />
        </div>
        <ClampOutputBox />
      </div>
    </div>
  );
};

export default Calculator;
