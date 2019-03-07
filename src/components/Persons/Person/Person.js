import React from 'react';
import './Person.css';
const Person = (props) => {
    return ( <div className="Person"><p onClick={ props.click } > I'm a { props.name } from person component. i am { props.age } years old.</p>
    <p> { props.children }</p>
        <input onChange={ props.changed } type="text" value={ props.name }/>
    </div> )
}

export default Person;
