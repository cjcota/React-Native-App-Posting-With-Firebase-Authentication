import {combineReducers} from 'redux';
import exampleReducer from './exampleReducer';
import secondReducer from './secondReducer';
export default combineReducers({
  counter: exampleReducer,
  second: secondReducer,
});
