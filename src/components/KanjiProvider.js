import { createContext, useState } from "react";

export const KanjiContext = createContext();

const KanjiProvider = ({ children }) => {
  const [kanji, setKanji] = useState("漢字");
  const [reading, setReading] = useState("かんじ");

  const newKanji = () => {
    const newKanji = "試験";
    const newReading = "しけん";

    setKanji(newKanji);
    setReading(newReading);
    console.log("called");
  };

  return (
    <KanjiContext.Provider value={{ kanji, reading, newKanji }}>
      {children}
    </KanjiContext.Provider>
  );
};

export default KanjiProvider;
