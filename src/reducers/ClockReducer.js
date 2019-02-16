import types from '../actions/Types';

const DEFAULT_STATE = {
    currentTime: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
};

function clockReducer(state=DEFAULT_STATE, action){
    switch(action.type){
        case types.TICK:
            return {
                ...state,
                currentTime: new Date().toLocaleTimeString() 
            }
        default:
            return state 
    }
}

export default clockReducer;