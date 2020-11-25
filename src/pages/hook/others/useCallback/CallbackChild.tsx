import React from 'react';
const CallbackChild = React.memo(() => {
  console.log("callback子级加载.....");
  return (
    <div>
      {/* 使用了useCallback(父级) + React.memo(子级)的子组件 */}
    </div>
  )
})
export default CallbackChild;