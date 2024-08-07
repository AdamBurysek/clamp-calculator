interface GlobalStateProps {
  remBase: number;
  setRemBase: React.Dispatch<React.SetStateAction<number>>;
  isTargetUnitsPx: boolean;
  setIsTargetUnitsPx: React.Dispatch<React.SetStateAction<boolean>>;
  isWindowUnitsPx: boolean;
  setIsWindowUnitsPx: React.Dispatch<React.SetStateAction<boolean>>;
  minTargetValue: number;
  setMinTargetValue: React.Dispatch<React.SetStateAction<number>>;
  maxTargetValue: number;
  setMaxTargetValue: React.Dispatch<React.SetStateAction<number>>;
  minWindowValue: number;
  setMinWindowValue: React.Dispatch<React.SetStateAction<number>>;
  maxWindowValue: number;
  setMaxWindowValue: React.Dispatch<React.SetStateAction<number>>;
  clampValue: string;
  setClampValue: React.Dispatch<React.SetStateAction<string>>;
  outputInPx: boolean;
  setOutputInPx: React.Dispatch<React.SetStateAction<boolean>>;
}
