import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { booleanToString, getCookie, setCookie, stringToBoolean } from "../utils/cookies";
import { convertUnits } from "../utils/calculations";

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

  const toRem = (value: number, isPx: boolean): number => {
    return isPx ? value / remBase : value;
  };

  const formatNumber = (value: number): string => {
    if (value === 0) return "0";
    return parseFloat(value.toFixed(3)).toString();
  };

  const generateClamp = (): string => {
    const minTargetRem = toRem(minTargetValue, isTargetUnitsPx);
    const maxTargetRem = toRem(maxTargetValue, isTargetUnitsPx);
    const minWindowRem = toRem(minWindowValue, isWindowUnitsPx);
    const maxWindowRem = toRem(maxWindowValue, isWindowUnitsPx);

    const slope = (maxTargetRem - minTargetRem) / (maxWindowRem - minWindowRem);
    const intercept = minTargetRem - slope * minWindowRem;

    const slopePercentage = slope * 100;

    return `clamp(${formatNumber(minTargetRem)}rem, ${formatNumber(intercept)}rem + ${formatNumber(
      slopePercentage
    )}vw, ${formatNumber(maxTargetRem)}rem)`;
  };

  useEffect(() => {
    console.log(generateClamp());
  }, [minTargetValue, maxTargetValue, minWindowValue, maxWindowValue]);

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
