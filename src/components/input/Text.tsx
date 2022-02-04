import { useContext, useState } from "react";
import { GuessContext } from "../context/GuessProvider";
import { KanjiContext } from "../context/KanjiProvider";
import Check from "./Check";

const TextInput: React.FC = () => {
  const { reading } = useContext(KanjiContext);
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
