import React from 'react';
import classes from './Person.css';


const person = (props) =>{

	const style ={ color:'blue', text :'bold' }
	console.log('[person.js] rendering......')
	return (
		<div className = {classes.Person}>
		<h3 style ={style} onClick={props.click}>This is {props.name} Block.</h3>												
		<p>{props.children}</p>	
		<p>{props.text}</p>
		<br/>
		<input type="text" onChange = {props.changed}  placeholder="Start Writing here..." /> 							
		</div>
		);															
}  

export default person;
