import { combineReducers } from 'redux'; 
import clockReducer from './ClockReducer';
import colorReducer from './ColorReducer';


const rootReducer = combineReducers({
    clock: clockReducer,
    color: colorReducer,
})

export default rootReducer;