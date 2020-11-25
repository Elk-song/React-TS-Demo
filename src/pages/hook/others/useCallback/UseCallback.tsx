import { Card, Button } from 'antd';
import React, { useCallback, useState } from 'react';
import CallbackChild from "./CallbackChild";
import NormalChild from "./NormalChild";
function UseCallback() {
  const [data, setData] = useState(0);
  console.log("父级加载.....");
  const updateData = (_data: number) => {
    setData(_data);
  }
  const memoizedCallback = useCallback(updateData, []);

  return (
    <>
      <Card title="useCallback">
        <p>1. 返回一个memoized(记忆化)回调函数 === 缓存型，即回调函数仅在某个依赖项改变时才更新</p>
        <p>2. 正常的情况下，父组件的某个值更新，子组件都会重新渲染，在某些场景下造成了不必要的渲染。useCallback可以起到减少子级不必要的渲染的作用</p>
        <p>3. 父级使用useCallback,子级创建时使用React.memo搭配使用</p>
        <p className="color-red">差别请查看控制台打印</p>
        <p><Button type="primary" onClick={() => { memoizedCallback(data - 1) }}>useCallbackDemo示例：{data}</Button></p>
        <CallbackChild />
        <NormalChild />
      </Card>
    </>
  )
}
export default UseCallback;