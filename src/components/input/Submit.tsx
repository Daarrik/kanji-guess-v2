import { useContext } from "react";
import { GuessContext } from "../context/GuessProvider";

const Submit: React.FC = () => {
  const { setGuessed } = useContext(GuessContext);

  return <button onClick={() => setGuessed(true)}>Submit Guess</button>;
};

export default Submit;
