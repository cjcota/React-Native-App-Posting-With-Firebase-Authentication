import { SET_COUNTER } from '../actions/types';
export default (state = 3, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 5;
    case SET_COUNTER:
      return state + action.payload;
    default:
      return state;
  }
}
