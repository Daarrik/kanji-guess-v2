import React, { createContext, useState, useEffect } from "react";
import { kanjiList } from "../../constants/kanji";
import { kana } from "../../constants/kana";

// Consider changing this to WordProvider/WordContext
interface KanjiContextType {
  kanji: string;
  reading: string;
  incorrectGuesses: Array<string>;
  newKanji: () => void;
}

export const KanjiContext = createContext<KanjiContextType>({
  kanji: "",
  reading: "",
  incorrectGuesses: [],
  newKanji: () => {},
});

const KanjiProvider = ({ children }: { children: React.ReactNode }) => {
  const [kanji, setKanji] = useState("漢字");
  const [reading, setReading] = useState("かんじ");

  const newKanji = (): void => {
    const newEntry = kanjiList[Math.floor(Math.random() * kanjiList.length)];
    const newKanji = newEntry["kanji"];
    const newReading = newEntry["reading"];

    setKanji(newKanji);
    setReading(newReading);
  };

  const incorrectGuesses: Array<string> = [];
  const numOfRandom = 10 - reading.length;
    for(let i = 0; i < numOfRandom; i++) {
      const randomKana: string = kana.charAt(Math.floor(Math.random() * kana.length));
      incorrectGuesses.push(randomKana);
    }

  return (
    <KanjiContext.Provider value={{ kanji, reading, incorrectGuesses, newKanji }}>
      {children}
    </KanjiContext.Provider>
  );
};

export default KanjiProvider;
