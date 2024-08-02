import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { booleanToString, getCookie, setCookie, stringToBoolean } from "../utils/cookies";
import { convertUnits } from "../utils/calculations";

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
}

const GlobalStateContext = createContext<GlobalStateProps | undefined>(undefined);

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const initialRemBase = parseInt(getCookie("remBase") || "16", 10);
  const initialTargetUnits = stringToBoolean(getCookie("targetUnits")) || true;
  const initialWindowUnits = stringToBoolean(getCookie("windowUnits")) || true;
  const initialMinTargetValue = parseInt(getCookie("minTargetValue") || "16", 10);
  const initialMaxTargetValue = parseInt(getCookie("maxTargetValue") || "24", 10);
  const initialMinWindowValue = parseInt(getCookie("minWindowValue") || "400", 10);
  const initialMaxWindowValue = parseInt(getCookie("maxWindowValue") || "1024", 10);

  const [remBase, setRemBase] = useState<number>(initialRemBase);
  const [isTargetUnitsPx, setIsTargetUnitsPx] = useState<boolean>(initialTargetUnits);
  const [isWindowUnitsPx, setIsWindowUnitsPx] = useState<boolean>(initialWindowUnits);

  const [minTargetValue, setMinTargetValue] = useState<number>(initialMinTargetValue);
  const [maxTargetValue, setMaxTargetValue] = useState<number>(initialMaxTargetValue);
  const [minWindowValue, setMinWindowValue] = useState<number>(initialMinWindowValue);
  const [maxWindowValue, setMaxWindowValue] = useState<number>(initialMaxWindowValue);

  useEffect(() => {
    setCookie("remBase", remBase.toString(), 30);
  }, [remBase]);

  useEffect(() => {
    setCookie("targetUnits", booleanToString(isTargetUnitsPx), 30);
    setMinTargetValue(convertUnits(minTargetValue, isTargetUnitsPx, remBase));
    setMaxTargetValue(convertUnits(maxTargetValue, isTargetUnitsPx, remBase));
  }, [isTargetUnitsPx]);

  useEffect(() => {
    setCookie("windowUnits", booleanToString(isWindowUnitsPx), 30);
    setMinWindowValue(convertUnits(minWindowValue, isWindowUnitsPx, remBase));
    setMaxWindowValue(convertUnits(maxWindowValue, isWindowUnitsPx, remBase));
  }, [isWindowUnitsPx]);

  useEffect(() => {
    setCookie("minTargetValue", minTargetValue.toString(), 30);
  }, [minTargetValue]);

  useEffect(() => {
    setCookie("maxTargetValue", maxTargetValue.toString(), 30);
  }, [maxTargetValue]);

  useEffect(() => {
    setCookie("minWindowValue", minWindowValue.toString(), 30);
  }, [minWindowValue]);

  useEffect(() => {
    setCookie("maxWindowValue", maxWindowValue.toString(), 30);
  }, [maxWindowValue]);

  return (
    <GlobalStateContext.Provider
      value={{
        remBase,
        setRemBase,
        isTargetUnitsPx,
        setIsTargetUnitsPx,
        isWindowUnitsPx,
        setIsWindowUnitsPx,
        minTargetValue,
        setMinTargetValue,
        maxTargetValue,
        setMaxTargetValue,
        minWindowValue,
        setMinWindowValue,
        maxWindowValue,
        setMaxWindowValue,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
