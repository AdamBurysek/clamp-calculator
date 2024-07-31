import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { getCookie, setCookie } from "../utils/cookies";

interface GlobalStateProps {
  remBase: number;
  setRemBase: React.Dispatch<React.SetStateAction<number>>;
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

  useEffect(() => {
    setCookie("remBase", remBase.toString(), 30);
  }, [remBase]);

  return (
    <GlobalStateContext.Provider value={{ remBase, setRemBase }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
