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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>The React App</h1>

        <button
          className="btnStyle"
          onClick={this.tooglePersonsHandler}>Toggle persons</button>
        {persons}

      </div>
    );
  }
}

export default App;
