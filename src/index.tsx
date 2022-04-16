import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { KanjiProvider, GuessProvider } from "./components/";

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
