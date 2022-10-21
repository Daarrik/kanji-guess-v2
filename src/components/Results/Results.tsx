import { useState, useContext } from "react";
import { KanjiContext, GuessContext } from "../";
import "./Results.css";

// CORS agony
// `https://tatoeba.org/en/api_v0/search?from=jpn&query=${kanji}&to=eng`
const Results = () => {
  const { kanji, reading, newKanji } = useContext(KanjiContext);
  const { guess, setGuess, setGuessed } = useContext(GuessContext);

  const [sentence, setSentence] = useState("");
  const isCorrect = reading === guess;

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

  // Maybe a bit too much conditional rendering
  return (
    <div className="results">
      <h1 className="result en-font">{isCorrect ? "correct" : "incorrect"}</h1>
      <h1 className="result-kanji jp-font">{isCorrect ? "正解" : ""}</h1>
      {isCorrect ? (
        <h3 className="jp-font">{`${kanji} : ${reading}`}</h3>
      ) : null}
      <div>
        <button
          className="result-button en-font"
          onClick={() => handleClick(false)}
        >
          Next
        </button>
        {!isCorrect ? (
          <button
            className="result-button en-font"
            onClick={() => handleClick(true)}
          >
            Retry
          </button>
        ) : null}
        <p>{sentence}</p>
      </div>
    </div>
  );
};

export default Results;
