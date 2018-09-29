import React from 'react';

import classes from "./Cockpit.css";


const cockpit = (props) => {
  const assignedClasses = [];
  let btnClicked = null;

  if (props.showPersons) {
    btnClicked = classes.Black
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes=['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes=['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>It's working</p>

      <button
        className={btnClicked}
        onClick={props.clicked}>Toggle persons</button>
    </div>
  );
};

export default cockpit;