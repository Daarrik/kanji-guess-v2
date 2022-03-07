import { useState, useEffect, useContext } from "react";
import { KanjiContext } from "../ContextProviders/KanjiProvider";
import { GuessContext } from "../ContextProviders/GuessProvider";
import CharBox from "../CharBox/CharBox";

interface CharBox {
  id: number;
  kana: string;
  clicked: boolean;
}

const BoxInput: React.FC = () => {
  const { reading } = useContext(KanjiContext);
  const { guess } = useContext(GuessContext);

  const [boxes, setBoxes] = useState<CharBox[] | null>(null);

  useEffect(() => {
    setBoxes(
      reading
        .split("")
        .map((kana, idx) => ({ id: idx, kana: kana, clicked: false }))
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
