interface CharBoxProps {
  kana: string;
}

const CharBox: React.FC<CharBoxProps> = ({ kana }) => {
  return <button>{kana}</button>;
};

export default CharBox;
