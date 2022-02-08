import { useContext } from "react";
import { GuessContext } from "../context/GuessProvider";

const TextInput: React.FC = () => {
  const { guess, setGuess } = useContext(GuessContext);

  return (
    <div>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
