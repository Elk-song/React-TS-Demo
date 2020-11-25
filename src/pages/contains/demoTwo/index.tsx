import { Card } from 'antd';
import React from 'react';
import ChildDemo from "./ChildDemo";
function DemoTwo() {
  return (
    <>
      <Card title="预留插槽，自行约定">
        <ChildDemo top={(<div>上</div>)} bottom={(<div>下</div>)}>
        </ChildDemo>
      </Card>
    </>
  )
}
export default DemoTwo;