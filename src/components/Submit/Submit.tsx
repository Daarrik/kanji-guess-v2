import { useContext } from "react";
import { GuessContext } from "../";

const Submit = () => {
  const { setGuessed } = useContext(GuessContext);

  return <button onClick={() => setGuessed(true)}>Submit Guess</button>;
};

export default Submit;
