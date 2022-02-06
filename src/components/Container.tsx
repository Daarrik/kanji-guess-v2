import { useState, useContext } from "react";
import { KanjiContext } from "./context/KanjiProvider";
import TextInput from "./input/TextInput";
import BoxInput from "./input/box/BoxInput";
import { GuessContext } from "./context/GuessProvider";

const Container: React.FC = () => {
  const [textInput, setTextInput] = useState(false);
  const { kanji, reading, newKanji } = useContext(KanjiContext);
  const { guess, setGuess } = useContext(GuessContext);

  return (
    <div id="container">
      <h1 className="text-jp">{kanji}</h1>
      <p className="text-jp">{reading}</p>
      {textInput ? <TextInput /> : <BoxInput />}
      <button onClick={newKanji}>fake kanji fetch button</button>
      <button
        onClick={() => {
          setTextInput(!textInput);
          setGuess("");
        }}
      >
        switch
      </button>
    </div>
  );
};

export default Container;
