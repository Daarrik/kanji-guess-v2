import { useState, useContext } from "react";
import { GuessContext } from "../../ContextProviders/GuessProvider";
import "./CharBox.css";

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
      // Find way to remove guess without using .replace() for instances like とうとう
      setGuess((oldGuess) => oldGuess.replace(kana, ""));
    }
    setClicked(!clicked);
  };

  return (
    <button className="char-box jp-font" onClick={handleClick}>
      {kana}
    </button>
  );
};

export default CharBox;
