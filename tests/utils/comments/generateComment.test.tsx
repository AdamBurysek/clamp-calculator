import React from "react";
import { render, screen } from "@testing-library/react";
import { generateComment } from "../../../src/utils/comments";

type TestComponentProps = {
  minTargetValue: number;
  maxTargetValue: number;
  minViewportValue: number;
  maxViewportValue: number;
  isTargetUnitsPx: boolean;
  isViewportUnitsPx: boolean;
  outputInPx: boolean;
  remBase: number;
  targetValue: string;
};

const TestComponent: React.FC<TestComponentProps> = ({
  minTargetValue,
  maxTargetValue,
  minViewportValue,
  maxViewportValue,
  isTargetUnitsPx,
  isViewportUnitsPx,
  remBase,
  targetValue,
}) => {
  const comment = generateComment(
    minTargetValue,
    maxTargetValue,
    minViewportValue,
    maxViewportValue,
    isTargetUnitsPx,
    isViewportUnitsPx,
    remBase,
    targetValue
  );
  return <div>{comment}</div>;
};

describe("generateComment", () => {
  it("should handle if minTargetValue value is zero", () => {
    render(
      <TestComponent
        minTargetValue={0}
        maxTargetValue={100}
        minViewportValue={10}
        maxViewportValue={100}
        isTargetUnitsPx={true}
        isViewportUnitsPx={true}
        outputInPx={false}
        remBase={16}
        targetValue={""}
      />
    );
    expect(
      screen.getByText("/* 0px, viewport: 10px -> 100px, viewport: 100px */")
    ).toBeInTheDocument();
  });

  it("should handle if maxTargetValue value is zero", () => {
    render(
      <TestComponent
        minTargetValue={10}
        maxTargetValue={0}
        minViewportValue={10}
        maxViewportValue={100}
        isTargetUnitsPx={true}
        isViewportUnitsPx={true}
        outputInPx={false}
        remBase={16}
        targetValue={""}
      />
    );
    expect(
      screen.getByText("/* 10px, viewport: 10px -> 0px, viewport: 100px */")
    ).toBeInTheDocument();
  });

  it("should handle if minViewportValue value is zero", () => {
    render(
      <TestComponent
        minTargetValue={10}
        maxTargetValue={100}
        minViewportValue={0}
        maxViewportValue={100}
        isTargetUnitsPx={true}
        isViewportUnitsPx={true}
        outputInPx={false}
        remBase={16}
        targetValue={""}
      />
    );
    expect(
      screen.getByText("/* 10px, viewport: 0px -> 100px, viewport: 100px */")
    ).toBeInTheDocument();
  });

  it("should handle if maxViewportValue value is zero", () => {
    render(
      <TestComponent
        minTargetValue={10}
        maxTargetValue={100}
        minViewportValue={10}
        maxViewportValue={0}
        isTargetUnitsPx={true}
        isViewportUnitsPx={true}
        outputInPx={false}
        remBase={16}
        targetValue={""}
      />
    );
    expect(
      screen.getByText("/* 10px, viewport: 10px -> 100px, viewport: 0px */")
    ).toBeInTheDocument();
  });

  it("should generate comment with no target value", () => {
    render(
      <TestComponent
        minTargetValue={1}
        maxTargetValue={2}
        minViewportValue={320}
        maxViewportValue={1024}
        isTargetUnitsPx={false}
        isViewportUnitsPx={true}
        outputInPx={false}
        remBase={16}
        targetValue={""}
      />
    );
    expect(
      screen.getByText("/* 16px, viewport: 320px -> 32px, viewport: 1024px */")
    ).toBeInTheDocument();
  });

  it("should generate comment with target value", () => {
    render(
      <TestComponent
        minTargetValue={16}
        maxTargetValue={32}
        minViewportValue={320}
        maxViewportValue={1024}
        isTargetUnitsPx={true}
        isViewportUnitsPx={true}
        outputInPx={true}
        remBase={16}
        targetValue={"width:"}
      />
    );
    expect(
      screen.getByText("/* width: 16px, viewport: 320px -> width: 32px, viewport: 1024px */")
    ).toBeInTheDocument();
  });
});
