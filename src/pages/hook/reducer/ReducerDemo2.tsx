import { Button } from 'antd';
import React from 'react';
import { useReducer } from 'react';
interface IState {
  count: number;
  name: string;
  age: number;
}
class StateInfo {
  count: number = 0;
  name: string = "名字";
  age: number = 20
}
const initialState: IState = new StateInfo();

function reducer(state: IState, action: { type: string, payload?: any }) {
  const { type, payload } = action;
  switch (type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: state.count - (payload ? payload : 1) };
    default:
      throw new Error();
  }
}


function ReducerDemoTwo({ }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Button
        onClick={() => dispatch({ type: 'reset', payload: 2 })}>
        Reset
      </Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
      <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
      <p>Count: {state.count}</p>
    </>
  )
}
export default ReducerDemoTwo;