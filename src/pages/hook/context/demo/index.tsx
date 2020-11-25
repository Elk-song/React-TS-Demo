import React from 'react';
import PageLayout from "./PageLayout";
interface IProps {
  user: {
    permalink: string;
  },
  avatarSize: number;
}
function PageDemo(props: IProps) {
  const user = props.user;
  const userLink = (
    <a href={user.permalink} target="blank">
      {user.permalink}
      <div>{props.avatarSize}</div>
    </a>
  );
  const childTop = (
    <div>{props.user.permalink}</div>
  )
  return (

    <PageLayout childTop={childTop} userLink={userLink} />

  )
}
export default PageDemo;