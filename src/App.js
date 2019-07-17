import React, {Component} from 'react';


import './App.css';
import Person from './Person/Person';
class  App extends Component
{
  state={
    persons:[
      {
        name:"IDK", age:25
      },
      {
        name:"Sandeep", age:23
      },
      {
        name:"pra", age:20
      }
    ]
  }
  switchNameHandler=(newName)=>
  {
    // console.log('hi')
    // this.state.persons[0].name= 'sandeepchand'
    this.setState(
      {
        persons:[
          {
            name: 'Neelam', age:25
          },
          {
            name: newName, age:23
          },
          {
            name: "prashansa", age:19
          }
        ]
      }
    )
  }
  nameChangedHandler=(event)=>
  { this.setState(
    {
      persons:[
        {
          name: 'Neelam', age:25
        },
        {
          name:event.target.value , age:23
        },
        {
          name: "prashansa", age:19
        }
      ]
    }
  )
}
   

  
  render()
  {
    const style= {
      
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return(
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* <Person name="neelam" age= "24" />
        <Person name="sandeep" age= "23" >my Hobbie: playing Guitar</Person>
        <Person name="prashansa" age= "20" /> */}
        {/* <button onClick={this.switchNameHandler}>Switch Name</button> */}
        <button style= {style} onClick={this.switchNameHandler.bind('this', 'Sandeep Chand')}>Switch Name</button>
        {/* <button onClick={()=> this.switchNameHandler('Sandeep Chand')}>Switch Name</button> */}
        <Person name={this.state.persons[0].name} age= {this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age= {this.state.persons[1].age} 
        click= {this.switchNameHandler.bind(this, 'Sandeep')}
        changed= {this.nameChangedHandler} >my Hobbie: playing Guitar</Person>
        <Person name={this.state.persons[2].name} age= {this.state.persons[2].age} />

      </div>
    )
  }
}



export default App;
