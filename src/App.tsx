import { useContext } from "react";
import { KanjiContext } from "./components/ContextProviders/KanjiProvider";
import { GuessContext } from "./components/ContextProviders/GuessProvider";
import Game from "./components/Game/Game";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";
// Readd Footer when rest of app is done

const App: React.FC = () => {
  const { kanji } = useContext(KanjiContext);
  const { guessed } = useContext(GuessContext);

  return (
    <div>
      <main>
        {/* animation for components */}
        {!guessed ? <Game /> : <Results />}
      </main>
      <h1 className="kanji-backdrop jp-font">{kanji}</h1>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
