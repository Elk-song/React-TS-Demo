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
function reducer(state: IState, action: { type: string; }) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
}
function ReducerDemo1() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
      <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
      <p>Count: {state.count}</p>

    </>
  )
}
export default ReducerDemo1;