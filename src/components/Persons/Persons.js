import React from 'react'
import Person from './Person/Person';

const Persons = ( props ) => {
    console.log('rendering persons component');
    return (
        <div>
            {
                props.persons.map( ( person , index )  => {
                return <Person
                    name={ person.name }
                    age={ person.age}
                    key={person.id}
                    click={() => { props.clicked(index) } }
                    changed={ (event) => { props.changed( event, index )} }
                />
            })
            }
        </div>
    )

}

export default Persons;