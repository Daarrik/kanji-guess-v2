import { useContext } from "react";
import { GuessContext } from "./context/GuessProvider";
import { KanjiContext } from "./context/KanjiProvider";
import TextInput from "./input/TextInput";

const Container: React.FC = () => {
  const { kanji, newKanji } = useContext(KanjiContext);
  const { guessed } = useContext(GuessContext);

  return (
    <div id="container">
      <h1 className="text-jp">{kanji}</h1>
      <h2 className="text-jp">{guessed ? "正解" : "不正解"}</h2>
      <TextInput />
      <button onClick={newKanji}>fake kanji fetch button</button>
    </div>
  );
};

export default Container;
