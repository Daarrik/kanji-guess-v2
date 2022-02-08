import { useContext } from "react";
import { KanjiContext } from "../context/KanjiProvider";
import { GuessContext } from "../context/GuessProvider";

const Check: React.FC = () => {
  const { reading } = useContext(KanjiContext);
  const { guess, setGuess, setGuessed } = useContext(GuessContext);

  const handleGuess = () => {
    if (guess === reading) {
      setGuessed(true);
      setGuess("");
    } else {
      setGuessed(false);
      setGuess("");
    }
  };

  return <button onClick={handleGuess}>Check Guess</button>;
};

export default Check;
