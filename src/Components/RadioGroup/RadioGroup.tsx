import './RadioGroup.css'

type Props = {
    question: string;
    name: string;
    options: string[];
  };


export function RadioGroup({ question, name, options, ...props }: Props) {
    return (
        <div className="radioCheck">
      <h2>{question}</h2>
      {options.map((option) => (
        <label  
        key={option}
        className= "radiocheck-label"
        >
          {option}
          <input
            type="radio"
            name={name}
            value={option.toLowerCase()}
            onChange={() => {
                console.log(`Yayyyy you choosed me ${option}`)
            }}
          />
        
        </label>
      ))}
    </div>

    )
}