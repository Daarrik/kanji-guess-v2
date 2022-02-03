import { ReactComponent as GithubIcon } from "../icons/github.svg";
import { links } from "../constants/links";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav id="nav" className="flex-center">
      {links.map((link) => (
        <NavItem url={link.url} icon={link.icon} />
      ))}
    </nav>
  );
};

export default Navbar;
