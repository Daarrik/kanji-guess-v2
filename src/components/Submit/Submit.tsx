import { useContext } from "react";
import { GuessContext } from "../";
import "./Submit.css";

const Submit = () => {
  const { setGuessed } = useContext(GuessContext);

  return (
    <button className="en-font" onClick={() => setGuessed(true)}>
      submit
    </button>
  );
};

export default Submit;
