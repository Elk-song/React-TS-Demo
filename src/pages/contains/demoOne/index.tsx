import { Card } from 'antd';
import React from 'react';
import ChildDemo from "./ChildDemo";
function DemoOne() {
  return (
    <>
      <Card title="props.childen">
        <ChildDemo>
          <h1>子级内容定义</h1>
        </ChildDemo>
      </Card>

    </>
  )
}
export default DemoOne;