import { SET_COUNTER } from './types';
export const exampleIncrement = () => {
  return {
    type: 'INCREMENT'
  }
}
export const exampleDecrement = () => {
  return {
    type: 'DECREMENT'
  }
}
export const exampleSet = (number) => {
  return {
    type: SET_COUNTER,
    payload: number
  }
}
