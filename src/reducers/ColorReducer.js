import types from '../actions/Types';

const DEFAULT_STATE = {
    color: '#bbbbbb',
}

export default function colorReducer(state = DEFAULT_STATE, action){
    switch(action.type) {
        case types.CHANGE_COLOR: 
        console.log(action.payload)
            return {
                ...state, 
                color: action.payload
            }
        default: 
            return state
    }

}