import React from "react";
import { render, screen } from "@testing-library/react";
import { generateComment } from "../../../src/utils/comments";

type TestComponentProps = {
  minTargetValue: number;
  maxTargetValue: number;
  minWindowValue: number;
  maxWindowValue: number;
  isTargetUnitsPx: boolean;
  isWindowUnitsPx: boolean;
  outputInPx: boolean;
  remBase: number;
  targetValue: string;
};

const TestComponent: React.FC<TestComponentProps> = ({
  minTargetValue,
  maxTargetValue,
  minWindowValue,
  maxWindowValue,
  isTargetUnitsPx,
  isWindowUnitsPx,
  remBase,
  targetValue,
}) => {
  const comment = generateComment(
    minTargetValue,
    maxTargetValue,
    minWindowValue,
    maxWindowValue,
    isTargetUnitsPx,
    isWindowUnitsPx,
    remBase,
    targetValue
  );
  return <div>{comment ? comment : "none"}</div>;
};

describe("generateComment", () => {
  it("should return none if minTargetValue value is missing", () => {
    render(
      <TestComponent
        minTargetValue={0}
        maxTargetValue={10}
        minWindowValue={10}
        maxWindowValue={10}
        isTargetUnitsPx={true}
        isWindowUnitsPx={true}
        outputInPx={false}
        remBase={16}
        targetValue={""}
      />
    );
    expect(screen.getByText("none")).toBeInTheDocument();
  });

  it("should return none if maxTargetValue value is missing", () => {
    render(
      <TestComponent
        minTargetValue={10}
        maxTargetValue={0}
        minWindowValue={10}
        maxWindowValue={10}
        isTargetUnitsPx={true}
        isWindowUnitsPx={true}
        outputInPx={false}
        remBase={16}
        targetValue={""}
      />
    );
    expect(screen.getByText("none")).toBeInTheDocument();
  });

  it("should return none if minWindowValue value is missing", () => {
    render(
      <TestComponent
        minTargetValue={10}
        maxTargetValue={10}
        minWindowValue={0}
        maxWindowValue={10}
        isTargetUnitsPx={true}
        isWindowUnitsPx={true}
        outputInPx={false}
        remBase={16}
        targetValue={""}
      />
    );
    expect(screen.getByText("none")).toBeInTheDocument();
  });

  it("should return none if maxWindowValue value is missing", () => {
    render(
      <TestComponent
        minTargetValue={10}
        maxTargetValue={10}
        minWindowValue={10}
        maxWindowValue={0}
        isTargetUnitsPx={true}
        isWindowUnitsPx={true}
        outputInPx={false}
        remBase={16}
        targetValue={""}
      />
    );
    expect(screen.getByText("none")).toBeInTheDocument();
  });

  it("should generate comment with no target value", () => {
    render(
      <TestComponent
        minTargetValue={1}
        maxTargetValue={2}
        minWindowValue={320}
        maxWindowValue={1024}
        isTargetUnitsPx={false}
        isWindowUnitsPx={true}
        outputInPx={false}
        remBase={16}
        targetValue={""}
      />
    );
    expect(
      screen.getByText("/* 16px, window: 320px -> 32px, window: 1024px */")
    ).toBeInTheDocument();
  });

  it("should generate comment with target value", () => {
    render(
      <TestComponent
        minTargetValue={16}
        maxTargetValue={32}
        minWindowValue={320}
        maxWindowValue={1024}
        isTargetUnitsPx={true}
        isWindowUnitsPx={true}
        outputInPx={true}
        remBase={16}
        targetValue={"width:"}
      />
    );
    expect(
      screen.getByText("/* width: 16px, window: 320px -> width: 32px, window: 1024px */")
    ).toBeInTheDocument();
  });
});
