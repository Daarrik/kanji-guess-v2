import { useContext } from "react";
import { GuessContext } from "../context/GuessProvider";
import { KanjiContext } from "../context/KanjiProvider";

interface CheckProps {
  isText?: boolean;
}

const Check: React.FC<CheckProps> = ({ isText }) => {
  const { reading } = useContext(KanjiContext);
  const { guess, setGuessed } = useContext(GuessContext);

  return (
    <button
      onClick={() => {
        console.log(guess === reading);
        console.log(isText);
      }}
    >
      test
    </button>
  );
};

export default Check;
