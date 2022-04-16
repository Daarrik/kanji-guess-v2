import { useContext } from "react";
import {
  KanjiContext,
  GuessContext,
  Game,
  Results,
  Footer,
} from "./components";

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
