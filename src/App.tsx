import { useContext } from "react";
import { KanjiContext } from "./components/ContextProviders/KanjiProvider";
import { GuessContext } from "./components/ContextProviders/GuessProvider";
import Game from "./components/Game/Game";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  const { kanji } = useContext(KanjiContext);
  const { guessed } = useContext(GuessContext);

  return (
    <div>
      <main>
        {!guessed ? <Game /> : <Results />}
        {/* <Footer /> */}
      </main>
      <h1 className="kanji-backdrop jp-font">{kanji}</h1>
    </div>
  );
};

export default App;
