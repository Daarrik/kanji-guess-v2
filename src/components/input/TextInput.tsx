import { useContext } from "react";
import { GuessContext } from "../context/GuessProvider";
import Check from "./Check";

const TextInput: React.FC = () => {
  const { guess, setGuess } = useContext(GuessContext);

  return (
    <div>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <Check isText />
    </div>
  );
};

export default TextInput;
