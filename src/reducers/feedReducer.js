import {PRESS_HELLO_BTN} from '../actions/types';
const initialState = {
  postText: '',
  postArray: [{icon: "ios-cafe", text: "Hey this is my first post"},{icon: "ios-cafe", text: "Hey this is my second post"},{icon: "ios-cafe", text: "Hey this is my third post"}],
  displayView: false,
}
export default (state = initialState, action) => {
  switch(action.type) {
    case 'SET_TEXT':
      return {...state, postText: action.payload};
    case 'POST_TEXT':
      return {postArray: [{icon: "ios-cafe", text: action.payload}, ...state.postArray]};
    case 'DISP_VIEW':
      return {...state, displayView: !state.displayView};
    default:
      return state
  }
}
