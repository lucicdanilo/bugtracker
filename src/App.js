import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <h1 className="title">Bug Tracker</h1>
        <h4 className="subtitle">
          If you want best software for tracking bugs, you are on the good
          place!
        </h4>
        <div className="mainMenu">
          <button type="button" className="btn btn-outline-danger loginButton">
            Log in
          </button>
          <button type="button" className="btn btn-danger registerButton">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
