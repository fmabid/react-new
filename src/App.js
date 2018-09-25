import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi React</h1>
        <Person name="Abid" age="23" />
        <Person name="Atik" age="24" />
        <Person name="Shahed" age="25" />
      </div>
    );
  }
}

export default App;
