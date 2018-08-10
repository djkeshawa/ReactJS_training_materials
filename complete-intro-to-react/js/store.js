import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

// here the devtools and thunks are middleware to augment the abilities of the redux
const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;