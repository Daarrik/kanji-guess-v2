import { useContext } from "react";
import { GuessContext } from "./GuessProvider";
import { KanjiContext } from "./KanjiProvider";

const Results: React.FC = () => {
  const { reading } = useContext(KanjiContext);
  const { guess, setGuess, setGuessed } = useContext(GuessContext);

  const handleClick = (retry: boolean): void => {
    setGuessed(false);
    setGuess("");
  };

  return (
    <div>
      <h1 className="text-eng">{reading === guess ? "correct" : "incorrect"}</h1>
      <button onClick={() => handleClick(true)}>Retry</button>
      <button>Next</button>
    </div>
  );
};

export default Results;
