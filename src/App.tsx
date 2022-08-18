import "./App.css";
import ListOfButtons from "./Components/Buttons/ListOfButtons";
import { CheckboxGroup } from "./Components/CheckboxGroup/CheckboxGroup";
import { Label } from "./Components/InputsAndLabel/Label";
import { RadioGroup } from "./Components/RadioGroup/RadioGroup";

function App() {
  return (
    <div className="App">
      <h1>Welcome to our survey </h1>
      <Label />

      <CheckboxGroup
        question="How do you feel when you see the buttons below?"
        name="feelings"
        options={["Happy", "Sad", "Anxious", "Meh"]}
      />

      <ListOfButtons />

      <RadioGroup 
      question="Now choose your favourite button please!"
      name="button"
      options={["Primary", "Secondary", "Success", "Warning"]}/>
      
    </div>
  );
}

export default App;
