import "./Icon.css";

interface IconProps {
  url: string;
  svg: React.ReactElement;
}

const Icon = ({ url, svg }: IconProps) => {
  return (
    <a className="navitem" href={url} target="_blank" rel="noopener noreferrer">
      {svg}
    </a>
  );
};

export default Icon;
