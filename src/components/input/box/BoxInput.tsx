import { useState, useEffect, useContext } from "react";
import { KanjiContext } from "../../context/KanjiProvider";
import CharBox from "./CharBox";

interface Box {
  idx: number;
  kana: string;
  clicked: boolean;
}

const BoxInput: React.FC = () => {
  const { reading } = useContext(KanjiContext);
  const [boxes, setBoxes] = useState<Box[]>([]);

  useEffect(() => {
    setBoxes(
      reading.split("").map((kana, idx) => ({
        idx: idx,
        kana: kana,
        clicked: idx % 2 === 0 ? true : false,
      }))
    );
  }, [reading]);

  return (
    <div>
      <div>
        {boxes
          .filter(({ clicked }) => clicked)
          .map(({ idx, kana }) => (
            <CharBox key={idx} kana={kana} />
          ))}
      </div>
      <div>
        {boxes
          .filter(({ clicked }) => !clicked)
          .map(({ idx, kana }) => (
            <CharBox key={idx} kana={kana} />
          ))}
      </div>
    </div>
  );
};

export default BoxInput;
