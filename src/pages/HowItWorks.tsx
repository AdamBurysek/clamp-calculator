import { ClampGraph } from "../components/Icons";

const HowItWorks = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="py-4 text-c-grey-nine">How Clamp function Works</h1>
      <div className="h-auto max-h-[280px] w-full max-w-[544px]">
        <ClampGraph className="h-full w-full" />
      </div>
    </div>
  );
};

export default HowItWorks;
