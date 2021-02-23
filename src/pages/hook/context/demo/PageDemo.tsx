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
  )
  return (
    <div>
      dasdas
    </div>
    // <PageLayout userLink={userLink}/>

    )
}
export default PageDemo;