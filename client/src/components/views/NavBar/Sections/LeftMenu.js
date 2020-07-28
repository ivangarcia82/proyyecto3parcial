import React from 'react';
import { Menu } from 'antd';
import { useSelector } from "react-redux";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  const user = useSelector(state => state.user)
  if (user.userData && user.userData.isAdmin) {
    return (
      <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Productos</a>
      </Menu.Item>
    </Menu>
    )
  }

  else{
    return (
      <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Inicio</a>
      </Menu.Item>
      <Menu.Item>
          <a href="/nosotros">Nosotros</a>
      </Menu.Item>
    </Menu>
    )
  }
}
export default LeftMenu