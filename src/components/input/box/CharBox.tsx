import { useState, useContext, useEffect } from "react";
import { GuessContext } from "../../context/GuessProvider";
import { BoxState } from "./BoxInput";

interface CharBoxProps {
  idx: number;
  kana: string;
  clickBox: (boxClicked: number) => void;
}

const CharBox: React.FC<CharBoxProps> = ({ idx, kana, clickBox }) => {
  return (
    <button
      onClick={() => {
        console.log(`From CharBox: ${idx}: ${kana}`);
        clickBox(idx);
      }}
    >
      {kana}
    </button>
  );
};

export default CharBox;
