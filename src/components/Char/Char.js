import React from 'react';
import './Char.css'

const Char = (props) => {
    return <div className="char" key={props.keys} onClick={props.click}>{props.character}</div>
}

export default Char;