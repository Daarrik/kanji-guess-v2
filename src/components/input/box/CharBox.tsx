import { useState, useContext } from "react";
import { GuessContext } from "../../context/GuessProvider";

interface CharBoxProps {
  kana: string;
}

const CharBox: React.FC<CharBoxProps> = ({ kana }) => {
  const { guess, setGuess } = useContext(GuessContext);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {

  };

  return <button className="text-jp char-box" onClick={() => setClicked(!clicked)}>{kana}</button>;
};

export default CharBox;
