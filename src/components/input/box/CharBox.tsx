import { useState, useContext, useEffect } from "react";
import { GuessContext } from "../../context/GuessProvider";

interface CharBoxProps {
  kana: string;
}

const CharBox: React.FC<CharBoxProps> = ({ kana }) => {
  return <button>{kana}</button>;
};

export default CharBox;
