import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
      persons: [
                { id: 121, name: 'vinay' , age: 29},
                { id: 122,name: 'chinna' , age: 29},
                { id: 123, name: 'chinna' , age: 40},
      ],
      otherState: 'sample text',
      showPersons: false,
      textLength : 0,
      textValue: ''
  }

  switchNameHandler = ()=>{
      // Don't do this this.state.persons[0].name = 'hellllo';
      this.setState({ persons: [
              { id: 121, name: 'vijay' , age: 30},
              { id: 122, name: 'nani' , age: 29},
              { id: 123, name: 'satish' , age: 35},
          ]})
  }

  switchNameDynaimcHandler = (newName) => {
      this.setState({
          persons: [
              { id: 121, name: newName.name , age: newName.age},
              { id: 122, name: 'nani' , age: 29},
              { id: 123, name: 'satish' , age: 35},
          ]
      })
  }

    NameChangeDynaimcHandler = ( event, index ) => {
      const person = {...this.state.persons[index]};
      person.name = event.target.value;
      const persons = this.state.persons;
      persons[index]=person;

      this.setState({
            persons: persons
      })
    }
    setTextLengthHandler = ( event ) => {
        const strlength = event.target.value.length;
        const textValue = event.target.value;
            this.setState({ textLength: strlength, textValue: textValue })
    }

    deletePersonHandler = (personIndex) => {
        const persons = [ ...  this.state.persons];
        persons.splice(personIndex , 1 );
        this.setState( { persons: persons } );
    }

    deleteCharFromTextHandler = (charIndex) => {
        const actTextArr = [...this.state.textValue.split('')];
        actTextArr.splice(charIndex,1);
        const actTxt = actTextArr.join('');
        const actTxtlen = actTxt.length;
        this.setState({ textValue : actTxt , textLength: actTxtlen});
    }
    togglePersonsHandler = () => {
      const curState = this.state.showPersons;
      this.setState({ showPersons: !curState });
      console.log(this.state.showPersons);
    }
  render() {
      const style={
          backgroundColor:'white',
          font:'inherit',
          border:'1z solid blue',
          padding: '8px',
          cursor: 'pointer'
      }

      let persons = null;
      if(this.state.showPersons){
        persons = ( 
          <div>

              { this.state.persons.map( ( person , index )  => {
                    return <Person changed={( event ) => this.NameChangeDynaimcHandler( event, index)} click={this.deletePersonHandler.bind( this, index )} name={ person.name } age={ person.age} key={person.id}/>
              })
              }
                  {/*<Person changed={this.NameChangeDynaimcHandler} click={this.switchNameHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies : Surfing Internet </Person>*/}
                  {/*<Person changed={this.NameChangeDynaimcHandler} click={this.switchNameHandler} name={this.state.persons[2].name} age ={this.state.persons[2].age}/>*/}
                  
          </div>
        )
      }

      let chars = null;
      if(this.state.textLength > 0){
          const strArr = this.state.textValue.split('');
          chars = (
              <div>
                  { strArr.map( ( char , index )  => {
                      return <Char character={char} click={this.deleteCharFromTextHandler.bind(this,index)}/>
                  })
                  }
              </div>
          )
      }



    return (
            <div className="App">
              {/*<header className="App-header">*/}
                {/*/!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
                {/*</header>*/}
                <p>
                 Hi Iam react app ,
                </p>

                  <button style={style} onClick={this.switchNameHandler}>Change Name</button>

                  <button  style={style} onClick={this.togglePersonsHandler}>show / Hide Persons</button>
                <br/>
                <div>
                    <span>
                       Enter some text : &nbsp;
                    </span>
                    <input onChange={(event) => this.setTextLengthHandler(event)} type="text" value={this.state.textValue} />
                    <span> Lenght of the string is { this.state.textLength }</span>
                    <Validation length={this.state.textLength}/>

                    <div>
                        {this.state.textValue}
                        {chars}
                    </div>


                </div>

                  {/* { this.state.showPersons ? 
                  <div>
                   <Person changed={this.NameChangeDynaimcHandler} click={this.switchNameDynaimcHandler.bind(this, {name:'sample', age:34} )} name={this.state.persons[0].name } age={this.state.persons[0].age}/>
                  <Person changed={this.NameChangeDynaimcHandler} click={this.switchNameHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies : Surfing Internet </Person>
                  <Person changed={this.NameChangeDynaimcHandler} click={this.switchNameHandler} name={this.state.persons[2].name} age ={this.state.persons[2].age}/>
                  </div> : null
                  } */}
                  { persons}

            </div>

          );

     // return React.createElement('div' , {className:'App'}, React.createElement('p',null, 'Hi, I\'m React App'));
  }
}

export default App;
