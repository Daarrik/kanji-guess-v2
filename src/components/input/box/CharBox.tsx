import { useState, useContext } from "react";
import { GuessContext } from "../../context/GuessProvider";

interface CharBoxProps {
  kana: string;
}

const CharBox: React.FC<CharBoxProps> = ({ kana }) => {
  const { guess, setGuess } = useContext(GuessContext);
  const [clicked, setClicked] = useState(false);

  const handleClick = (): void => {
    
  }

  return (
    <button onClick={handleClick}>
      {kana}
    </button>);
};

export default CharBox;
