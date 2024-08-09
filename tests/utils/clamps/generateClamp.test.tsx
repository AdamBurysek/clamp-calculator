import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { generateClamp } from "../../../src/utils/clamps";

interface TestProps {
  minTargetValue: number;
  maxTargetValue: number;
  minViewportValue: number;
  maxViewportValue: number;
  isTargetUnitsPx: boolean;
  isViewportUnitsPx: boolean;
  remBase: number;
  outputInPx: boolean;
  useTailwind: boolean;
}

const TestComponent: React.FC<TestProps> = ({
  minTargetValue,
  maxTargetValue,
  minViewportValue,
  maxViewportValue,
  isTargetUnitsPx,
  isViewportUnitsPx,
  remBase,
  outputInPx,
  useTailwind,
}) => {
  const clampValue = generateClamp(
    minTargetValue,
    maxTargetValue,
    minViewportValue,
    maxViewportValue,
    isTargetUnitsPx,
    isViewportUnitsPx,
    remBase,
    outputInPx,
    useTailwind
  );
  return <div>{clampValue}</div>;
};

describe("generateClamp", () => {
  it("should handle if minTargetValue value is zero", () => {
    render(
      <TestComponent
        minTargetValue={0}
        maxTargetValue={100}
        minViewportValue={10}
        maxViewportValue={100}
        isTargetUnitsPx={true}
        isViewportUnitsPx={true}
        remBase={16}
        outputInPx={false}
        useTailwind={false}
      />
    );
    expect(screen.getByText("clamp(0rem, -0.694rem + 111.111vw, 6.25rem)")).toBeInTheDocument();
  });

  it("should handle if maxTargetValue value is zero", () => {
    render(
      <TestComponent
        minTargetValue={100}
        maxTargetValue={0}
        minViewportValue={10}
        maxViewportValue={100}
        isTargetUnitsPx={true}
        isViewportUnitsPx={true}
        remBase={16}
        outputInPx={false}
        useTailwind={false}
      />
    );
    expect(screen.getByText("clamp(6.25rem, 6.944rem + -111.111vw, 0rem)")).toBeInTheDocument();
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
        remBase={16}
        outputInPx={false}
        useTailwind={false}
      />
    );
    expect(screen.getByText("clamp(0.625rem, 0.625rem + 90vw, 6.25rem)")).toBeInTheDocument();
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
        remBase={16}
        outputInPx={false}
        useTailwind={false}
      />
    );
    expect(screen.getByText("clamp(0.625rem, 6.25rem + -900vw, 6.25rem)")).toBeInTheDocument();
  });

  it("should handle negative target values", () => {
    render(
      <TestComponent
        minTargetValue={-10}
        maxTargetValue={-5}
        minViewportValue={10}
        maxViewportValue={100}
        isTargetUnitsPx={false}
        isViewportUnitsPx={true}
        remBase={16}
        outputInPx={false}
        useTailwind={false}
      />
    );
    expect(screen.getByText("clamp(-10rem, -10.556rem + 88.889vw, -5rem)")).toBeInTheDocument();
  });

  it("should handle negative viewport values", () => {
    render(
      <TestComponent
        minTargetValue={10}
        maxTargetValue={100}
        minViewportValue={-1000}
        maxViewportValue={-500}
        isTargetUnitsPx={true}
        isViewportUnitsPx={true}
        remBase={16}
        outputInPx={false}
        useTailwind={false}
      />
    );
    expect(screen.getByText("clamp(0.625rem, 11.875rem + 18vw, 6.25rem)")).toBeInTheDocument();
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
        remBase={16}
        outputInPx={false}
        useTailwind={false}
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
        remBase={16}
        outputInPx={true}
        useTailwind={false}
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
        remBase={16}
        outputInPx={false}
        useTailwind={false}
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
        remBase={16}
        outputInPx={true}
        useTailwind={false}
      />
    );
    expect(screen.getByText("clamp(16px, 0px + 4vw, 32px)")).toBeInTheDocument();
  });

  it("should handle remBase change", () => {
    render(
      <TestComponent
        minTargetValue={2}
        maxTargetValue={4}
        minViewportValue={320}
        maxViewportValue={1024}
        isTargetUnitsPx={false}
        isViewportUnitsPx={true}
        remBase={8}
        outputInPx={true}
        useTailwind={false}
      />
    );
    expect(screen.getByText("clamp(16px, 8.727px + 2.273vw, 32px)")).toBeInTheDocument();
  });

  it("should handle useTailwind option", () => {
    render(
      <TestComponent
        minTargetValue={1}
        maxTargetValue={2}
        minViewportValue={320}
        maxViewportValue={1024}
        isTargetUnitsPx={false}
        isViewportUnitsPx={true}
        remBase={16}
        outputInPx={false}
        useTailwind={true}
      />
    );
    expect(screen.getByText("[clamp(1rem,0.545rem+2.273vw,2rem)]")).toBeInTheDocument();
  });
});