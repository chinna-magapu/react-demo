import React , { Component} from 'react';
import './Person.css';
class Person extends Component {
render(){
    return (
        <div className="Person"><p onClick={ this.props.click } > I'm a { this.props.name } from person component. i am { this.props.age } years old.</p>
    <p> { this.props.children }</p>
        <input onChange={ this.props.changed } type="text" value={ this.props.name }/>
    </div> )
}
}

export default Person;
