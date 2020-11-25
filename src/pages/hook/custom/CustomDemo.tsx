import { Button, Card } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import useFetchApi from "./UseFetchApi";

const query:string="redux";

function CustomDemo() {
  // 自定义的hook
  const state = useFetchApi(query);

  const doFetchDispatch = useCallback(state.doFetch, [query]);

  useEffect(() => {
    doFetchDispatch();
  }, [doFetchDispatch])

  const [data, setData] = useState(0);
  const updateData = () => {
    setData(data + 3);
  }
  return (
    <>
      <Card title="知识点">
        <h2>自定义Hook</h2>
        <p>
          <a href="https://react.docschina.org/docs/hooks-custom.html">学习链接</a>
        </p>
        <p>1. 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook。</p>
        <p>2. 两个组件中使用相同的Hook不会共享state</p>
        <p>3. 每次调用 Hook，它都会获取独立的 state</p>
      </Card>
      <div className="content-demo">
        <Button onClick={updateData}>更新测试</Button>
        <p>自定义Hook根据传值渲染的demo:</p>
        {
          state.isError ?
            <div>Something went wrong ...</div> :
            (state.isLoading ? (<div>loading....</div>) : <p>{state.hitsPerPage}</p>)
        }
      </div>
    </>
  )
}
export default CustomDemo;