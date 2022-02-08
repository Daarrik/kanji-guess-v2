import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import KanjiProvider from "./components/context/KanjiProvider";
import GuessProvider from "./components/context/GuessProvider";

ReactDOM.render(
  <React.StrictMode>
    <KanjiProvider>
      <GuessProvider>
        <App />
      </GuessProvider>
    </KanjiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
