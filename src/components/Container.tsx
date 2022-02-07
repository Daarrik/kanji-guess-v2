import { useContext } from "react";
import { KanjiContext } from "./context/KanjiProvider";
import TextInput from "./input/TextInput";

const Container: React.FC = () => {
  const { kanji, newKanji } = useContext(KanjiContext);

  return (
    <div id="container">
      <h1 className="text-jp">{kanji}</h1>
      <TextInput />
      <button onClick={newKanji}>fake kanji fetch button</button>
    </div>
  );
};

export default Container;
