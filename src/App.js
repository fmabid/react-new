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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
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
