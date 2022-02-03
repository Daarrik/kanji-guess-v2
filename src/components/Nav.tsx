import { links } from "../constants/links";
import NavItem from "./NavItem";

const Nav: React.FC = () => {
  return (
    <nav id="nav" className="flex-center">
      {links.map(({ name, url, icon }) => (
        <NavItem key={name} url={url} icon={icon} />
      ))}
    </nav>
  );
};

export default Nav;
