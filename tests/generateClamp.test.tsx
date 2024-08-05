import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { generateClamp } from "../src/utils/calculations";

const remBase = 16;

interface TestProps {
  minTargetValue: number;
  maxTargetValue: number;
  minWindowValue: number;
  maxWindowValue: number;
  isTargetUnitsPx: boolean;
  isWindowUnitsPx: boolean;
  outputInRem: boolean;
}

const TestComponent = ({
  minTargetValue,
  maxTargetValue,
  minWindowValue,
  maxWindowValue,
  isTargetUnitsPx,
  isWindowUnitsPx,
  outputInRem,
}: TestProps) => {
  const clampValue = generateClamp(
    minTargetValue,
    maxTargetValue,
    minWindowValue,
    maxWindowValue,
    isTargetUnitsPx,
    isWindowUnitsPx,
    remBase,
    outputInRem
  );
  return <div>{clampValue ? clampValue : "none"}</div>;
};

describe("generateClamp", () => {
  it("should return none if minTargetValue value is missing", () => {
    render(
      <TestComponent
        minTargetValue={0}
        maxTargetValue={10}
        minWindowValue={10}
        maxWindowValue={10}
        isTargetUnitsPx={true}
        isWindowUnitsPx={true}
        outputInRem={true}
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
        outputInRem={true}
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
        outputInRem={true}
      />
    );
    expect(screen.getByText("none")).toBeInTheDocument();
  });

  it("should return none if maxWindowValue value is missing", () => {
    render(
      <TestComponent
        minTargetValue={10}
        maxTargetValue={10}
        minWindowValue={0}
        maxWindowValue={0}
        isTargetUnitsPx={true}
        isWindowUnitsPx={true}
        outputInRem={true}
      />
    );
    expect(screen.getByText("none")).toBeInTheDocument();
  });

  it("should generate clamp value in rem", () => {
    render(
      <TestComponent
        minTargetValue={1}
        maxTargetValue={2}
        minWindowValue={25}
        maxWindowValue={50}
        isTargetUnitsPx={false}
        isWindowUnitsPx={false}
        outputInRem={true}
      />
    );
    expect(screen.getByText("clamp(1rem, 0rem + 4vw, 2rem)")).toBeInTheDocument();
  });

  it("should generate clamp value in px", () => {
    render(
      <TestComponent
        minTargetValue={16}
        maxTargetValue={32}
        minWindowValue={320}
        maxWindowValue={640}
        isTargetUnitsPx={true}
        isWindowUnitsPx={true}
        outputInRem={false}
      />
    );
    expect(screen.getByText("clamp(16px, 0px + 5vw, 32px)")).toBeInTheDocument();
  });

  it("should handle mixed units correctly - target units in rem", () => {
    render(
      <TestComponent
        minTargetValue={1}
        maxTargetValue={2}
        minWindowValue={400}
        maxWindowValue={1000}
        isTargetUnitsPx={false}
        isWindowUnitsPx={true}
        outputInRem={true}
      />
    );
    expect(screen.getByText("clamp(1rem, 0.333rem + 2.667vw, 2rem)")).toBeInTheDocument();
  });

  it("should handle mixed units correctly - window units in rem", () => {
    render(
      <TestComponent
        minTargetValue={16}
        maxTargetValue={32}
        minWindowValue={25}
        maxWindowValue={50}
        isTargetUnitsPx={true}
        isWindowUnitsPx={false}
        outputInRem={false}
      />
    );
    expect(screen.getByText("clamp(16px, 0px + 4vw, 32px)")).toBeInTheDocument();
  });
});
