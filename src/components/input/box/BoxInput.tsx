import React, { useState, useEffect, useContext } from "react";
import { KanjiContext } from "../../context/KanjiProvider";
import CharBox from "./CharBox";

export interface BoxState {
  idx: number;
  box: React.ReactElement;
  clicked: boolean;
}

interface CharBoxProps {
  idx: number;
  kana: string;
}

const BoxInput: React.FC = () => {
  const { reading } = useContext(KanjiContext);
  const [boxes, setBoxes] = useState<BoxState[]>([]);

  const clickBox = (boxClicked: number): void => {
    setBoxes((prevBoxes) =>
      prevBoxes.map(({ idx, box, clicked }) => ({
        idx: idx,
        box: box,
        clicked: idx === boxClicked ? !clicked : clicked,
      }))
    );
  };

  useEffect(() => {
    setBoxes(
      reading.split("").map((kana, idx) => {
        return {
          idx: idx,
          box: <CharBox key={idx} idx={idx} kana={kana} clickBox={clickBox} />,
          clicked: false,
        };
      })
    );
  }, [reading]);

  return (
    <div>
      <div>{boxes.map(({ box, clicked }) => !clicked && box)}</div>
      <div>{boxes.map(({ box, clicked }) => clicked && box)}</div>
    </div>
  );
};

export default BoxInput;
