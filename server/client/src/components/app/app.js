import React from 'react';
import './app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import Login from "../login/login";
import Header from "../header/header";

const App = () => {
  return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/dashboard">
                <Header/>
                <Dashboard/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
  );
};

export default App;