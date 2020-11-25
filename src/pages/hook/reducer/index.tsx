import { Card, Divider } from 'antd';
import React from 'react';
import ReducerDemo1 from "./ReducerDemo1";
import ReducerDemo2 from "./ReducerDemo2";
import ReducerDemo3 from "./ReducerDemo3";
function UseReducer() {
  return (
    <>
      <Card title="useReducer">
        使用场景：
        由于useState的更新函数采用的是替换的方式，当我们要在函数组件中处理复杂状态时，如对象和数组等等，使用useState就不尽人意了。
        因此，我们使用useReducer来解决这一问题
      </Card>
      <div className="context-demo">
        <Divider />
        <ReducerDemo1 />
        <Divider />
        <ReducerDemo2 />
        <Divider />
        <ReducerDemo3 initialCount={0} />
      </div>
    </>
  )
}
export default UseReducer;