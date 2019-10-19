import * as actionTypes from './actions';
const initialState = {
    persons: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: 121, name: 'dynamo', age: '30'
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            };
        case actionTypes.REMOVE_PERSON:
            return state;
    }
    return state;
}

export default reducer;