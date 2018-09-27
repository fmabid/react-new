import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'asfa1', name: 'Abid', age: 22},
      {id: 'vadf1', name: 'Atik', age: 24},
      {id: 'asf11', name: 'Shahed', age: 25}
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

  nameChangedHandler = (event, id) => {  //   For handling the input event.
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
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

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => {this.nameChangedHandler(event, person.id)}} />
            )
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
