import { Card } from 'antd';
import React, { useCallback, useEffect } from 'react';
import useFetchApi from "./UseFetchApi";
function CustomDemo() {
  // 自定义的hook
  const { hitsPerPage, isLoading, isError, doFetch } = useFetchApi("redux");
  // 减少子级不必要的render，useMemo的语法糖
  const doFetchDispatch = useCallback(doFetch,[]);
  
  useEffect(() => {
    doFetchDispatch();
  }, [doFetchDispatch])

  return (
    <div>
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
        <p>自定义Hook根据传值渲染的demo:</p>
        {
          isError ?
            <div>Something went wrong ...</div> :
            (isLoading ? (<div>loading....</div>) : <p>{hitsPerPage}</p>)
        }
      </div>
    </div>
  )
}
export default CustomDemo;