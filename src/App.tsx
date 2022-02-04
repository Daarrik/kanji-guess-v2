import Container from "./components/Container";
import Footer from "./components/Footer";
import KanjiProvider from "./components/context/KanjiProvider";
import GuessProvider from "./components/context/GuessProvider";

const App: React.FC = () => {
  return (
    <div>
      <KanjiProvider>
        <GuessProvider>
          <main id="main" className="flex-center">
            <Container />
          </main>
        </GuessProvider>
      </KanjiProvider>
      <Footer />
    </div>
  );
};

export default App;
