import "./Icon.css";

interface Icon {
  url: string;
  svg: React.ReactElement;
}

const Icon: React.FC<Icon> = ({ url, svg }) => {
  return (
    <a className="navitem" href={url} target="_blank" rel="noopener noreferrer">
      {svg}
    </a>
  );
};

export default Icon;
