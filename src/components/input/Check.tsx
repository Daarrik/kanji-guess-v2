import { useContext } from "react";
import { KanjiContext } from "../context/KanjiProvider";
import { GuessContext } from "../context/GuessProvider";

interface CheckProps {
  isText?: boolean;
}

const Check: React.FC<CheckProps> = ({ isText }) => {
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

  return <button onClick={handleGuess}>test</button>;
};

export default Check;
