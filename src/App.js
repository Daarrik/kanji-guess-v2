import Navbar from "./components/Navbar";
import NavbarItem from "./components/NavbarItem";
import { ReactComponent as GithubIcon } from "./icons/github.svg";

const App = () => {
  return (
    <div>
      <div id="nav-container" className="flex-center">
        <p id="title">testing</p>
        <Navbar>
          <NavbarItem icon={<GithubIcon />} url="https://github.com/Daarrik" />
        </Navbar>
      </div>
    </div>
  );
};

export default App;
