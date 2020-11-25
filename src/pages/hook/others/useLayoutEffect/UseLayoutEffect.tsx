import { Button, Card } from 'antd';
import React, { useEffect, useLayoutEffect, useState } from 'react';
function UseLayoutEffect() {
  useLayoutEffect(() => {
    console.log("layoutEffect------")
  })
  useEffect(() => {
    console.log("effect----")
  })

  const [data, setData] = useState(0);
  const updateData = () => {
    setData(data - 1);
  }
  return (
    <>
      <Card title="useLayoutEffect">
        <p>对比来看：</p>
        <h3 className="color-red">useEffect</h3>
        <div>
          <p>该 Hook 接收一个包含命令式、且可能有副作用代码的函数。</p>
          <p>
            在函数组件主体内（这里指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，
            因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性。
          </p>
          <p>使用 useEffect 完成副作用操作。赋值给 useEffect 的函数会<span className="color-red">在组件渲染到屏幕之后执行</span>。</p>
          <p>你可以把 effect 看作从 React 的纯函数式世界通往命令式世界的逃生通道。</p>
          <p className="color-red">在渲染时是异步执行，并且要等到浏览器将所有变化渲染到屏幕后才会被执行。</p>
          <p>useEffect 的 detroy 函数从调用时机上来看，更像是 componentDidUnmount (注意React 中并没有这个生命周期函数)。</p>
        </div>
        <h3 className="color-red">useLayutEffect</h3>
        <div>
          <p>函数签名与 useEffect 相同，但它<span className="color-red">会在所有的 DOM 变更之后同步调用 effect</span>。</p>
          <p>可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。</p>
          <p className="color-red">在渲染时是同步执行，其执行时机与 componentDidMount，componentDidUpdate 一致,会阻塞浏览器渲染</p>
          <p>useLayoutEffect 的 detroy 函数的调用位置、时机与 componentWillUnmount 一致，且都是同步调用。</p>
          <p>建议将修改 DOM 的操作里放到 useLayoutEffect 里,如果放在 useEffect 里，useEffect 的函数会在组件渲染到屏幕之后执行，此时对 DOM 进行修改，会触发浏览器再次进行回流、重绘，增加了性能上的损耗。</p>
        </div>
        <Button type="primary" onClick={updateData}>更新观察</Button>
      </Card>
    </>
  )
}
export default UseLayoutEffect;