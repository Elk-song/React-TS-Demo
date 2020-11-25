import { Button } from 'antd';
import React from 'react';
import { useReducer } from 'react';
interface IState {
  count: number;
}
function init(initialCount: number) {
  return { count: initialCount };
}
function reducer(state: IState, action: { type: string; payload?: any }) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}
function ReducerDemo3({ initialCount }: any) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      <Button
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
        Reset
      </Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
      <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
      <p>Count: {state.count}</p>

    </>
  )
}
export default ReducerDemo3;