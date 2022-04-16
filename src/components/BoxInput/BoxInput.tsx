import { useState, useEffect, useContext } from "react";
import { CharBox, KanjiContext, GuessContext } from "../";

const BoxInput: React.FC = () => {
  const [boxes, setBoxes] = useState<React.ReactElement[] | null>(null);
  const { reading } = useContext(KanjiContext);
  const { guess } = useContext(GuessContext);

  useEffect(() => {
    setBoxes(
      reading.split("").map((kana, idx) => <CharBox key={idx} kana={kana} />)
    );
  }, [reading]);

  return (
    <div className="box-input">
      <p>{guess}</p>
      {boxes}
    </div>
  );
};

export default BoxInput;
