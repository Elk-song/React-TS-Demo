import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import "./index.css";
import Router from "@/routers/index";
import store from './store';
import { USER_MENU } from './store/actionType';
let token = localStorage.getItem("token");
if (!!token) {
  store.dispatch({
    type: USER_MENU,
    data: require("@/routers/constansRoute").default
  });

}
ReactDOM.render(
  <Router />,
  document.getElementById('root')
);


