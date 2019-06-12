import {createStore,combineReducers} from 'redux';
import userReducer from './reducers/userReducer';

let AllReducers = combineReducers({userReducer});

let store = createStore(AllReducers)
export { store };