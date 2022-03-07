import { useContext, useEffect } from "react";
import { KanjiContext } from "../ContextProviders/KanjiProvider";

const Details: React.FC = () => {
  const { kanji } = useContext(KanjiContext);

  // useEffect hook to fetch data from kanjiapi.dev
  // const { data } = axios(`https://www.kanjiapi.dev/v1/${kanji.split("")[0]}`);


  return <div>{}</div>;
};

export default Details;
