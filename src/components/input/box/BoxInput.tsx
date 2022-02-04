import { useContext } from "react";
import { KanjiContext } from "../../context/KanjiProvider";
import CharBox from "./CharBox";

const BoxInput: React.FC = () => {
  const { reading } = useContext(KanjiContext);
  return (
    <div>
      {reading.split("").map((kana, idx) => (
        <CharBox key={idx} kana={kana} />
      ))}
    </div>
  );
};

export default BoxInput;
