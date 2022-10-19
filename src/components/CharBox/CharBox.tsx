import "./CharBox.css";

interface CharBoxProps {
  kana: string;
}

const CharBox = ({ kana }: CharBoxProps) => {
  return (
    <button className="char-box jp-font">
      {kana}
    </button>
  );
};

export default CharBox;
