import { Input } from 'antd';
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
const ChildDemo = forwardRef((props: any, ref: any) => {
  const childRef = useRef(null);
  const [state, setState] = useState("")
  const handleChange = (event: any) => {
    setState(event.target.value);
  }
  useImperativeHandle(ref, () => ({
    inputFocus: () => {
      (childRef.current as unknown as Input).focus();
    }
  }))
  return (
    <Input size="small" ref={childRef} value={state} onChange={handleChange} />
  )
})
export default ChildDemo;