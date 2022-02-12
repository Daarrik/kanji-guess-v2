import { links } from "../../constants/links";
import Icon from "../Icon/Icon";
import "./IconContainer.css";

const IconContainer: React.FC = () => {
  return (
    <div className="icon-container">
      {links.map(({ name, url, svg }) => (
        <Icon key={name} url={url} svg={svg} />
      ))}
    </div>
  );
};

export default IconContainer;
