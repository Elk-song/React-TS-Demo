import store from '@/store';
import { USER_MENU } from '@/store/actionType';
import { Button } from 'antd';
import React from 'react';
class Login extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  login = () => {
    localStorage.setItem("token", "123");
    store.dispatch({
      type: USER_MENU,
      data: require("@/routers/constansRoute").default
    })
    this.props.history.replace("/home");
    this.props.history.go();
  }
  render() {
    return (
      <Button onClick={this.login}>123456</Button>
    )
  }
}


export default Login;