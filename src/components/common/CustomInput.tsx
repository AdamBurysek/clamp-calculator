interface Props {
  label: string;
  name: string;
  value: string;
  setValue: (value: string) => void;
}

const CustomInput = ({ label, name, value, setValue }: Props) => {
  return (
    <div className="flex gap-2">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        className="rounded-md bg-c-background px-2"
        name={name}
        id={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default CustomInput;
