import React from 'react';
import UseCallback from "./useCallback/UseCallback";
import UseRef from "./useRef/UseRef";
import UseLayoutEffect from "./useLayoutEffect/UseLayoutEffect";
function OtherHooks() {
  return (
    <>
      <UseCallback />
      <UseRef />
      <UseLayoutEffect />
    </>
  )
}
export default OtherHooks;