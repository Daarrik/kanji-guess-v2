import { useState, useEffect, useRef, useContext } from "react";
import { KanjiContext } from "./context/KanjiProvider";
import { GuessContext } from "./context/GuessProvider";
import TextInput from "./input/TextInput";
import CharBox from "./input/CharBox";
import Check from "./input/Check";

const Container: React.FC = () => {
  const [textInput, setTextInput] = useState(true);
  const { kanji, reading, newKanji } = useContext(KanjiContext);
  const { guess, guessed } = useContext(GuessContext);

  const boxes = useRef<React.ReactElement[]>();

  useEffect(() => {
    boxes.current = reading.split("").map((kana) => <CharBox kana={kana} />);
  }, [reading]);

  return (
    <div id="container">
      <h1 className="text-jp">{kanji}</h1>
      <h2 className="text-jp">{guessed ? "正解" : "不正解"}</h2>
      {textInput ? (
        <TextInput />
      ) : (
        <div>
          <p>{guess}</p>
          {boxes.current}
        </div>
      )}
      <button onClick={newKanji}>fake kanji fetch button</button>
      <Check />
      <button onClick={() => setTextInput(!textInput)}>
        Change Input Type
      </button>
    </div>
  );
};

export default Container;
