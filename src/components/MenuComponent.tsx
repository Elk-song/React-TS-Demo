import React from 'react';
import { Menu } from "antd";
import { Link } from 'react-router-dom';
import { IMenu } from "@/core/constans";
const isShow = (_children: IMenu[]) => {
  return _children && _children.length > 0;
}
interface IProp {
  menus: IMenu[]
}
class Menus extends React.Component<IProp, any> {
  constructor(props: IProp) {
    super(props);
  }
  renderMenu = (data: IMenu[]) => {
    return data.map(item => {
      if (isShow(item.children)) {
        return <Menu.SubMenu key={item.key} title={item.title}>
          {this.renderMenu(item.children)}
        </Menu.SubMenu>
      }
      return <Menu.Item key={item.key} title={item.title}>
        <Link to={item.path}>{item.title}</Link>
      </Menu.Item>

    })
  }
  componentWillMount() {
    const menuTreeNode: JSX.Element[] = this.renderMenu(this.props.menus);
    this.setState({
      menuTreeNode
    })
  }

  render() {
    return (
      <Menu mode="inline" theme="dark" >
        {this.state.menuTreeNode}
      </Menu>
    )
  }
}


export default Menus;