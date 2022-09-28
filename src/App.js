import React from "react";
import Board from "./components/board/Board";
import Start from "./components/start/Start";
import "./index.css";
const App = () => {
  return (
    <div className="container App">
      <Start />
      <Board />
    </div>
  );
};

export default App;
