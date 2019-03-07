import React from 'react';

const Cockpit = (props) => {
    const style={
        backgroundColor:'green',
        color:'white',
        font:'inherit',
        border:'1z solid blue',
        padding: '8px',
        cursor: 'pointer',
        borderRadius : '5px'
    };

    if(props.showPersons){
        style.backgroundColor = 'red';
    }
    return(
        <div>
            <h1> Hi I'am React App</h1>
            <button style={style} onClick={() => { props.clicked()} }>show / Hide Persons</button>
        </div>
    )

}

export default Cockpit