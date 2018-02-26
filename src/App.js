import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import {Route} from 'react-router-dom';
import HomePage from './Components/pages/HomePage'
import LoginPage from './Components/pages/LoginPage'


class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Route path="/" exact  component={HomePage} />
        <Route path="/login" exact  component={LoginPage} />
      </div>
    );
  }
}

export default App;
