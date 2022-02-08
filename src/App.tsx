import KanjiProvider from "./components/context/KanjiProvider";
import GuessProvider from "./components/context/GuessProvider";
import Game from "./components/Game";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <KanjiProvider>
        <GuessProvider>
          <main id="main" className="flex-center">
            <Game />
          </main>
        </GuessProvider>
      </KanjiProvider>
      <Footer />
    </div>
  );
};

export default App;
