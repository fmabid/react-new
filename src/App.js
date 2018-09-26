import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Abid', age: 22},
      {name: 'Atik', age: 24},
      {name: 'Shahed', age: 25}
    ],
    otherState: "some other value.",
    showPersons: false
  };

  switchNameHandler = (newName) =>{  // For the click event.
    //console.log("Clicked")
    this.setState({
      persons: [
        {name: newName, age: 22},
        {name: 'Atik', age: 24},
        {name: 'Shahed', age: 32}
      ]
    })
  };

  nameChangedHandler = (event) => {  //   For handling the input event.
    this.setState({
      persons: [
        {name: "Abid", age: 22},
        {name: event.target.value, age: 24},
        {name: 'Shahed', age: 25}
      ]
    })
  };

  tooglePersonsHandler = () => {
    const doesShow =  this.state.showPersons;
    this.setState(
      {
        showPersons: !doesShow
      }
    );
  };


  render() {
    return (
      <div className="App">
        <h1>The React App</h1>

        <button
          className="btnStyle"
          onClick={this.tooglePersonsHandler}>Toggle persons</button>

        {
          this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Abid!!!')}
              changed={this.nameChangedHandler}>My Hobbies: Programming</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div> : null
        }
      </div>
    );
  }
}

export default App;
