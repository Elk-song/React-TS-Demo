import React from 'react';
function PageLayout(props: { userLink: JSX.Element, childTop: JSX.Element }) {
  console.log(props);
  return (
    <div>
      {props.userLink}
      這是中間自己的内容
      {props.childTop}
    </div>
  )
}
export default PageLayout;