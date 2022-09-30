import { useContext } from "react";
import { GuessContext } from "../";
import "./TextInput.css";

const TextInput = () => {
  const { guess, setGuess } = useContext(GuessContext);

  return (
    <div>
      <input
        className="input jp-font"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
