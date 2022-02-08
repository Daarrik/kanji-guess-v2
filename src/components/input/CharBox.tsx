import { useState, useContext } from "react";
import { GuessContext } from "../context/GuessProvider";

interface CharBoxProps {
  kana: string;
}

const CharBox: React.FC<CharBoxProps> = ({ kana }) => {
  const [clicked, setClicked] = useState(false);
  const { setGuess } = useContext(GuessContext);

  const handleClick = () => {
    if (!clicked) {
      setGuess((oldGuess) => oldGuess + kana);
    } else {
      setGuess((oldGuess) => oldGuess.replace(kana, ""));
    }
    setClicked(!clicked);
  };

  return (
    <button className="char-box text-jp" onClick={handleClick}>
      {kana}
    </button>
  );
};

export default CharBox;
