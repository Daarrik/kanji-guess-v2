import { useState, useContext } from "react";
import { BoxInput, Submit, TextInput, KanjiContext, GuessContext } from "../";
import "./Game.css";

const Game = () => {
  const [textInput, setTextInput] = useState(false);
  const [fetching, isFetching] = useState(false);
  const { kanji } = useContext(KanjiContext);
  const { setGuess } = useContext(GuessContext);

  return (
    <div className="game">
      <h1 className="kanji jp-font">{kanji}</h1>
      {textInput ? <TextInput /> : <BoxInput />}
      <Submit />
      <button
        onClick={() => {
          setTextInput(!textInput);
          setGuess("");
        }}
      >
        Change Input Type
      </button>
    </div>
  );
};

export default Game;
