import { createContext, useState } from "react";

interface GuessContextType {
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
  guessed: boolean;
  setGuessed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GuessContext = createContext<GuessContextType>({
  guess: "",
  setGuess: () => {},
  guessed: false,
  setGuessed: () => {},
});

const GuessProvider: React.FC = ({ children }) => {
  const [guess, setGuess] = useState("");
  const [guessed, setGuessed] = useState(false);

  return (
    <GuessContext.Provider value={{ guessed, guess, setGuess, setGuessed }}>
      {children}
    </GuessContext.Provider>
  );
};

export default GuessProvider;
