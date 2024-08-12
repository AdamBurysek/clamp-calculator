import { createContext } from "react";
import { GlobalStateProps } from "./GlobalStateTypes";

export const GlobalStateContext = createContext<GlobalStateProps | undefined>(undefined);
