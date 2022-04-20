import React from "react";
import "./App.css";
import Characters from "./characters";

function App() {
  return (
    <div className="App" id="app">
      <div className=" row">
        <div className="col-12 characters-title">
          <h1>MARVEL CHARACTERS</h1>
        </div>
      </div>
      <Characters />
    </div>
  );
}

export default App;
