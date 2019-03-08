import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import Validation from '../components/Validation/Validation';
import Char from '../components/Char/Char';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

    constructor( props ){
            super(props);
            console.log('[App.js], constructor');
        this.state = {
            persons: [
                {id: 121, name: 'vinay', age: 29},
                {id: 122, name: 'chinna', age: 29},
                {id: 123, name: 'chinna', age: 40},
            ],
            otherState: 'sample text',
            showPersons: false,
            textLength: 0,
            textValue: ''
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log('[App.js] | getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount(){
        console.log('[App.js] | componentDidMount');
    }


    switchNameHandler = () => {
        // Don't do this this.state.persons[0].name = 'hellllo';
        this.setState({
            persons: [
                {id: 121, name: 'vijay', age: 30},
                {id: 122, name: 'nani', age: 29},
                {id: 123, name: 'satish', age: 35},
            ]
        })
    }

    switchNameDynaimcHandler = (newName) => {
        this.setState({
            persons: [
                {id: 121, name: newName.name, age: newName.age},
                {id: 122, name: 'nani', age: 29},
                {id: 123, name: 'satish', age: 35},
            ]
        })
    }

    NameChangeDynaimcHandler = (event, index) => {
        const person = {...this.state.persons[index]};
        person.name = event.target.value;
        const persons = this.state.persons;
        persons[index] = person;

        this.setState({
            persons: persons
        })
    }

    setTextLengthHandler = (event) => {
        const strlength = event.target.value.length;
        const textValue = event.target.value;
        this.setState({textLength: strlength, textValue: textValue})
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    deleteCharFromTextHandler = (charIndex) => {
        const actTextArr = [...this.state.textValue.split('')];
        actTextArr.splice(charIndex, 1);
        const actTxt = actTextArr.join('');
        const actTxtlen = actTxt.length;
        this.setState({textValue: actTxt, textLength: actTxtlen});
    }

    togglePersonsHandler = () => {
        const curState = this.state.showPersons;
        this.setState({showPersons: !curState});
        console.log(this.state.showPersons);
    }

    render() {

        console.log('render');
        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                changed={this.NameChangeDynaimcHandler}
                clicked={this.deletePersonHandler}
            />
        }

        let chars = null;
        if (this.state.textLength > 0) {
            const strArr = this.state.textValue.split('');
            chars = (
                <div>
                    {strArr.map((char, index) => {
                        return <Char key={ index } character={char}  click={this.deleteCharFromTextHandler.bind(this, index)}/>
                    })
                    }
                </div>
            )
        }


        return (
            <div className="App">
                <Cockpit showPersons={this.state.showPersons} clicked={this.togglePersonsHandler}/>
                <div>
                <span>
                    Enter some text : &nbsp;
                    </span>
                    <input onChange={(event) => this.setTextLengthHandler(event)} type="text"
                           value={this.state.textValue}/>
                    <span> Lenght of the string is {this.state.textLength}</span>
                    <Validation length={this.state.textLength}/>
                    <div>
                        {this.state.textValue}
                        {chars}
                    </div>
                </div>
                {persons}
            </div>
        );

        // return React.createElement('div' , {className:'App'}, React.createElement('p',null, 'Hi, I\'m React App'));
    }
}

export default App;
