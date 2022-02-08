import { useContext } from "react";
import { GuessContext } from "./components/context/GuessProvider";
import Game from "./components/Game";
import Results from "./components/context/Results";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const { guessed } = useContext(GuessContext);

  return (
    <div>
      <main id="main" className="flex-center">
        {!guessed ? <Game /> : <Results />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
