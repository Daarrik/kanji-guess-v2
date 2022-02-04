import { createContext, useState } from "react";

interface GuessContextType {
  guess: string;
  setGuess: (newGuess: string) => void;
  guessed: boolean;
  setGuessed: (isGuessed: boolean) => void;
}

export const GuessContext = createContext<GuessContextType>({
  guess: "",
  setGuess: () => {},
  guessed: false,
  setGuessed: () => {},
});

const GuessProvider: React.FC = ({ children }) => {
  const [guessed, setGuessed] = useState(false);
  const [guess, setGuess] = useState("");

  return (
    <GuessContext.Provider value={{ guessed, guess, setGuess, setGuessed }}>
      {children}
    </GuessContext.Provider>
  );
};

export default GuessProvider;
