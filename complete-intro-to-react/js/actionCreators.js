import {SET_SEARCH_TERM, ADD_API_DATA} from './actions';
import axios from 'axios';

export function setSearchTerm(searchTerm){
    return {type:SET_SEARCH_TERM, payload: searchTerm};
}

export function resetSearchTerm(searchTerm){
    return {type:SET_SEARCH_TERM,payload: searchTerm};
}

export function addAPIData(apiData){
    console.log(apiData);
    return {type:ADD_API_DATA, payload:apiData};
}
// this function is a thunk
export function getAPIDetails(imdbID){
    console.log(imdbID)
    return dispatch => {
        // console.log(axios.get(`http://localhost:3000/${imdbID}`).then(response => dispatch(addAPIData(hello))))
        axios
        .get(`http://localhost:3000/${imdbID}`)
        .then(response =>{
            dispatch(addAPIData(response.data));
        })
        .catch(error => {
            console.log('axios error',error);
        });
    }
}