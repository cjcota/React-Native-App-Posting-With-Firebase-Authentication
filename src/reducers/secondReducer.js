const initialState = {
  helloText: 'Hello',
  loading: true,
  number: 1,
}
export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
