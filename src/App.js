import React, { Component } from 'react';
import Header from './Components/Header'
import Todos from './Components/Todos';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Todos />
      </div>
    );
  }
}

export default App;
