import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Abid', age: 22},
      {name:'Atik', age: 24},
      {name:'Shahed', age: 25}
    ],
    otherState: "some other value."
  };

  switchNameHandler = () =>{
    //console.log("Clicked")
    this.setState({
      persons: [
        {name:'Ony', age: 22},
        {name:'Atik', age: 24},
        {name:'Shahed', age: 32}
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <h1>The React App</h1>

        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Programming</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
