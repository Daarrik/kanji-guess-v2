import { useState, useEffect, useContext } from "react";
import { KanjiContext } from "../../context/KanjiProvider";
import CharBox from "./CharBox";

export interface BoxState {
  idx: number;
  box: React.ReactElement;
  clicked: boolean;
}

const BoxInput: React.FC = () => {
  const { reading } = useContext(KanjiContext);
  const [boxes, setBoxes] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    setBoxes(
      reading.split("").map((kana, idx) => <CharBox key={idx} kana={kana} />)
    );
  }, [reading]);

  return (
    <div>
      <div>{boxes}</div>
    </div>
  );
};

export default BoxInput;
