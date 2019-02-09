import {PRESS_HELLO_BTN} from '../actions/types';
const initialState = {
  helloText: 'Hello',
  loading: true,
  number: 1
}
export default (state = initialState, action) => {
  switch(action.type) {
    case PRESS_HELLO_BTN:
      return {...state, helloText: 'hi'};
    default:
      return state
  }
}
