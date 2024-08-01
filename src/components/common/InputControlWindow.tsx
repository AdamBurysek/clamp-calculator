import ToggleUnitButton from "./ToggleUnitButton";

const InputControlWindow = () => {
  return (
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
  );
};

export default InputControlWindow;
