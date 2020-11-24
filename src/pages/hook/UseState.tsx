import { Button, Card } from 'antd';
import React, { useState } from 'react';
function UseState() {

  /**
   * state
   *    1. 它与 class 里面的 this.state 提供的功能完全相同
   *   
   */

  /**
   * useState()方法唯一参数就是初始state
   * 返回值： 当前state和更新state的函数
   * 这与 class 里面 this.state.count 和 this.setState 类似，唯一区别就是你需要成对的获取它们。
   */

  const [state, setState] = useState("初始值");

  const [data, setData] = useState(0);

  const updateState = () => {
    // 更新state
    setState("被修改的值");
  }

  const updateData = () => {
    setData(data + 1);
  }


  // const 
  return (
    <div className="useState">
      <Card title="知识点">
        <h2>state</h2>
        <p>
          <a href="https://react.docschina.org/docs/hooks-state.html">学习链接</a>
        </p>
        <p>
          <a href="https://react.docschina.org/docs/hooks-reference.html">Api链接-其他文件不再贴此链接</a>
        </p>
        <p> 1. 它与 class 里面的 this.state 提供的功能完全相同</p>
        <p> 2. 在函数退出后变量就会”消失”，而 state 中的变量会被 React 保留。</p>
        <h3>useState</h3>
        <p> 1. useState()方法唯一参数就是初始state</p>
        <p> 2. 返回值： 当前state和更新state的函数</p>
        <p> 3. 这与 class 里面 this.state.count 和 this.setState 类似，唯一区别就是你需要成对的获取它们。</p>
        <h3>跳过state更新：</h3>
        <p className="color-green">调用 State Hook 的更新函数并传入当前的 state</p>
        <p>如果你在渲染期间执行了高开销的计算，则可以使用 useMemo 来进行优化。useMemo详情查看<span className="color-red">其他</span>,项目的hook/OtherHook文件</p>
      </Card >
      <div className="content-demo">
        <Button onClick={updateState}>点击修改state</Button>
        <p>{state}</p>
        <Button onClick={updateData}>点击修改data</Button>
        <p>{data}</p>
      </div>
    </div >
  )
}
export default UseState;