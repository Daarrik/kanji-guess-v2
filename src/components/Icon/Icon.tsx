import "./Icon.css";

type IconProps = {
  url: string;
  svg: React.ReactElement;
};

const Icon = ({ url, svg }: IconProps) => {
  return (
    <a className="icon" href={url} target="_blank" rel="noopener noreferrer">
      {svg}
    </a>
  );
};

export default Icon;
