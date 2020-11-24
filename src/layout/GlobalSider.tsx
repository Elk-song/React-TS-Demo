import React from 'react';
import { Layout } from 'antd';
import MenuComponent from "@/components/MenuComponent";
import { menuList } from "@/core/constans";
const { Sider } = Layout;

function GlobalSider() {
  return (
    <Sider>
      <MenuComponent menus={menuList} />
    </Sider>
  )
}
export default GlobalSider;