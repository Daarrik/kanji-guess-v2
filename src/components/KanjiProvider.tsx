import { createContext, useState } from "react";

interface KanjiContextType {
  kanji: string;
  reading: string;
  newKanji?: () => void;
};

export const KanjiContext = createContext<KanjiContextType>({
  kanji: "漢字",
  reading: "かんじ",
  newKanji: () => {},
});

const KanjiProvider: React.FC = ({ children }) => {
  const [kanji, setKanji] = useState("漢字");
  const [reading, setReading] = useState("かんじ");

  const newKanji = (): void => {
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
