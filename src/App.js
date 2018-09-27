import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let btnClicked = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => {this.nameChangedHandler(event, person.id)}} />
              </ErrorBoundary>
            )
          })}
        </div>
      );

      btnClicked = classes.Black
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes=['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes=['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>The React App</h1>
        <p className={assignedClasses.join(' ')}>It's working</p>

        <button
          className={btnClicked}
          onClick={this.tooglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
