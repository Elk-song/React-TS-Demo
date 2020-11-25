import { Button, Card, Divider, Input } from 'antd';
import React, { useRef } from 'react';
import ChildDemo from "./ChildDemo";
function UseRef() {
  const normal = useRef(null);
  const parentRef = useRef(null);
  const onNormalFocus = () => {
    (normal.current as unknown as Input).focus();
  }

  const onChildFocus = () => {
    (parentRef.current as any).inputFocus();
  }
  return (
    <>
      <Card title="useRef">
        <p>1. useRef返回一个可变的 ref 对象，返回的 ref 对象在组件的整个生命周期内保持不变。</p>
        <p>2. 基础使用useRef，在节点上绑定ref即可</p>
        <Button type="primary" onClick={onNormalFocus}>测试基础useRef---输入框聚焦</Button>
        <Input size="small" ref={normal} />
        <Divider />
        <h3>forwardRef + useImperativeHandle</h3>
        <p>1. 直接转发 ref 是将 React.forwardRef 中函数上的 ref 参数直接应用在了返回元素的 ref 属性上，其实父、子组件引用的是同一个 ref 的 current 对象。</p>
        <p>2. 官方不建议使用这样的 ref 透传，而使用 useImperativeHandle 后，可以让父、子组件分别有自己的 ref，通过 React.forwardRef 将父组件的 ref 透传过来，通过 useImperativeHandle 方法来自定义开放给父组件的 current。</p>
        <Button type="primary" onClick={onChildFocus}>测试子组件useRef</Button>
        <ChildDemo ref={parentRef} />
      </Card>
    </>
  )
}
export default UseRef;