import { links } from "../constants/links";
import NavItem from "./NavItem";

const Navbar: React.FC = () => {
  return (
    <nav id="nav" className="flex-center">
      {links.map(({ name, url, icon }) => (
        <NavItem key={name} url={url} icon={icon} />
      ))}
    </nav>
  );
};

export default Navbar;
