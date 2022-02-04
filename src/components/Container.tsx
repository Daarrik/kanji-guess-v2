import { useContext } from "react";
import TextInput from "./input/TextInput";

import { KanjiContext } from "./context/KanjiProvider";

const Container: React.FC = () => {
  const { kanji, reading, newKanji } = useContext(KanjiContext);

  return (
    <div id="container">
      <h1 className="text-jp">{kanji}</h1>
      <p className="text-jp">{reading}</p>
      <TextInput />
      <button onClick={newKanji}>fake kanji fetch button</button>
    </div>
  );
};

export default Container;
