import React from "react";
import { render, screen } from "@testing-library/react";
import { generateComment } from "../../../src/utils/comments";

type TestComponentProps = {
  minTargetValue?: number;
  maxTargetValue?: number;
  minViewportValue?: number;
  maxViewportValue?: number;
  isTargetUnitsPx?: boolean;
  isViewportUnitsPx?: boolean;
  outputInPx?: boolean;
  remBase?: number;
  targetValue?: string;
  customTaregtValue?: string;
  useTailwind?: boolean;
};

const TestComponent: React.FC<TestComponentProps> = ({
  minTargetValue = 10,
  maxTargetValue = 100,
  minViewportValue = 10,
  maxViewportValue = 100,
  isTargetUnitsPx = true,
  isViewportUnitsPx = true,
  remBase = 16,
  targetValue = "",
  customTaregtValue = "",
  useTailwind = false,
}) => {
  const comment = generateComment(
    minTargetValue,
    maxTargetValue,
    minViewportValue,
    maxViewportValue,
    isTargetUnitsPx,
    isViewportUnitsPx,
    remBase,
    targetValue,
    customTaregtValue,
    useTailwind,
  );
  return <div>{comment}</div>;
};

describe("generateComment", () => {
  it("should handle if minTargetValue value is zero", () => {
    render(<TestComponent minTargetValue={0} />);
    expect(
      screen.getByText("/* 0px, viewport: 10px -> 100px, viewport: 100px */"),
    ).toBeInTheDocument();
  });

  it("should handle if maxTargetValue value is zero", () => {
    render(<TestComponent maxTargetValue={0} />);
    expect(
      screen.getByText("/* 10px, viewport: 10px -> 0px, viewport: 100px */"),
    ).toBeInTheDocument();
  });

  it("should handle if minViewportValue value is zero", () => {
    render(<TestComponent minViewportValue={0} />);
    expect(
      screen.getByText("/* 10px, viewport: 0px -> 100px, viewport: 100px */"),
    ).toBeInTheDocument();
  });

  it("should handle if maxViewportValue value is zero", () => {
    render(<TestComponent maxViewportValue={0} />);
    expect(
      screen.getByText("/* 10px, viewport: 10px -> 100px, viewport: 0px */"),
    ).toBeInTheDocument();
  });

  it("should handle negative target values", () => {
    render(<TestComponent minTargetValue={-10} maxTargetValue={-1} />);
    expect(
      screen.getByText("/* -10px, viewport: 10px -> -1px, viewport: 100px */"),
    ).toBeInTheDocument();
  });

  it("should handle negative viewport values", () => {
    render(<TestComponent minViewportValue={-10} maxViewportValue={-1} />);
    expect(
      screen.getByText("/* 10px, viewport: -10px -> 100px, viewport: -1px */"),
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
      />,
    );
    expect(
      screen.getByText("/* 16px, viewport: 320px -> 32px, viewport: 1024px */"),
    ).toBeInTheDocument();
  });

  it("should generate comment with target value", () => {
    render(
      <TestComponent
        minTargetValue={16}
        maxTargetValue={32}
        minViewportValue={320}
        maxViewportValue={1024}
        targetValue={"width:"}
      />,
    );
    expect(
      screen.getByText("/* width: 16px, viewport: 320px -> width: 32px, viewport: 1024px */"),
    ).toBeInTheDocument();
  });

  it("should generate comment with custom target value", () => {
    render(<TestComponent customTaregtValue={"--fs-heading1:"} />);
    expect(
      screen.getByText(
        "/* --fs-heading1: 10px, viewport: 10px -> --fs-heading1: 100px, viewport: 100px */",
      ),
    ).toBeInTheDocument();
  });

  it("should override target value with custom target value", () => {
    render(<TestComponent targetValue={"width:"} customTaregtValue={"--fs-heading1:"} />);
    expect(
      screen.getByText(
        "/* --fs-heading1: 10px, viewport: 10px -> --fs-heading1: 100px, viewport: 100px */",
      ),
    ).toBeInTheDocument();
  });

  it("should handle remBase change", () => {
    render(
      <TestComponent
        minTargetValue={2}
        maxTargetValue={4}
        minViewportValue={320}
        maxViewportValue={1024}
        isTargetUnitsPx={false}
        remBase={8}
        targetValue={"font-size:"}
      />,
    );
    expect(
      screen.getByText(
        "/* font-size: 16px, viewport: 320px -> font-size: 32px, viewport: 1024px */",
      ),
    ).toBeInTheDocument();
  });

  it("should handle useTailwind option", () => {
    render(
      <TestComponent
        minTargetValue={1}
        maxTargetValue={2}
        minViewportValue={320}
        maxViewportValue={1024}
        isTargetUnitsPx={false}
        useTailwind={true}
      />,
    );
    expect(
      screen.getByText("{/* clamp: 16px, viewport: 320px -> 32px, viewport: 1024px */}"),
    ).toBeInTheDocument();
  });
});
