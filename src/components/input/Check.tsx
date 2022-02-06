import { useContext } from "react";
import { KanjiContext } from "../context/KanjiProvider";
import { GuessContext } from "../context/GuessProvider";

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
