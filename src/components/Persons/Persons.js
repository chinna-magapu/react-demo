import React, { Component } from 'react'
import Person from './Person/Person';


class Persons extends Component {
    // static getDerivedStateFromProps(props,state){
    //     console.log('Persons.js| getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('persons.js | should component update');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('persons.js | snapshot before component update');
        console.log(prevProps ,prevState);
        return true;
    }

    componentDidUpdate(){
        console.log('persons.js | component did update');
    }
    render(){
        console.log('rendering persons component');
        return (
            <div>
                {
                    this.props.persons.map( ( person , index )  => {
                    return <Person
                        name={ person.name }
                        age={ person.age}
                        key={person.id}
                        click={() => { this.props.clicked(index) } }
                        changed={ (event) => { this.props.changed( event, index )} }
                    />
                })
                }
            </div>
        )
    }
}

export default Persons;