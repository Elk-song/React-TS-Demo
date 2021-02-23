import React from "react";
import { IRouteConfig } from "./routerConfig";
const home = require("@/pages/home/home")
const routes: IRouteConfig[] = [
  {
    title: "home",
    path: "/home",
    key: "home",
    component: React.lazy(() => import("@/pages/home/home"))
  },
  {
    title: "hooks",
    path: "/hook",
    key: "hook",
    children: [
      {
        title: "useState",
        path: "/hook/useState",
        key: "useState",
        component: React.lazy(() => import("@/pages/hook/UseState"))
      },
      {
        title: "useEffect",
        path: "/hook/useEffect",
        key: "useEffect",
        component: React.lazy(() => import("@/pages/hook/UseEffect"))
      },
      {
        title: "自定义Hook",
        path: "/hook/customHook",
        key: "customHook",
        component: React.lazy(() => import("@/pages/hook/custom/CustomDemo"))
      },
      {
        title: "useReducer",
        path: "/hook/useReducer",
        key: "useReducer",
        component: React.lazy(() => import("@/pages/hook/reducer"))
      },
      {
        title: "useContext",
        path: "/hook/useContext",
        key: "useContext",
        component: React.lazy(() => import("@/pages/hook/context"))
      },
      {
        title: "others",
        path: "/hook/others",
        key: "others",
        component: React.lazy(() => import("@/pages/hook/others/OtherHooks"))
      },
    ]
  },
  {
    title: "组合",
    path: "/contains",
    key: "contains",
    children: [
      {
        title: "组合-包含",
        path: "/contains/demo",
        key: "contains-demo",
        component: React.lazy(() => import("@/pages/contains"))
      },
    ]
  },
  {
    title: "路由",
    path: "/router",
    key: "router",
    children: [
      {
        title: "路由demo1",
        path: "/router/demo1",
        key: "router-1",
        component: React.lazy(() => import("@/pages/router-demo/RouterDemo"))
      },
    ]
  },
  {
    title: "类组件",
    path: "/class",
    key: "class",
    children: [
      {
        title: "注入测试",
        path: "/class/inject",
        key: "class-inject",
        component: React.lazy(() => import("@/pages/class-demo/injectClass"))
      }
    ]
  }
];

const route: IRouteConfig[] = [
  {
    title: "hooks",
    path: "/hook",
    key: "hook",
    children: [
      {
        title: "useState",
        path: "/hook/useState",
        key: "useState",
        component: "pages/hook/UseState"
      },
      {
        title: "useEffect",
        path: "/hook/useEffect",
        key: "useEffect",
        component: "pages/hook/UseEffect"
      },
      {
        title: "自定义Hook",
        path: "/hook/customHook",
        key: "customHook",
        component: "pages/hook/custom/CustomDemo"
      },
      {
        title: "useReducer",
        path: "/hook/useReducer",
        key: "useReducer",
        component: "pages/hook/reducer/index"
      },
      {
        title: "useContext",
        path: "/hook/useContext",
        key: "useContext",
        component: "pages/hook/context/index"
      },
      {
        title: "others",
        path: "/hook/others",
        key: "others",
        component: "pages/hook/others/OtherHooks"
      },
    ]
  },
  {
    title: "组合",
    path: "/contains",
    key: "contains",
    children: [
      {
        title: "组合-包含",
        path: "/contains/demo",
        key: "contains-demo",
        component: "pages/contains/index"
      },
    ]
  },
]

export default route;