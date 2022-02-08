import { useContext } from "react";
import { GuessContext } from "./GuessProvider";
import { KanjiContext } from "./KanjiProvider";

const Results: React.FC = () => {
  const { reading } = useContext(KanjiContext);
  const { guess } = useContext(GuessContext);

  return <div>{reading === guess ? "correct" : "incorrect"}</div>;
};

export default Results;
