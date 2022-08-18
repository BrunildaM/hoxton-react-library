import { useState } from "react";
import './CheckboxGroup.css'

type Props = {
  question: string;
  name: string;
  options: string[];
};

export function CheckboxGroup({ question, name, options, ...props }: Props) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="checkbox">
      <h2>{question}</h2>
      {options.map((option) => (
        <label  
        key={option}
        >
          {option}
          <input
            type="checkbox"
            name={name}
            value={option.toLowerCase()}
            onChange={handleChange}
          />
        </label>
      ))}
    </div>
  );
}
