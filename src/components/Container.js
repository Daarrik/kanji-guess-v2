import { useContext } from "react";
import { KanjiContext } from "./KanjiProvider";

const Container = () => {
  const { kanji, reading, newKanji } = useContext(KanjiContext);

  return (
    <div>
      <h1 className="text-normal">{kanji}</h1>
      <p className="text-normal">{reading}</p>
      <button onClick={newKanji}>fake kanji fetch button</button>
    </div>
  );
};

export default Container;
