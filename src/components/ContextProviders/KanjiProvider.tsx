import React, { createContext, useState } from "react";
import { kanjiList } from "../../constants/kanji";

// Consider changing this to WordProvider/WordContext
interface KanjiContextType {
  kanji: string;
  reading: string;
  newKanji: () => void;
}

export const KanjiContext = createContext<KanjiContextType>({
  kanji: "漢字",
  reading: "かんじ",
  newKanji: () => {},
});

const KanjiProvider = ({ children }: { children: React.ReactNode }) => {
  const [kanji, setKanji] = useState("漢字");
  const [reading, setReading] = useState("かんじ");

  const newKanji = (): void => {
    const newEntry = kanjiList[Math.floor(Math.random()*kanjiList.length)];
    const newKanji = newEntry["kanji"];
    const newReading = newEntry["reading"];

    setKanji(newKanji);
    setReading(newReading);
  };

  return (
    <KanjiContext.Provider value={{ kanji, reading, newKanji }}>
      {children}
    </KanjiContext.Provider>
  );
};

export default KanjiProvider;
