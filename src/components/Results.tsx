import { useContext } from "react";
import { KanjiContext } from "./context/KanjiProvider";
import { GuessContext } from "./context/GuessProvider";

const Results: React.FC = () => {
  const { reading, newKanji } = useContext(KanjiContext);
  const { guess, setGuess, setGuessed } = useContext(GuessContext);

  const handleClick = (retry: boolean): void => {
    setGuessed(false);
    setGuess("");
    if (!retry) newKanji();
  };

  return (
    <div>
      <h1 className="text-eng">
        {reading === guess ? "correct" : "incorrect"}
      </h1>
      <button onClick={() => handleClick(true)}>Retry</button>
      <button onClick={() => handleClick(false)}>New</button>
    </div>
  );
};

export default Results;
