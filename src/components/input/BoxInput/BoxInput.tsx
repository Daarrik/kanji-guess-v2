import { useState, useContext, useEffect } from "react";
import { GuessContext } from "../../context/GuessProvider";
import { KanjiContext } from "../../context/KanjiProvider";
import CharBox from "../CharBox/CharBox";

const BoxInput: React.FC = () => {
  const { reading } = useContext(KanjiContext);
  const { guess } = useContext(GuessContext);

  const [boxes, setBoxes] = useState<React.ReactElement[] | null>(null);

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
