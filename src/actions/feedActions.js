export const setPostText = (text) => {
  return {
    type: 'SET_TEXT',
    payload: text,
  }
}
export const postText = (text) => {
  return {
    type: 'POST_TEXT',
    payload: text,
  }
}
export const dispView = () => {
  return {
    type: 'DISP_VIEW',
  }
}
