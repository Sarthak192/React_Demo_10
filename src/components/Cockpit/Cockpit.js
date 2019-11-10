import React, { useEffect, useRef } from 'react';
import AuthContext from '../../Context/auth-context'
import classes from './Cockpit.css';

const cockpit = props => {
  const toggleBtnRef = useRef(null)
  // toggleBtnRef.current.click()  We cannot call this just after this because when we call this at that time
                                // render() is not called so the perfect place to call it in useEffect because
                                // useEffect calls just after render()

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    toggleBtnRef.current.click()
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  // useEffect();

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button ref = {toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {(context)=><button onClick = {context.login}>Login</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(cockpit);