import { SET_COUNTER } from '../actions/types';
export default (state = 0, action) => {

  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case SET_COUNTER:
      return action.payload;
    default:
      return state;
  }
}
