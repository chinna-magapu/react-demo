import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
      persons: [
                { name: 'vinay' , age: 29},
                  { name: 'chinna' , age: 29},
                  { name: 'chinna' , age: 40},
      ],
      otherState: 'sample text'
  }

  switchNameHandler = ()=>{
      // Don't do this this.state.persons[0].name = 'hellllo';
      this.setState({ persons: [
              { name: 'vijay' , age: 30},
              { name: 'nani' , age: 29},
              { name: 'satish' , age: 35},
          ]})
  }

  switchNameDynaimcHandler = (newName) => {
      this.setState({
          persons: [
              { name: newName.name , age: newName.age},
              { name: 'nani' , age: 29},
              { name: 'satish' , age: 35},
          ]
      })
  }

    NameChangeDynaimcHandler = (event) => {
        this.setState({
            persons: [
                { name: 'nani' , age: 29},
                { name: event.target.value , age: 29},
                { name: 'satish' , age: 35},
            ],
            showPersons: false
        })
    }
  render() {
      const style={
          backgroundColor:'white',
          font:'inherit',
          border:'1z solid blue',
          padding: '8px',
          cursor: 'pointer'
      }
    return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                 Hi Iam react app ,
                </p>
                  <button style={style} onClick={this.switchNameHandler}>Change Name</button>
                  <div>
                  <Person changed={this.NameChangeDynaimcHandler} click={this.switchNameDynaimcHandler.bind(this, {name:'sample', age:34} )} name={this.state.persons[0].name } age={this.state.persons[0].age}/>
                  <Person changed={this.NameChangeDynaimcHandler} click={this.switchNameHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies : Surfing Internet </Person>
                  <Person changed={this.NameChangeDynaimcHandler} click={this.switchNameHandler} name={this.state.persons[2].name} age ={this.state.persons[2].age}/>
                  </div>
              </header>
            </div>

          );

     // return React.createElement('div' , {className:'App'}, React.createElement('p',null, 'Hi, I\'m React App'));
  }
}

export default App;
