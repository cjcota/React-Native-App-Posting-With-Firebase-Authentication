import {combineReducers} from 'redux';
import exampleReducer from './exampleReducer';
import secondReducer from './secondReducer';
import feedReducer from './feedReducer';
export default combineReducers({
  counter: exampleReducer,
  second: secondReducer,
  feed: feedReducer,
});
