import { Button, Card, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from "axios";
const url = "http://hn.algolia.com/api/v1/search?query=redux";
function UseEffect() {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count+1);
  }

  const [data, setData] = useState(0);
  const updateData = () => {
    setData(data-1)
  }

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [hitsPerPage, setFetchData] = useState(0);
  // 异步示例：
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        result.status === 200 && setFetchData(result.data.hitsPerPage);
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  //#region 测试effect更新
  console.log("执行1.....");
  useEffect(() => {
    console.log("执行2.....");
  }, []);

  useEffect(() => {
    console.log("执行3.....");
  }, [count]);

  useEffect(() => {
    console.log("执行4.....")
  }, [data])

  useEffect(() => {
    console.log("执行5.....");
  })

  //#endregion


  return (
    <div>
      <Card title="知识点">
        <h2>useEffect</h2>
        <p><a href="https://react.docschina.org/docs/hooks-effect.html">学习链接 </a></p>
        <p>告诉 React 组件需要在渲染后执行某些操作。React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后调用它。</p>
        <p>useEffect用于处理组件中的effect，通常用于请求数据，事件处理，订阅等相关操作。</p>
        <p>可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。</p>
        <p className="color-red">第一次渲染之后和每次更新之后都会执行。</p>
        <Divider />

        <p>需要清除effect的，需要返回一个函数，用来清除，不需要清除的，不用返回。</p>
        <Divider />
        <p>在某些情况下，每次渲染后都执行清理或者执行 effect 可能会导致性能问题。</p>
        <p>你可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可</p>
        <h3>具体看demo，<span className="color-red">注意看控制台打印，可以看到刷新数据的区别</span></h3>
        <Divider />
        <div >
          <h3 className="color-red">注意：</h3>
          <p>不能直接在useEffect中使用async函数</p>
          <p>书写方式查看<span className="color-red">loading---Demo</span></p>
        </div>
      </Card>
      <div className="content-demo">
        <Button onClick={updateCount}>修改Count：{count}（会打印1、3、5）</Button>
        <Button onClick={updateData}>修改Data：{data} （会打印1、4、5）</Button>
        <Divider />
        <p className="color-red">loading---Demo</p>
        {
          isError ?
            <div>Something went wrong ...</div> :
            (isLoading ? (<div>loading....</div>) : <p>{hitsPerPage}</p>)
        }
      </div>
    </div>
  )
}
export default UseEffect;