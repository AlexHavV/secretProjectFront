import './App.css';
import Header from './component/header'
import Login from './component/pages/login';
import Register from './component/pages/register';
import SearchPage from './component/pages/search';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            {/* <Profile /> */}
          </Route>
        </Switch>
      </div>
      {/* <Footer /> */}
    </Router>
    )
  }
}

export default App;
