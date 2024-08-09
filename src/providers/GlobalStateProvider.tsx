/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import { convertUnits } from "../utils/calculations";
import { booleanToString, getCookie, setCookie, stringToBoolean } from "../utils/cookies";
import { GlobalStateContext } from "./GlobalStateContext";
import { generateComment } from "../utils/comments";
import { generateClamp } from "../utils/clamps";

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  // Fix issue with recalulations on initial load
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  const initialRemBase = parseInt(getCookie("remBase") || "16", 10);
  const initialTargetUnits = stringToBoolean(getCookie("targetUnitsPx"));
  const initialViewportUnits = stringToBoolean(getCookie("viewportUnitsPx"));
  const initialMinTargetValue = parseFloat(getCookie("minTargetValue") || "16");
  const initialMaxTargetValue = parseFloat(getCookie("maxTargetValue") || "24");
  const initialMinViewportValue = parseFloat(getCookie("minViewportValue") || "400");
  const initialMaxViewportValue = parseFloat(getCookie("maxViewportValue") || "1024");
  const initialOutputInPx = stringToBoolean(getCookie("outputInPx"), false);
  const initialAddComment = stringToBoolean(getCookie("addComment"), false);
  const initialTargetValue = getCookie("targetValue") || "";
  const initialUseTailwind = stringToBoolean(getCookie("useTailwind"), false);

  const [remBase, setRemBase] = useState<number>(initialRemBase);
  const [isTargetUnitsPx, setIsTargetUnitsPx] = useState<boolean>(initialTargetUnits);
  const [isViewportUnitsPx, setIsViewportUnitsPx] = useState<boolean>(initialViewportUnits);

  const [minTargetValue, setMinTargetValue] = useState<number>(initialMinTargetValue);
  const [maxTargetValue, setMaxTargetValue] = useState<number>(initialMaxTargetValue);
  const [minViewportValue, setMinViewportValue] = useState<number>(initialMinViewportValue);
  const [maxViewportValue, setMaxViewportValue] = useState<number>(initialMaxViewportValue);

  const [outputInPx, setOutputInPx] = useState<boolean>(initialOutputInPx);
  const [addComment, setAddComment] = useState<boolean>(initialAddComment);
  const [useTailwind, setUseTailwind] = useState<boolean>(initialUseTailwind);
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
    setCookie("viewportUnitsPx", booleanToString(isViewportUnitsPx), 30);
    if (initialLoad) return;
    setMinViewportValue(convertUnits(minViewportValue, isViewportUnitsPx, remBase));
    setMaxViewportValue(convertUnits(maxViewportValue, isViewportUnitsPx, remBase));
  }, [isViewportUnitsPx]);

  useEffect(() => {
    setCookie("minTargetValue", minTargetValue.toString(), 30);
  }, [minTargetValue]);

  useEffect(() => {
    setCookie("maxTargetValue", maxTargetValue.toString(), 30);
  }, [maxTargetValue]);

  useEffect(() => {
    setCookie("minViewportValue", minViewportValue.toString(), 30);
  }, [minViewportValue]);

  useEffect(() => {
    setCookie("maxViewportValue", maxViewportValue.toString(), 30);
  }, [maxViewportValue]);

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
    setCookie("useTailwind", booleanToString(useTailwind), 30);
  }, [useTailwind]);

  useEffect(() => {
    setClampValue(
      generateClamp(
        minTargetValue,
        maxTargetValue,
        minViewportValue,
        maxViewportValue,
        isTargetUnitsPx,
        isViewportUnitsPx,
        remBase,
        outputInPx,
        useTailwind
      )
    );
    setCommentValue(
      generateComment(
        minTargetValue,
        maxTargetValue,
        minViewportValue,
        maxViewportValue,
        isTargetUnitsPx,
        isViewportUnitsPx,
        remBase,
        targetValue,
        useTailwind
      )
    );
  }, [
    minTargetValue,
    maxTargetValue,
    minViewportValue,
    maxViewportValue,
    isTargetUnitsPx,
    isViewportUnitsPx,
    remBase,
    outputInPx,
    targetValue,
    useTailwind,
  ]);

  return (
    <GlobalStateContext.Provider
      value={{
        remBase,
        setRemBase,
        isTargetUnitsPx,
        setIsTargetUnitsPx,
        isViewportUnitsPx,
        setIsViewportUnitsPx,
        minTargetValue,
        setMinTargetValue,
        maxTargetValue,
        setMaxTargetValue,
        minViewportValue,
        setMinViewportValue,
        maxViewportValue,
        setMaxViewportValue,
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
        useTailwind,
        setUseTailwind,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
