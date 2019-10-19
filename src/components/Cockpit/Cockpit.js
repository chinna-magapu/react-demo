import React, { useEffect } from 'react';

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

    useEffect( () => {
        console.log('USe effect | cockpit js');
        setTimeout( () => {
            alert('data saved to cloud');  })
    }, [])

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