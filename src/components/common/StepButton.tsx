interface Props {
  type: "increment" | "decrement";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StepButton = ({ type, onClick }: Props) => {
  return (
    <button
      className="w-12 h-12 pb-1 bg-c-primary rounded-full text-c-background text-2xl font-bold flex items-center justify-center"
      onClick={onClick}
      data-type={type}
    >
      {type === "increment" ? "+" : "-"}
    </button>
  );
};

export default StepButton;
