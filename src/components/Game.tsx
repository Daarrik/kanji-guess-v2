import { useState, useEffect, useRef, useContext } from "react";
import { KanjiContext } from "./context/KanjiProvider";
import { GuessContext } from "./context/GuessProvider";
import TextInput from "./input/TextInput";
import BoxInput from "./input/BoxInput";
import Submit from "./input/Submit";

const Game: React.FC = () => {
  const [textInput, setTextInput] = useState(true);
  const { kanji, reading } = useContext(KanjiContext);

  return (
    <div id="game">
      <h1 className="text-jp">{kanji}</h1>
      {textInput ? <TextInput /> : <BoxInput />}
      <Submit />
      <button onClick={() => setTextInput(!textInput)}>
        Change Input Type
      </button>
    </div>
  );
};

export default Game;
