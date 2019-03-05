import React from 'react';
import  './Validation.css';

const Validation = (props) => {
    let valid = null;
    if( props.length > 0 && props.length < 5){
        valid = <div className="error"> Text is too small.</div>
    }
    if(props.length > 15){
        valid = <div className="error"> Text is too Long.</div>
    }
    return valid
}

export default Validation;