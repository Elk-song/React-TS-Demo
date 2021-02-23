import React from 'react';
import { Layout } from 'antd';
import GlobalSider from "./GlobalSider";
import "./BasicLayout.css";
import { renderRoutes } from 'react-router-config';
function BasicLayout(props: any) {
  const routes = props.route.children;
  return (
    <Layout className="react-demo-layout">
      {/* 
        Link标签和Route需要在同一个Router下，不然触发不了页面跳转
      */}
      <GlobalSider />
      <Layout>
        <Layout.Header>React-Demo学习</Layout.Header>
        <Layout.Content className="react-demo-layout__content">
          {renderRoutes(routes)}
        </Layout.Content>
      </Layout>
    </Layout>
  )
}
export default BasicLayout;