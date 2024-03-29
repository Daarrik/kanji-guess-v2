import { links } from "../../constants/links";
import { Icon } from "../";
import "./IconContainer.css";

const IconContainer = () => {
  return (
    <div className="icon-container">
      {links.map((link) => (
        <Icon key={link.name} {...link} />
      ))}
    </div>
  );
};

export default IconContainer;
