import { useContext } from "react";
import { GuessContext } from "../";
import "./Submit.css";

const Submit = () => {
  const { setGuessed } = useContext(GuessContext);

  return (
    <button className="submit-button en-font" onClick={() => setGuessed(true)}>
      Submit Guess
    </button>
  );
};

export default Submit;
