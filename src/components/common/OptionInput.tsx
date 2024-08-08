interface Props {
  label: string;
  name: string;
  options: { label: string; value: string }[];
}

const OptionInput = ({ label, name, options }: Props) => {
  return (
    <div className="flex gap-2 my-2">
      <label htmlFor={name}>{label}</label>
      <select className="px-6 rounded-md text-center bg-c-background" name={name} id={name}>
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
