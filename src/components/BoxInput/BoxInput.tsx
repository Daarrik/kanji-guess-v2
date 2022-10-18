import { useState, useContext } from "react";
import { CharBox, KanjiContext, GuessContext } from "../";

const BoxInput = () => {
  const [boxes, setBoxes] = useState<string[] | null>(null);
  const { reading } = useContext(KanjiContext);
  const { guess } = useContext(GuessContext);

  return (
    <div className="box-input">
      <p>{guess}</p>
      {reading.split("").map((kana, idx) => <CharBox key={idx} kana={kana} />)}
    </div>
  );
};

export default BoxInput;
