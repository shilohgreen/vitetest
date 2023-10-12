//recall that everyone will receive a black box - no need result entry
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Send Email from React App using EmailJS</h1>
      <hr>
      </hr>
      <Game />
    </div>
  );
}
// create a usestate to keep track of completion
// when completed
// use params to pass value from parent to child
export default App;
