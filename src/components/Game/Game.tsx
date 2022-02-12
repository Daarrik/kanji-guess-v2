import { useState, useContext } from "react";
import { KanjiContext } from "../context/KanjiProvider";
import { GuessContext } from "../context/GuessProvider";
import TextInput from "../Input/TextInput";
import BoxInput from "../Input/BoxInput/BoxInput";
import Submit from "../Input/Submit";
import "./Game.css";

const Game: React.FC = () => {
  const [textInput, setTextInput] = useState(true);
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
