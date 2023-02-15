import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    curser: pointer;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  padding: 10px;

  &:hover {
    background: #632ce4;
    curser: pointer;
    
  }
`

const NavSubMenu = ({ menu }) => {

    const [ subnav, setSubnav ] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

  return (
    <>
      <SidebarLink to={"#"} onClick={menu.subNav && showSubnav}>
        <div>
          {menu.icon}
          <SidebarLabel>{menu.title}</SidebarLabel>
        </div>
        <div>
          {menu.subNav && subnav
            ? menu.iconOpen
            : menu.subNav
            ? menu.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav && menu.subNav.map(( item, index) => {
        return (
            <DropdownLink to={item.path} key={index} >
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
            
      )
      }) }
    </>
  );
};

export default NavSubMenu;
