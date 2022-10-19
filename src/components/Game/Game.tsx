import { useState, useContext } from "react";
import { BoxInput, Submit, TextInput, KanjiContext, GuessContext } from "../";
import { ReactComponent as KeyboardSVG } from "../../icons/keyboard.svg";
import { ReactComponent as BoxSVG } from "../../icons/box.svg";
import "./Game.css";

const Game = () => {
  const [textInput, setTextInput] = useState(false);
  const { kanji } = useContext(KanjiContext);
  const { setGuess } = useContext(GuessContext);

  return (
    <div className="game">
      <h1 className="kanji jp-font">{kanji}</h1>
      {textInput ? <TextInput /> : <BoxInput />}
      <Submit />
      <button
        className="change-input"
        onClick={() => {
          setTextInput(!textInput);
          setGuess("");
        }}
      >
        {textInput ? <BoxSVG /> : <KeyboardSVG />}
      </button>
    </div>
  );
};

export default Game;
