import React from 'react'
import classes from './Person.css'
// import Radium from 'radium';
const person= (props)=>
{ 
    // const style= 
    // {
    //     '@media(min-width: 500px':
    //     {
    //         width: '450px'
    //     }
    // }
    // return <p>i'm Sandeep Chand. I'm {Math.floor(Math.random()* 30)}</p>
    return ( 
        <div className= {classes.Person}>
            <p onClick= {props.click}>i'm {props.name}. I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text"  onChange= {props.changed} value={props.name}></input>

        </div>
)
   

};
export default person;