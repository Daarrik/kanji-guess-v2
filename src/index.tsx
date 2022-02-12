import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import KanjiProvider from "./components/ContextProviders/KanjiProvider";
import GuessProvider from "./components/ContextProviders/GuessProvider";

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
