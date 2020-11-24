import React, { Suspense } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from 'antd';
import GlobalSider from "./GlobalSider";
import "./BasicLayout.css";
import { IRouteConfig } from '@/routers/routerConfig';

const { Header, Content } = Layout;
const routes: IRouteConfig[] = require("@/routers").default;
function BasicLayout() {
  console.log(routes)
  return (
    <Layout className="react-demo-layout">
      {/* 
        Link标签和Route需要在同一个Router下，不然触发不了页面跳转
      */}
      <BrowserRouter >
        <GlobalSider />
        <Layout>
          <Header>React-Demo学习</Header>
          <Content className="react-demo-layout__content">
            <Suspense fallback={<div>Loading...</div>}>
              {routes.map((route: IRouteConfig) => {
                return <Route path={route.path} component={route.component} key={route.key} />
              })}
            </Suspense>
          </Content>
        </Layout>
      </BrowserRouter>
    </Layout>
  )
}
export default BasicLayout;