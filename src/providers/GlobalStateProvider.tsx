/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import { convertUnits, generateClamp } from "../utils/calculations";
import { booleanToString, getCookie, setCookie, stringToBoolean } from "../utils/cookies";
import { GlobalStateContext } from "./GlobalStateContext";
import { generateComment } from "../utils/comments";

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  // Fix issue with recalulations on initial load
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  const initialRemBase = parseInt(getCookie("remBase") || "16", 10);
  const initialTargetUnits = stringToBoolean(getCookie("targetUnitsPx"));
  const initialWindowUnits = stringToBoolean(getCookie("windowUnitsPx"));
  const initialMinTargetValue = parseFloat(getCookie("minTargetValue") || "16");
  const initialMaxTargetValue = parseFloat(getCookie("maxTargetValue") || "24");
  const initialMinWindowValue = parseFloat(getCookie("minWindowValue") || "400");
  const initialMaxWindowValue = parseFloat(getCookie("maxWindowValue") || "1024");
  const initialOutputInPx = stringToBoolean(getCookie("outputInPx"), false);
  const initialAddComment = stringToBoolean(getCookie("addComment"), false);
  const initialTargetValue = getCookie("targetValue") || "";

  const [remBase, setRemBase] = useState<number>(initialRemBase);
  const [isTargetUnitsPx, setIsTargetUnitsPx] = useState<boolean>(initialTargetUnits);
  const [isWindowUnitsPx, setIsWindowUnitsPx] = useState<boolean>(initialWindowUnits);

  const [minTargetValue, setMinTargetValue] = useState<number>(initialMinTargetValue);
  const [maxTargetValue, setMaxTargetValue] = useState<number>(initialMaxTargetValue);
  const [minWindowValue, setMinWindowValue] = useState<number>(initialMinWindowValue);
  const [maxWindowValue, setMaxWindowValue] = useState<number>(initialMaxWindowValue);

  const [outputInPx, setOutputInPx] = useState<boolean>(initialOutputInPx);
  const [addComment, setAddComment] = useState<boolean>(initialAddComment);
  const [targetValue, setTargetValue] = useState<string>(initialTargetValue);
  const [clampValue, setClampValue] = useState<string>("");
  const [commentValue, setCommentValue] = useState<string>("");

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  useEffect(() => {
    setCookie("remBase", remBase.toString(), 30);
  }, [remBase]);

  useEffect(() => {
    setCookie("targetUnitsPx", booleanToString(isTargetUnitsPx), 30);
    if (initialLoad) return;
    setMinTargetValue(convertUnits(minTargetValue, isTargetUnitsPx, remBase));
    setMaxTargetValue(convertUnits(maxTargetValue, isTargetUnitsPx, remBase));
  }, [isTargetUnitsPx]);

  useEffect(() => {
    setCookie("windowUnitsPx", booleanToString(isWindowUnitsPx), 30);
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

  useEffect(() => {
    setCookie("outputInPx", booleanToString(outputInPx), 30);
  }, [outputInPx]);

  useEffect(() => {
    setCookie("addComment", booleanToString(addComment), 30);
  }, [addComment]);

  useEffect(() => {
    setCookie("targetValue", targetValue, 30);
  }, [targetValue]);

  useEffect(() => {
    setClampValue(
      generateClamp(
        minTargetValue,
        maxTargetValue,
        minWindowValue,
        maxWindowValue,
        isTargetUnitsPx,
        isWindowUnitsPx,
        remBase,
        outputInPx
      )
    );
    setCommentValue(
      generateComment(
        minTargetValue,
        maxTargetValue,
        minWindowValue,
        maxWindowValue,
        isTargetUnitsPx,
        isWindowUnitsPx,
        remBase,
        targetValue
      )
    );
  }, [
    minTargetValue,
    maxTargetValue,
    minWindowValue,
    maxWindowValue,
    isTargetUnitsPx,
    isWindowUnitsPx,
    remBase,
    outputInPx,
    targetValue,
  ]);

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
        clampValue,
        setClampValue,
        outputInPx,
        setOutputInPx,
        targetValue,
        setTargetValue,
        commentValue,
        setCommentValue,
        addComment,
        setAddComment,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
