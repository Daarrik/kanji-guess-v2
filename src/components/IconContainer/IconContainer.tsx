import { links } from "../../constants/links";
import Icon from "../Icon/Icon";
import "./IconContainer.css";

const IconContainer: React.FC = () => {
  return (
    <div className="icon-container">
      {links.map((link) => (
        <Icon key={link.name} {...link} />
      ))}
    </div>
  );
};

export default IconContainer;
