const OptionInput = () => {
  return (
    <div className="flex gap-2 my-2">
      <label htmlFor="clamp-option">Target</label>
      <select className="px-6 rounded-md text-center" name="clamp-option" id="clamp-option">
        <option value="none">None</option>
        <option value="font-size">Font size</option>
        <option value="width">Width</option>
        <option value="padding">Padding</option>
        <option value="margin">Margin</option>
        <option value="padding-left">Padding left</option>
        <option value="padding-right">Padding right</option>
        <option value="margin-left">Margin left</option>
        <option value="margin-right">Margin right</option>
      </select>
    </div>
  );
};

export default OptionInput;
