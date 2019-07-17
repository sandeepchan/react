import React from 'react'
import './Person.css'
const person= (props)=>
{
    // return <p>i'm Sandeep Chand. I'm {Math.floor(Math.random()* 30)}</p>
    return ( 
        <div className="Person">
            <p onClick= {props.click}>i'm {props.name}. I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text"  onChange= {props.changed} value={props.name}></input>

        </div>
)
   

};
export default person;