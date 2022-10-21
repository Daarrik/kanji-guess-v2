import React, { createContext, useState } from "react";
import { KanjiEntry, kanjiList } from "../../constants/kanji";
import { kana } from "../../constants/kana";

// Consider changing this to WordProvider/WordContext
type KanjiContextType = {
  kanji: string;
  reading: string;
  incorrectGuesses: string[];
  newKanji: () => void;
};

export const KanjiContext = createContext<KanjiContextType>({
  kanji: "",
  reading: "",
  incorrectGuesses: [],
  newKanji: () => {},
});

const KanjiProvider = ({ children }: { children: React.ReactNode }) => {
  const [kanjiEntry, setKanjiEntry] = useState<KanjiEntry>(
    () => kanjiList[Math.floor(Math.random() * kanjiList.length)]
  );

  const newKanji = (): void => {
    const newEntry = kanjiList[Math.floor(Math.random() * kanjiList.length)];
    setKanjiEntry(newEntry);
  };

  const kanji = kanjiEntry["kanji"];
  const reading = kanjiEntry["reading"];
  const incorrectGuesses: string[] = [];
  for (let i = 0; i < 10 - reading.length; i++) {
    const randomKana: string = kana.charAt(
      Math.floor(Math.random() * kana.length)
    );
    incorrectGuesses.push(randomKana);
  }

  return (
    <KanjiContext.Provider
      value={{ kanji, reading, incorrectGuesses, newKanji }}
    >
      {children}
    </KanjiContext.Provider>
  );
};

export default KanjiProvider;
