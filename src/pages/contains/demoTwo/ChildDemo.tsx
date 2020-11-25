import React from "react";

function ChildDemo(props:any){
  return (
    <div className="child-demo">
      {props.top}
      <p>中间</p>
      {props.bottom}
    </div>
  )
}
export default ChildDemo;