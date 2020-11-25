/**
 * 谨慎使用context,会让复用性变差
 * 避免层层传递属性，可以使用组件组合
 */
import { Divider } from "antd";
import React, { useState } from "react";
import ContextChild from "./ContextChild";

// 创建一个context
export const ThemeContext = React.createContext("light");
let count: number = 0;
function ContextDemo() {
  const [name, setName] = useState("111");
  const updateName = () => {
    count++;
    setName(`第${count}次修改name`);
  }
  return (
    <>
      <button onClick={updateName}>修改name值{count}</button>
      {/* 使用一个Provider来将当前的值传递给以下的组件树 */}
      <ThemeContext.Provider value={name}>
        {/*中间的组件不需要再指明往下传递的值了 */}
        <ContextChild />
      </ThemeContext.Provider >
      <Divider />
      <h3 className="color-red"></h3>
    </>
  )
}

export default ContextDemo;