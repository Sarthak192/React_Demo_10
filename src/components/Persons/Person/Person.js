import React, { Component } from 'react';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../Context/auth-context'

class Person extends Component {
  constructor(props){
    super(props)
    this.inputElementRef = React.createRef()
  }

  componentDidMount(){
    // document.querySelector("input").focus();   ----- it focus on the first element
    // this.inputElement.focus() ----- First Way
    this.inputElementRef.current.focus()
  }
  render() {
    console.log('[Person.js] rendering...');
    return (
        <React.Fragment>
          <AuthContext.Consumer>
            {(context)=>
              context.authenticated ? <p>Authenticated</p> : <p>Please Login</p>
            }
          </AuthContext.Consumer>
          <p key="i1" onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          <p key="i2">{this.props.children}</p>
          <input
            ref = {this.inputElementRef}
            // ref = {(inputEl)=> this.inputElement = inputEl}
            key="i3"
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </React.Fragment>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);
