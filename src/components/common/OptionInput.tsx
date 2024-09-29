interface Props {
  label: string
  name: string
  options: { label: string; value: string }[]
  setValue: (value: string) => void
  value: string
}

const OptionInput = ({ label, name, options, setValue, value }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }
  return (
    <div className="my-2 flex gap-2">
      <label htmlFor={name}>{label}</label>
      <select
        className="rounded-md bg-c-background px-6 text-center"
        name={name}
        id={name}
        onChange={onChange}
        defaultValue={value}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default OptionInput
