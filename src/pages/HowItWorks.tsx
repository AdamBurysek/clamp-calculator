import { ClampGraph } from "../components/Icons";

const HowItWorks = () => {
  return (
    <div className="flex w-full max-w-content flex-col items-center px-4">
      <h1 className="py-4 text-c-grey-nine">How Clamp function Works</h1>
      <p className="md:px-20">
        The CSS clamp() function restricts a value within a defined range between a minimum and
        maximum bound. The function takes three parameters: a <b>minimum value</b>, a
        <b>preferred value</b>, and a <b>maximum value</b>.
      </p>
      {/* clamp: font-size: 16px, viewport: 320px -> font-size: 24px, viewport: 540px */}
      <p className="py-4 text-[clamp(1rem,0.273rem+3.636vw,1.5rem)] font-bold">
        clamp(minimum, preferred, maximum)
      </p>
      <ul className="list-disc px-4 py-4">
        <li>
          The <b>minimum</b> is the smallest value that the function will return.
        </li>
        <li>
          The <b>preferred</b> is the value that the function will return if it falls within the
          specified range.
        </li>
        <li>
          The <b>maximum</b> is the largest value that the function will return.
        </li>
      </ul>
      <div className="h-auto max-h-[280px] w-full max-w-[544px]">
        <ClampGraph className="h-full w-full" />
      </div>
    </div>
  );
};

export default HowItWorks;
