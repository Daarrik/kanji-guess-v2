import { useState, useEffect, useRef, useContext } from "react";
import { KanjiContext } from "./context/KanjiProvider";
import { GuessContext } from "./context/GuessProvider";
import TextInput from "./input/TextInput";
import BoxInput from "./input/BoxInput";
import Check from "./input/Check";

const Game: React.FC = () => {
  const [textInput, setTextInput] = useState(true);
  const { kanji, reading, newKanji } = useContext(KanjiContext);
  const { guessed } = useContext(GuessContext);

  return (
    <div id="game">
      <h1 className="text-jp">{kanji}</h1>
      <h2 className="text-jp">{guessed ? "正解" : "不正解"}</h2>
      {textInput ? <TextInput /> : <BoxInput />}
      <button onClick={newKanji}>fake kanji fetch button</button>
      <Check />
      <button onClick={() => setTextInput(!textInput)}>
        Change Input Type
      </button>
    </div>
  );
};

export default Game;
