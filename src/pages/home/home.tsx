import store from '@/store';
import { TEST_INFO } from '@/store/actionType';
import { Button } from 'antd';
import React from 'react';
import { Unsubscribe } from 'redux';
class Home extends React.Component<{}, { testReducer: number }> {
  count: number = 0;
  unsubscribe!: Unsubscribe;
  constructor(props: {}) {
    super(props);
    this.state = {
      testReducer: 0
    }

  }
  componentWillMount() {
    store.dispatch({
      type: TEST_INFO,
      data: {
        count: 0
      }
    });

    this.unsubscribe = store.subscribe(() => {
      this.setState({
        testReducer: store.getState().test.testDemo.count
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  updateState = () => {
    this.count += 1;
    store.dispatch({
      type: TEST_INFO,
      data: {
        count: this.count
      }
    })
  }
  render() {
    return (
      <div>
        <Button onClick={this.updateState}>修改testReducer</Button>
        <p>{this.state.testReducer}</p>
      </div>
    )
  }
}
export default Home;