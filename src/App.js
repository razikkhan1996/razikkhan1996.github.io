import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Authicate } from "./pages/Authicate";
import { HomeData } from "./pages/HomeData";

function App() {
  return (
    <Switch>
      <Route path="/">
        <Authicate>
          <Dashboard />
        </Authicate>
      </Route>
      <Route exact path="/login">
      <Authicate nonAuthenticated={true}>
          <Login  />
        </Authicate>
      </Route>


      {/* <Route path="*" render={() => "404 NOT FOUND"} /> */}
    </Switch>
  );
}

export default App;
