import store from '@/store';
import { TEST_INFO } from '@/store/actionType';
import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
const ReduxDemo = () => {
  // const [unsubscribe,setSubscribe] = useState(null);

  useEffect(() => {
    store.dispatch({
      type: TEST_INFO,
      data: {
        count: 0
      }
    });
    // setSubscribe(store.subscribe(() => {

    // }))
  })
  return (
    <div>
      <Card title="redux-thunk">
        <p>判断每个经过它的action：</p>
        <p>如果是function类型，就调用这个function（并传入 dispatch 和 getState 及 extraArgument 为参数），而不是任由让它到达 reducer，</p>
        <p>因为 reducer 是个纯函数，Redux 规定到达 reducer 的 action 必须是一个 plain object 类型。</p>
      </Card>
      <Card title="Redux">
        <h3 className="color-red">Action</h3>
        <p>是把数据从应⽤传到 store 的有效载荷。</p>
        <p>它是 store 数据的唯⼀来源。⼀般来说你会通过  store.dispatch() 将action 传到 store。</p>
        <h3 className="color-red">Reducer</h3>
        <p>就是⼀个纯函数，接收旧的 state 和 action，返回新的 state</p>
        <p>之所以称作 reducer 是因为它将被传递给  Array.prototype.reduce(reducer,?initialValue)  ⽅法。</p>
        <h3 className="color-red">Store</h3>
        <p>1. 维持应用的state</p>
        <p>2. 提供 getState() 方法获取state</p>
        <p>3. 提供 dispatch(action) 方法更新state</p>
        <p>4. 通过 subscribe(listener)注册监听器</p>
        <p>5. 通过 subscribe(listener)返回的函数注销监听器</p>
        <h3 className="color-red">combineReducers</h3>
        <p>作用：把一个由多个不同reducer函数作为value的object，合并成一个最终的reducer函数，最后就可以对这个reducer调用createStore</p>
        <p>参数：reducer</p>
        <p>返回值：一个调用reducers对象里所有reducer，并且构造一个与reducer对象结构相同的state对象</p>
        <h3 className="color-red">createStore</h3>
        <p>作用：创建一个Redux store来以存放应用中所有的state</p>
        <p></p>
        <h3 className="color-red">compose</h3>
        <p>作用：从右到左来组合多个函数。</p>
        <p>参数: (arguments): 需要合成的多个函数。预计每个函数都接收一个参数。</p>
        <p>返回值：从右到左把接收到的函数合成后的最后函数</p>
      </Card>

    </div>
  )
}
export default ReduxDemo;