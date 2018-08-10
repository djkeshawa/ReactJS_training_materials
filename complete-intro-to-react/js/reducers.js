import {SET_SEARCH_TERM,ADD_API_DATA} from './actions';
import {combineReducers} from 'redux';

// before refactoring

// const DEFAULT_STATE = {
//     searchTerm: ''
// };
// // here we must return a new state
// const setSearchTerm = (state,action) => {
//     return Object.assign({},state,{searchTerm:action.payload});
// };

// const rootReducer = (state = DEFAULT_STATE, action) =>{
//     switch(action.type){
//         case SET_SEARCH_TERM:
//             return setSearchTerm(state,action)
//         default:
//             return state;
//     }
// };
// --------------------------------------------------------------
// after refactoring 

const searchTerm = (state='',action) => {
    if(action.type === SET_SEARCH_TERM){
        return action.payload;
    }
    return state;
};
const apiData = (state = {},action) => {
    if(action.type === ADD_API_DATA){
        return Object.assign({},state,{[action.payload.imdbID]: action.payload});
    }
    return state;
};

// the combine reducer will do the object.assing() behind the scenes
const rootReducer = combineReducers({searchTerm,apiData});



export default rootReducer;