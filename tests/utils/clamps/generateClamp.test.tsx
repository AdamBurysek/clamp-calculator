import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { generateClamp } from "../../../src/utils/clamps";

const remBase = 16;

interface TestProps {
  minTargetValue: number;
  maxTargetValue: number;
  minViewportValue: number;
  maxViewportValue: number;
  isTargetUnitsPx: boolean;
  isViewportUnitsPx: boolean;
  outputInPx: boolean;
}

const TestComponent: React.FC<TestProps> = ({
  minTargetValue,
  maxTargetValue,
  minViewportValue,
  maxViewportValue,
  isTargetUnitsPx,
  isViewportUnitsPx,
  outputInPx,
}) => {
  const clampValue = generateClamp(
    minTargetValue,
    maxTargetValue,
    minViewportValue,
    maxViewportValue,
    isTargetUnitsPx,
    isViewportUnitsPx,
    remBase,
    outputInPx
  );
  return <div>{clampValue ? clampValue : "none"}</div>;
};

describe("generateClamp", () => {
  it("should return none if minTargetValue value is missing", () => {
    render(
      <TestComponent
        minTargetValue={0}
        maxTargetValue={10}
        minViewportValue={10}
        maxViewportValue={10}
        isTargetUnitsPx={true}
        isViewportUnitsPx={true}
        outputInPx={false}
      />
    );
    expect(screen.getByText("none")).toBeInTheDocument();
  });

  it("should return none if maxTargetValue value is missing", () => {
    render(
      <TestComponent
        minTargetValue={10}
        maxTargetValue={0}
        minViewportValue={10}
        maxViewportValue={10}
        isTargetUnitsPx={true}
        isViewportUnitsPx={true}
        outputInPx={false}
      />
    );
    expect(screen.getByText("none")).toBeInTheDocument();
  });

  it("should return none if minViewportValue value is missing", () => {
    render(
      <TestComponent
        minTargetValue={10}
        maxTargetValue={10}
        minViewportValue={0}
        maxViewportValue={10}
        isTargetUnitsPx={true}
        isViewportUnitsPx={true}
        outputInPx={false}
      />
    );
    expect(screen.getByText("none")).toBeInTheDocument();
  });

  it("should return none if maxViewportValue value is missing", () => {
    render(
      <TestComponent
        minTargetValue={10}
        maxTargetValue={10}
        minViewportValue={0}
        maxViewportValue={0}
        isTargetUnitsPx={true}
        isViewportUnitsPx={true}
        outputInPx={false}
      />
    );
    expect(screen.getByText("none")).toBeInTheDocument();
  });

  it("should generate clamp value in rem", () => {
    render(
      <TestComponent
        minTargetValue={1}
        maxTargetValue={2}
        minViewportValue={25}
        maxViewportValue={50}
        isTargetUnitsPx={false}
        isViewportUnitsPx={false}
        outputInPx={false}
      />
    );
    expect(screen.getByText("clamp(1rem, 0rem + 4vw, 2rem)")).toBeInTheDocument();
  });

  it("should generate clamp value in px", () => {
    render(
      <TestComponent
        minTargetValue={16}
        maxTargetValue={32}
        minViewportValue={320}
        maxViewportValue={640}
        isTargetUnitsPx={true}
        isViewportUnitsPx={true}
        outputInPx={true}
      />
    );
    expect(screen.getByText("clamp(16px, 0px + 5vw, 32px)")).toBeInTheDocument();
  });

  it("should handle mixed units correctly - target units in rem", () => {
    render(
      <TestComponent
        minTargetValue={1}
        maxTargetValue={2}
        minViewportValue={400}
        maxViewportValue={1000}
        isTargetUnitsPx={false}
        isViewportUnitsPx={true}
        outputInPx={false}
      />
    );
    expect(screen.getByText("clamp(1rem, 0.333rem + 2.667vw, 2rem)")).toBeInTheDocument();
  });

  it("should handle mixed units correctly - viewport units in rem", () => {
    render(
      <TestComponent
        minTargetValue={16}
        maxTargetValue={32}
        minViewportValue={25}
        maxViewportValue={50}
        isTargetUnitsPx={true}
        isViewportUnitsPx={false}
        outputInPx={true}
      />
    );
    expect(screen.getByText("clamp(16px, 0px + 4vw, 32px)")).toBeInTheDocument();
  });
});
