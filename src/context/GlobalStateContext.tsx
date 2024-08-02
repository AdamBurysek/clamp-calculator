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
  // Fix issue with recalulations on initial load
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  const initialRemBase = parseInt(getCookie("remBase") || "16", 10);
  const initialTargetUnits = stringToBoolean(getCookie("targetUnits"));
  const initialWindowUnits = stringToBoolean(getCookie("windowUnits"));
  const initialMinTargetValue = parseFloat(getCookie("minTargetValue") || "16");
  const initialMaxTargetValue = parseFloat(getCookie("maxTargetValue") || "24");
  const initialMinWindowValue = parseFloat(getCookie("minWindowValue") || "400");
  const initialMaxWindowValue = parseFloat(getCookie("maxWindowValue") || "1024");

  const [remBase, setRemBase] = useState<number>(initialRemBase);
  const [isTargetUnitsPx, setIsTargetUnitsPx] = useState<boolean>(initialTargetUnits);
  const [isWindowUnitsPx, setIsWindowUnitsPx] = useState<boolean>(initialWindowUnits);

  const [minTargetValue, setMinTargetValue] = useState<number>(initialMinTargetValue);
  const [maxTargetValue, setMaxTargetValue] = useState<number>(initialMaxTargetValue);
  const [minWindowValue, setMinWindowValue] = useState<number>(initialMinWindowValue);
  const [maxWindowValue, setMaxWindowValue] = useState<number>(initialMaxWindowValue);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  useEffect(() => {
    setCookie("remBase", remBase.toString(), 30);
  }, [remBase]);

  useEffect(() => {
    setCookie("targetUnits", booleanToString(isTargetUnitsPx), 30);
    if (initialLoad) return;
    setMinTargetValue(convertUnits(minTargetValue, isTargetUnitsPx, remBase));
    setMaxTargetValue(convertUnits(maxTargetValue, isTargetUnitsPx, remBase));
  }, [isTargetUnitsPx]);

  useEffect(() => {
    setCookie("windowUnits", booleanToString(isWindowUnitsPx), 30);
    if (initialLoad) return;
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
