import { useState, useEffect, useContext } from "react";
import { KanjiContext } from "../ContextProviders/KanjiProvider";

const Details: React.FC = () => {
  const { kanji } = useContext(KanjiContext);
  const [info, setInfo] = useState<[]>([]);

  // useEffect hook to fetch data from kanjiapi.dev
  // const { data } = axios(`https://www.kanjiapi.dev/v1/${kanji.split("")[0]}`);
  // setInfo(data.filter(word => word === kanji)[0])
  // blah blah blah something like this have to look at api shape

  return <div>{}</div>;
};

export default Details;
