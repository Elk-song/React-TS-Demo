import React from 'react';
function ChildDemo(props:any) {
  return (
    <div>
      {props.children}
    </div>
  )
}
export default ChildDemo;