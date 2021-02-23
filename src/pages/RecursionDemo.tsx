import React from 'react';
import ChildDemo from "./ChildDemo";
function RecursionDemo() {
  return (
    <div className="recursion-demo">
      <ChildDemo top={(<div>上</div>)} bottom={(<div>下</div>)}/>
    </div>
  )
}
export default RecursionDemo;