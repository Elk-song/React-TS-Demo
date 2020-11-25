import React, { useContext } from 'react';
import ThemeButton from "./ThemeButton";
import { ThemeContext } from ".";
function ContextChild() {
  const context = useContext(ThemeContext);
  return (
    <div>
      祖父传递：{context}
      <ThemeButton />
    </div>
  )
}

export default ContextChild;