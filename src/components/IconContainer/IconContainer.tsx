import { links } from "../../constants/links";
import Icon from "../Icon/Icon";
import "./IconContainer.css";

const IconContainer: React.FC = () => {
  return (
    <div className="icon-container">
      {links.map((payload) => (
        <Icon key={payload.name} {...payload} />
      ))}
    </div>
  );
};

export default IconContainer;
