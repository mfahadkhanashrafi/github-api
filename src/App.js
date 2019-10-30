import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApiList from './Components/apiList';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <lable className="App-title">Welcome to React</lable>
        </header>
        <hr />
        <ApiList />
      </div>
    );
  }
}

export default App;
