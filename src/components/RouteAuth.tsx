import React from "react";
import { IRouteConfig } from "@/routers/routerConfig";
import { Redirect, Route } from "react-router-dom";
import { asyncComponent as async } from "./AsyncComponent";
import mainView from "@/layout/BasicLayout";
import { renderRoutes } from "react-router-config";
import home from "@/pages/home/home";
import store from "@/store";
const Main = [
  {
    path: '/',
    component: mainView,
    children: [
      {
        path: "/home",
        component: home,
        children: [] as IRouteConfig[]
      }
    ] as IRouteConfig[]
  }
];
class RouteAuth extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  handleRouters(menu: IRouteConfig[]) {
    let childRouter: IRouteConfig[] = [];
    menu.forEach((item) => {
      if (!!item.children) {
        childRouter = [...childRouter, ...this.handleRouters(item.children)];
      } else {
        let component = item.component;
        item.component = async(() => import(/* webpackChunkName: "[request]" */ `@/${component}.tsx`));
        return childRouter.push(item)
      }
    })
    return childRouter
  }

  render() {
    let { config } = this.props;
    const { pathname } = window.location;
    let targetRouterConfig = config.find((item: IRouteConfig) => item.path === pathname);
    let token = localStorage.getItem("token");
    if (!!token) {
      if (pathname === "/login" || pathname === "/") {
        if (Main[0].children.length === 1) {
          let menu = store.getState().user.menu;
          let menus = this.handleRouters(menu);
          Main[0].children = [...Main[0].children, ...menus];
          return (<>
            {renderRoutes(Main)}
            <Redirect to="/home" />
          </>)
        } else {
          return <Redirect to="/home" />
        }
      } else {
        if (targetRouterConfig) {
          if (pathname === "/404") {
            let { component } = targetRouterConfig;
            return <Route exact path={pathname} component={component} />
          } else {
            return <Redirect to="/home" />
          }
        } else {
          //判断没有设置权限菜单，则根据菜单设置上
          if (Main[0].children.length === 1) {
            let menu = store.getState().user.menu;
            let menus = this.handleRouters(menu);
            Main[0].children = [...Main[0].children, ...menus];;
          }
          //如果菜单中包含当前路由，则进入
          let menuConfig = Main[0].children.filter((item) => {
            return item.path === pathname
          });
          if (menuConfig.length != 0) {
            return renderRoutes(Main);
          } else {//不包含则进入404
            return (
              <>
                {config.map((route: IRouteConfig) => {
                  return <Route exact path={route.path} component={route.component}></Route>
                })}
                <Redirect to='/404' />
              </>
            )
          }
        }
      }
    } else {  // 非登录状态
      return (
        <>
          {config.map((route: IRouteConfig) => {
            return <Route exact path={route.path} component={route.component}></Route>
          })}
          <Redirect to='/login' />
        </>
      )
    }


  }
}

export default RouteAuth;