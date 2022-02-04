const Container = () => {
  const [{ kanji, reading }, setKanji] = useState({
    kanji: "漢字",
    reading: "かんじ",
  });
  const [guess, setGuess] = useState("");
  const [guessed, setGuessed] = useState(false);

  return (
    <div>
      <h1 className="text-normal">{kanji}</h1>
      <p className="text-normal">{reading}</p>
      <button onClick={() => setKanji({ kanji: "試験", reading: "しけん" })}>
        fake kanji fetch button
      </button>
    </div>
  );
};

export default Container;
