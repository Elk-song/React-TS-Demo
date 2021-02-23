import React from 'react';
// import PageLayout from "./PageLayout";
interface IProps {
  user: {
    permalink: string;
  },
  avatarSize: number;
}
function PageDemo(props: IProps) {
  const user = props.user;
  const userLink = (
    <a href={user.permalink}>
      <div>{props.avatarSize}</div>
    </a>
  );
  const childTop = (
    <div>
      {user.permalink}
    </div>
  )

  return (

    <PageLayout childTop={childTop} userLink={userLink} />
    // <PageLayout userLink={userLink}/>

  )
}
export default PageDemo;