import React , { Component} from 'react';
import './Person.css';
import Wrap from '../../../hoc/Wrap';
import propTypes from 'prop-types';
const Person = (props) => {   

    return (
        <Wrap>
        <div className="Person"><p onClick={ props.click } > I'm a { props.name } from person component. i am { props.age } years old.</p>
    <p> { props.children }</p>
        <input onChange={ props.changed } type="text" value={ props.name }/>
    </div>
        </Wrap>
    )
}

Person.propTypes={
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    changed: propTypes.func
}
}

export default Person;
