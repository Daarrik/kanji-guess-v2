import "./Icon.css";

interface NavItemProps {
  url: string;
  svg: React.ReactElement;
}

const Icon: React.FC<NavItemProps> = ({ url, svg }) => {
  return (
    <a className="navitem" href={url} target="_blank" rel="noopener noreferrer">
      {svg}
    </a>
  );
};

export default Icon;
