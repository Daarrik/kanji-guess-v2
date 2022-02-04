import Container from "./components/Container";
import Footer from "./components/Footer";
import KanjiProvider from "./components/KanjiProvider";

const App: React.FC = () => {
  return (
    <div>
      <KanjiProvider>
        <main id="main" className="flex-center">
          <Container />
        </main>
      </KanjiProvider>
      <Footer />
    </div>
  );
};

export default App;
