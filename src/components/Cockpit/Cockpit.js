import React,{useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) =>{

	useEffect(()=>{
		console.log('useEffect Rendering');
		setTimeout( () =>{
			alert('Data Saved to Could');
		},1000);
	},[])

	const assignedClasses = [];
	let btnClasses = '';
	if(props.showPersons){
		btnClasses = classes.Red;
	}

    if(props.persons.length<=2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length<=1){
      assignedClasses.push(classes.bold);
    }

	return(
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
	        <p className={assignedClasses.join(' ')}> Welcome to Siva World</p>
	        <button className={btnClasses} onClick={props.clicked}>
	            Toggle Persons 
	        </button>
		</div>
	);
}

export default cockpit;