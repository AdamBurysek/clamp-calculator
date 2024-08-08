interface Props {
  options: { label: string; value: string }[];
}

const OptionInput = ({ options }: Props) => {
  return (
    <div className="flex gap-2 my-2">
      <label htmlFor="clamp-option">Target</label>
      <select
        className="px-6 rounded-md text-center bg-c-background"
        name="clamp-option"
        id="clamp-option"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionInput;
