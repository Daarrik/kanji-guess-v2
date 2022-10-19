import { useState, useContext } from "react";
import { KanjiContext, GuessContext } from "../";
import "./Results.css";

// CORS agony
// `https://tatoeba.org/en/api_v0/search?from=jpn&query=${kanji}&to=eng`
const Results = () => {
  const { kanji, reading, newKanji } = useContext(KanjiContext);
  const { guess, setGuess, setGuessed } = useContext(GuessContext);

  const [sentence, setSentence] = useState("");

  const handleClick = (retry: boolean): void => {
    setGuessed(false);
    setGuess("");
    if (!retry) newKanji();
  };

  const fetchSentence = async () => {
    const { results } = await (
      await fetch(
        `https://tatoeba.org/en/api_v0/search?from=jpn&query=${kanji}&to=eng`
      )
    ).json();
    setSentence(results[0]["text"]);
  };

  return (
    <div className="results">
      <h1 className="en-font">{reading === guess ? "correct" : "incorrect"}</h1>
      <div>
        <button onClick={() => handleClick(true)}>Retry</button>
        <button onClick={() => handleClick(false)}>New</button>
        <button onClick={fetchSentence}>fetch</button>
        <p>{sentence}</p>
      </div>
    </div>
  );
};

export default Results;
