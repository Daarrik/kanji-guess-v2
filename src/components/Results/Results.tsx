import { useContext } from "react";
import { KanjiContext, GuessContext } from "../";
import "./Results.css";

// `https://tatoeba.org/en/api_v0/search?from=jpn&query=${kanji}to=eng`
const Results = () => {
  const { reading, newKanji } = useContext(KanjiContext);
  const { guess, setGuess, setGuessed } = useContext(GuessContext);

  const handleClick = (retry: boolean): void => {
    setGuessed(false);
    setGuess("");
    if (!retry) newKanji();
  };

  return (
    <div className="results">
      <h1 className="en-font">{reading === guess ? "correct" : "incorrect"}</h1>
      <div>
        <button onClick={() => handleClick(true)}>Retry</button>
        <button onClick={() => handleClick(false)}>New</button>
      </div>
    </div>
  );
};

export default Results;
