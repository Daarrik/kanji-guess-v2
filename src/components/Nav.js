import NavItem from "./NavItem";
import { ReactComponent as GithubIcon } from "../icons/github.svg";

const Navbar = ({ children }) => {
  return (
    <nav id="nav" className="flex-center">
      <NavItem icon={<GithubIcon />} url="https://github.com/Daarrik" />
    </nav>
  );
};

export default Navbar;
