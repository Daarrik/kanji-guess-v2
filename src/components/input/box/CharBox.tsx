import { useState } from "react";

interface CharBoxProps {
  kana: string;
}

const CharBox: React.FC<CharBoxProps> = ({ kana }) => {
  const [clicked, setClicked] = useState(false);

  return <button onClick={() => setClicked(!clicked)}>{kana}</button>;
};

export default CharBox;
