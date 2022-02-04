import { useState, useContext } from "react";
import TextInput from "./input/TextInput";
import { KanjiContext } from "./context/KanjiProvider";
import BoxInput from "./input/box/BoxInput";

const Container: React.FC = () => {
  const [textInput, setTextInput] = useState(true);
  const { kanji, reading, newKanji } = useContext(KanjiContext);

  return (
    <div id="container">
      <h1 className="text-jp">{kanji}</h1>
      <p className="text-jp">{reading}</p>
      {textInput ? <TextInput /> : <BoxInput />}
      <button onClick={newKanji}>fake kanji fetch button</button>
    </div>
  );
};

export default Container;
