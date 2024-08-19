import { useId } from "react";

interface GridPatternProps {
  width: number;
  height: number;
  x: string;
  y: string;
  squares: number[][];
  className?: string;
}

const features = [
  {
    title: "Comments",
    description: "You can generate a comment that explains the clamp function.",
  },
  {
    title: "Custom Target",
    description: "You can use custom target values like --fs-heading1, commonly used in CSS.",
  },
  {
    title: "Tailwind Support",
    description: "Tailwind support is included.",
  },
  {
    title: "Pixels Output",
    description: "Unlike many other calculators, this one allows you to output results in pixels.",
  },
  {
    title: "Dark Mode",
    description: "The calculator is available in both light and dark modes.",
  },
  {
    title: "Open Source",
    description: "The source code is available on GitHub.",
  },
];

function About() {
  return (
    <div className="flex max-w-content flex-col items-center px-20">
      <h1 className="py-4 text-c-grey-nine">About the Calculator</h1>
      <p className="pb-8">I aim to improve this calculator by adding new features.</p>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="to-c-background-pure relative overflow-hidden rounded-3xl bg-gradient-to-b from-c-background p-6"
          >
            <Grid size={20} />
            <p className="relative z-20 text-base font-bold text-c-grey-nine">{feature.title}</p>
            <p className="relative z-20 mt-4 text-base font-normal text-c-grey-eight">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const Grid = ({ pattern, size }: { pattern?: number[][]; size?: number }) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-c-secondary to-c-grey-one opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full fill-c-grey-two stroke-c-grey-two mix-blend-overlay"
        />
      </div>
    </div>
  );
};

function GridPattern({ width, height, x, y, squares, className }: GridPatternProps) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" className={className}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: number[]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export default About;
