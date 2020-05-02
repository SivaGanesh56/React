import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons : [
    {id:"ass1",name:"Siva",text:""},   
    {id:"assms2",name:"Ganesh",text:""},
    {id:"ssksl2",name:"Manyam",text:""} 
   ],
   otherState:'Some Other Value',
   showPersons : false
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  ComponentDidUpdate(){
    console.log('[App.js] ComponentDidUpdate');
  }

  nameChangeHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id; 
    });

    const person = {...this.state.persons[personIndex]}; // copy
    person.text = event.target.value;
    const persons = [...this.state.persons]; // DeepCopy of Persons Object
    persons[personIndex] = person;
    this.setState({
      persons:persons
    })
  }

  deletePersonHandler = (index) =>{
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});
  }

  togglePersons = () =>{
    const show = this.state.showPersons;
    this.setState({
      showPersons:!show
    })
  }

  render() {
    console.log('Main Method was Rendering.....')
    let persons = null;
    if(this.state.showPersons) {
      persons= <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed ={this.nameChangeHandler}  /> 
    }

    return (
      <div className={classes.App}>
          <Cockpit
            title = {this.props.appTitle}
            showPersons = {this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.togglePersons}
            />
          {persons}                                                                      
      </div> 
    );
  }
}

export default App;