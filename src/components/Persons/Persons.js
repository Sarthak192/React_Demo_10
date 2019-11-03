import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props){
    super(props)
    console.log("[Persons.js] constructor")
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] getDerivedStateFromProps', props);
    return null;
  }

  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.persons !== this.props.persons){
      return true
    }
    else{
      return false
    }
  }
    
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("[Persons.js] getSnapshotBeforeUpdate")
    return {message: "Hello World"}
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log("[Persons.js] componentDidUpdate")
    console.log(snapshot)
  }

  componentDidMount() {
    console.log('[Persons.js] componentDidMount');
  }

  // componentWillReceiveProps(){
  //   console.log("[Persons.js] componentWillReceiveProps")
  // }

  // componentWillUpdate(){

  // }

  componentWillUnmount(){
    console.log("[Persons.js] componentWillUnmount")
  }

  render(){
  console.log('[Persons.js] rendering...');
  return this.props.persons.map((person, index) => {
    return (
      <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => this.props.changed(event, person.id)}
      />
    );
  });
}
}

export default Persons;
