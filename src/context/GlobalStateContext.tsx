import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import {
  booleanToString,
  getCookie,
  setCookie,
  stringToBoolean,
} from "../utils/cookies";

interface GlobalStateProps {
  remBase: number;
  setRemBase: React.Dispatch<React.SetStateAction<number>>;
  isTargetUnitsPx: boolean;
  setIsTargetUnitsPx: React.Dispatch<React.SetStateAction<boolean>>;
  isWindowUnitsPx: boolean;
  setIsWindowUnitsPx: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalStateContext = createContext<GlobalStateProps | undefined>(
  undefined
);

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const initialRemBase = parseInt(getCookie("remBase") || "16", 10);
  const [remBase, setRemBase] = useState<number>(initialRemBase);
  const initialTargetUnits = stringToBoolean(getCookie("targetUnits")) || true;
  const [isTargetUnitsPx, setIsTargetUnitsPx] =
    useState<boolean>(initialTargetUnits);
  const initialWindowtUnits = stringToBoolean(getCookie("windowUnits")) || true;
  const [isWindowUnitsPx, setIsWindowUnitsPx] =
    useState<boolean>(initialWindowtUnits);

  useEffect(() => {
    setCookie("remBase", remBase.toString(), 30);
  }, [remBase]);

  useEffect(() => {
    setCookie("targetUnits", booleanToString(isTargetUnitsPx), 30);
  }, [isTargetUnitsPx]);

  useEffect(() => {
    setCookie("windowUnits", booleanToString(isWindowUnitsPx), 30);
  }, [isWindowUnitsPx]);

  return (
    <GlobalStateContext.Provider
      value={{
        remBase,
        setRemBase,
        isTargetUnitsPx,
        setIsTargetUnitsPx,
        isWindowUnitsPx,
        setIsWindowUnitsPx,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
