interface Props {
  type: "increment" | "decrement";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StepButton = ({ type, onClick }: Props) => {
  return (
    <button
      className="w-12 h-12 pb-1 bg-c-primary rounded-full text-c-background text-xl font-bold flex items-center justify-center hover:drop-shadow-hover transition-[filter] duration-300 ease-out hover:ease-in"
      onClick={onClick}
      data-type={type}
    >
      {type === "increment" ? "+" : "-"}
    </button>
  );
};

export default StepButton;
