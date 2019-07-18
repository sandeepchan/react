import React, {Component} from 'react';


import './App.css';
import Person from './Person/Person';
class  App extends Component
{
  state={
    persons:[
      {
        id:'abc', name:"IDK", age:25
      },
      {
        id:'bcd', name:"Sandeep", age:23
      },
      {
        id:'def', name:"pra", age:20
      }
    ],
    showPersons: false
  }
  // switchNameHandler=(newName)=>
  // {
  //   // console.log('hi')
  //   // this.state.persons[0].name= 'sandeepchand'
  //   this.setState(
  //     {
  //       persons:[
  //         {
  //           name: 'IDK', age:25
  //         },
  //         {
  //           name: newName, age:23
  //         },
  //         {
  //           name: "pra", age:19
  //         }
  //       ]
  //     }
  //   )
  // }
  nameChangedHandler=(event,id)=>
  { 
    const personIndex= this.state.persons.findIndex(p=>
      {
        return p.id === id
      });
      // const person= this.state.persons[personIndex] can use it
      // const person= Object.assign({}, thid.state.persons[personIndex]) can also this
      const person= {...this.state.persons[personIndex]}
      person.name= event.target.value;
      const persons= [...this.state.persons];
      persons[personIndex]= person;
      this.setState({persons})
  //   this.setState(
  //   {
  //     persons:[
  //       {
  //         name: 'Neelam', age:25
  //       },
  //       {
  //         name:event.target.value , age:23
  //       },
  //       {
  //         name: "prashansa", age:19
  //       }
  //     ]
  //   }
  // )
}
toogelHandler= ()=>
{
  const doesShow= this.state.showPersons;
  this.setState({showPersons: !doesShow})
}
deletePerson=(personIndex)=>
{
  // const persons= this.state.persons.slice();
  const persons= [...this.state.persons]
  persons.splice(personIndex, 1)
  this.setState({persons:persons})
}

  
  render()
  {
    const style= {
      
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if(this.state.showPersons)
    {
      persons= (
        <div>
          {this.state.persons.map((person, index)=>
          {
            return <Person 
            click= {()=> this.deletePerson(index)}
            name= {person.name} 
            age= {person.age} 
            key= {person.id}
            changed= {(event=> this.nameChangedHandler(event, person.id))} />
          })}

        </div>
      )
        }
        // <div>
        // <Person name={this.state.persons[0].name} age= {this.state.persons[0].age} />
        // <Person name={this.state.persons[1].name} age= {this.state.persons[1].age} 
        // click= {this.switchNameHandler.bind(this, 'Sandeep')}
        // changed= {this.nameChangedHandler} >my Hobbie: playing Guitar</Person>
        // <Person name={this.state.persons[2].name} age= {this.state.persons[2].age} />
        // </div>
    //   )
    // }
    return(
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* <Person name="neelam" age= "24" />
        <Person name="sandeep" age= "23" >my Hobbie: playing Guitar</Person>
        <Person name="prashansa" age= "20" /> */}
        <button style= {style}  onClick={this.toogelHandler}>Switch Name</button>
        {/* <button style= {style} onClick={this.switchNameHandler.bind('this', 'Sandeep Chand')}>Switch Name</button>
        */}
        {/* <button onClick={()=> this.switchNameHandler('Sandeep Chand')}>Switch Name</button> */}
        {/* {
          this.state.showPersons === true ?
          <div>
            <Person name={this.state.persons[0].name} age= {this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age= {this.state.persons[1].age} 
            click= {this.switchNameHandler.bind(this, 'Sandeep')}
            changed= {this.nameChangedHandler} >my Hobbie: playing Guitar</Person>
            <Person name={this.state.persons[2].name} age= {this.state.persons[2].age} />
        </div> : null

        } */}
        {persons}
        

      </div>
    )
  }
}



export default App;
