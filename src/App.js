import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <h1 className="title" id="mainTitle">
          Bug Tracker
        </h1>
        <h4 className="subtitle" id="mainSubtitle">
          If you want best software for tracking bugs, you are on the good
          place!
        </h4>
        <div className="mainMenu">
          <Router>
            <Link
              type="button"
              id="loginButton"
              className="btn btn-outline-danger loginButton"
              to="/login"
            >
              Log in
            </Link>
            <Link
              type="button"
              id="registerButton"
              className="btn btn-danger registerButton"
              to="/register"
            >
              Register
            </Link>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
