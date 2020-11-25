import { Card } from 'antd';
import React from 'react';
import ContextRecursion from "./ContextRecursion";
import PageDemo from "./demo";
function ContextDemo() {
  const childProps = {
    user: {
      permalink: 'https://www.baidu.com'
    },
    avatarSize: 20
  }
  return (
    <div>
      <Card title="知识点">
        <h2>useContext —— 共享</h2>
      </Card>
      <div className="context-demo">
        <h3 className="color-red">层层递归型:谨慎使用，因为这会使得组件的复用性变差。</h3>
        <ContextRecursion />
        <h3 className="color-red">利用组合的方式，避免层层传递的方式</h3>
        <PageDemo user={childProps.user} avatarSize={childProps.avatarSize} />
      </div>
    </div>
  )
}
export default ContextDemo;