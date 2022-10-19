import { createContext, useState, useEffect } from "react";

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

const GuessProvider = ({ children }: { children: React.ReactNode }) => {
  const [guess, setGuess] = useState("");
  const [guessed, setGuessed] = useState(false);

  return (
    <GuessContext.Provider value={{ guessed, guess, setGuess, setGuessed }}>
      {children}
    </GuessContext.Provider>
  );
};

export default GuessProvider;
